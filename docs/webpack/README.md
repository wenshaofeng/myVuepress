# Webpack

### 基本知识体系
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-b341fa2f8d568232.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-8937544fbfd731fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 为什么要模块化

#### 一：前后端分工的变化
- 过去，前端只能处理静态页面和静态页面上的动画
- 而现在，前端有前端的逻辑，也有自己路由，以及客户端渲染(SPA单页应用)，也有自己的渲染(ajax请求)
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-b46902625abc0d6f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 二：框架的变化
JS库====> MVC =====> MV*
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-d3106c07bfe8d848.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 三：语言的变化
- HTML的发展
- CSS 的发展，预处理语言(less,sass,stylus) 
- JS 的发展， JS===>(ES6/ES7/ES8)、coffeeScript、TS  


**总结**：由于前端的可以做的事情越来越多，前端要处理的逻辑越来越复杂，业务逻辑越来越多，那么相对应的文件也会越来越多，所以合理的项目文件结构就变得比较重要，否则后期难以添加功能和进行维护

### 为什么前端要构建？
- 开发复杂化
- 框架去中心化  ( 也就是说，需要某个功能，才去下某个功能需要的模块，专注于解决一个问题，而不是解决所有问题。框架变得不再是大而全 )
- 新的语言的编译
- 开发模块化

### JS模块化的规范

#### 命名空间
为了避免函数名的冲突，而采用的方式
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-24eb3e4bb53d6ca0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### Commonjs (动态导入)
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-27fcda382a0545c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-c2117b59872b237e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### AMD(异步加载) 例子：RequireJS 
为了使得浏览器和 nodejs 一样具有模块化开发的特点，社区发明了AMD 规范，也就是Async Module Definition，在Commonjs 中，所有的模块是同步加载，服务端由于都是本地文件可以承受这样的一个加载开销，而我们的浏览器端呢？如果要求用户来承担这一个同步加载所有模块的开销，一定会影响到用户的浏览网页的速度。AMD 正是为了解决这一点而生。

在 AMD 中定义模块是使用 define 函数，它可以接受三个参数。第一个参数是当前模块的 ID，相当于给这个模块起一个名字；第二个参数是当前模块的依赖，比如上面我们定义的 getSum 模块需要 math 模块的依赖；第三个参数可以是函数或者对象。如果是函数，可以利用函数的返回值将定义的模块接口导出；如果是对象，则代表它为当前模块的导出值。

通过这种形式定义模块的好处在于，它 **显式** 地表达出了每个模块所依赖的其它模块。并且模块定义也不再绑定到全局对象上，不必担心其在别的地方被篡改。

![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-05182cb55f0c5e3d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-a280763209c1abd2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### CMD(同步加载) 例子 ： SeaJS
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-ba0c67d114a6ab42.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-0493b6d2482022ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### UMD
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-7af38d93ff4df7cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-547c3491fb8113dc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### ESM (静态导入)
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-d00ac6876b6c62c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-82e7fde77d840ca1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-73c72ffc6ef06f61.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/9249356-07f673b023d3573a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### Webpack支持的
- AMD（requireJS）
- ES Modules（推荐的，原生支持）**注**tree shaking 只能使用 import 语法
- CommonJS（node） 

### 介绍
学习Webpack的代码仓库

Let's go
##### [00-什么是webpack](./00-什么是webpack.md)
##### [01-打包JS](./01-打包JS.md)
##### [02-编译ES6](./02-编译ES6.md)
##### [03-提取公共代码](./03-提取公共代码.md)
##### [04-代码分割和懒加载](./04-代码分割和懒加载.md)
##### [05-处理CSS](./05-处理CSS.md)
##### [06-处理scss](./06-处理scss.md)
##### [07-提取CSS和PostCSS](./07-提取CSS和PostCSS.md)
##### [08-JS Tree shaking](./08-JSTreeShaking.md)
##### [09-CSS Tree shaking](./09-CssTreeShaking.md)
##### [10-图片处理](./10-图片处理.md)
##### [11-字体处理](./11-字体文件.md)
##### [12-第三方JS库](./12-处理第三方JS库.md)
##### [13-自动生成HTML](./13-自动生成HTML.md)
##### [14-CleanPlugin and Watch Mode](./14-CleanPluginAndWatchMode.md)
##### [15-webpack-dev-server](./15-webpack-dev-server.md)
