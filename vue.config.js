// vue.config.js
const path =  require('path');
//打包分析插件
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
//gzip压缩
const CompressionWebpackPlugin = require("compression-webpack-plugin")
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
//添加别名
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',  // 公共路径
    indexPath: 'index.html' , // 相对于打包路径index.html的路径
    outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD, // 生产环境的 source map
    parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    pwa: {}, // 向 PWA 插件传递选项。
    configureWebpack: config => {
        const plugins = [];
        if(IS_PROD) {
            //splitchunks
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        common: {
                            name: "chunk-common",
                            chunks: "initial",
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 1,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        vendors: {
                            name: "chunk-vendors",
                            test: /[\\/]node_modules[\\/]/,
                            chunks: "initial",
                            priority: 2,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        elementUI: {
                            name: "chunk-elementui",
                            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                            chunks: "all",
                            priority: 3,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        'mavon-editor': {
                            name: "chunk-mavon",
                            test:  /[\\/]node_modules[\\/]mavon-editor[\\/]/,
                            chunks: "async",
                            priority: 20,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        'core-js': {
                            name: "chunk-corejs",
                            test: /[\\/]core-js[\\/]/,
                            chunks: "all",
                            priority: 20,
                            reuseExistingChunk: true,
                            enforce: true
                        }
                    }
                }
            };
            //gzip压缩
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: "[path].gz[query]",
                    algorithm: "gzip",
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
        }
    },
    chainWebpack: config => {
        config.resolve.symlinks(true); // 修复热更新失效
        // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
        config.plugin("html").tap(args => {
            // 修复 Lazy loading routes Error
            args[0].chunksSortMode = "none";
            return args;
        });
        config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'));

        // 生成打包分析报告
        if(IS_PROD){
            config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
                {
                    analyzerMode: "static"
                }
            ])
        };

        // spiltChunks
        if(IS_PROD) {
            config.optimization.delete("splitChunks");
        }
        return config;
    },
    css: {
        extract: IS_PROD,
        requireModuleExtension: false,// 去掉文件名中的 .module
        loaderOptions: {
                // 给 less-loader 传递 Less.js 相关选项
                less: {
                    // `globalVars` 定义全局对象，可加入全局变量
                    globalVars: {
                        primary: '#333'
                    }
                }
        }
    },
    devServer: {
            overlay: { // 让浏览器 overlay 同时显示警告和错误
                warnings: true,
                errors: true
            },
            host: "localhost",
            port: 8080, // 端口号
            https: false, // https:{type:Boolean}
            open: false, //配置自动启动浏览器
            hotOnly: true, // 热更新
            // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
            proxy: { //配置多个跨域
                '/api':{
                    target:'http://47.103.8.135:8080/demo',//目标url地址,云上后台地址
                    // target:'http://localhost:8080/demo',//目标url地址,
                    changeOrigin:true,//是否可以跨域
                    //ws: true,//websocket支持
                    secure: false,
                    pathRewrite:{
                        '^/api':'/'
                    }
                },
            }
        }
}
