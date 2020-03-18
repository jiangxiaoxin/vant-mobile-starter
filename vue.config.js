const TerserPlugin = require("terser-webpack-plugin");
const px2rem = require("postcss-pxtorem");
module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          }
        })
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            rootValue: 100, //换算基数
            selectorBlackList: ["px"], //要忽略并保留为px的选择器。是字符串，就会将样式的名进行匹配。比如这里写px，那就所有带px的样式名都会保留原来的px值
            propList: ["*"],
            exclude: /(node_modules)/ //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
          })
        ]
      }
    }
  }
};
