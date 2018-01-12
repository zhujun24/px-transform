## CSS 单位转换 lodaer
将CSS文件里面的尺寸单位转换成您需要的单位，比如将 `px` 转换成 `rem`，也可以将自定义的单位转换成任意单位。

### 默认配置
```
{
  rate: 100, // 转换比例
  fixed: 4, // 小数位数
  originUnit: 'px', // 原始单位
  targetUnit: 'rem' // 目标单位
}
```
默认配置表示按照 `1rem = 192px` 的比率把 `px` 转换成 `rem`，保留四位小数。

### 自定义配置
自定义配置需要在项目根目录下新建 `px-transform.json` 文件

### Webpack 配置
```
{
  test: /\.less$/,
  exclude: /node_modules/,
  loader: 'style!css!px-transform!postcss!less'
}
```
