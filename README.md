# music-react

> 前言：在七月份初学vue的时候，用vue全家桶做了一个模仿网易云的音乐播放器，那是我学前端的第四个月，不懂工程构建/项目构建/代码规范/模块复用的思想，也能运行，功能也颇为完善，但是最近翻看其代码的时候实在恶心到自己，删除了git仓库（心疼我的11颗star，但的确没有丝毫学习参考价值），用react重构了一遍，更加注重模块划分以及项目构建，并且引入了eslint与editorconfig规范自己的代码，目前还未重构完成（其实也就完成了主要的播放功能），所以没有打包发布。

![推荐歌单.png](http://upload-images.jianshu.io/upload_images/4869616-d24aa08f95605b93.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![歌单详情.png](http://upload-images.jianshu.io/upload_images/4869616-4a367530230faed0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 项目简介

该项目由 [Create React App](https://github.com/facebookincubator/create-react-app) 搭建.

[Github地址](https://github.com/worldzhao/music-react)

1. 工程构建：[Create React App](https://github.com/facebookincubator/create-react-app)

2. 项目搭建：

    1. views: views目录用于存放项目功能模块的页面，需要根据路由配置情况以及页面复杂程度大小分割子级目录
    2. config: config目录存放一些配置目录，比如API信息，路由配置等
    3. redux: redux目录用于存放项目state相关的文件，数据获取等等
    4. components: components目录用于存放非业务组件，或者在多个业务间都需要用到的功能组件
    5. common: common目录用于存放一些公共css以及js工具方法

3. 部分第三方库：

    1. 基础框架: react
    2. 前端路由: react-router[-dom] v4
    3. 数据管理: redux / react-redux  / redux-thunk
    4. 网络请求: axios
    5. css预处理器: stylus
    6. 字体图标: icomoon

4. 代码规范:

    1. eslint: airbnb (可参见src目录下的.eslintrc文件)
    2. 缩进空行等设置可参见项目根目录.editorconfig文件

5. API:

    1. [AD`s API](https://api.imjad.cn/cloudmusic.md)
    2. 部分API由我室友爬虫完成
    3. 使用详情参见`src/config/api.js`文件

![api.png](http://upload-images.jianshu.io/upload_images/4869616-8b1a851e3275acf5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 暂未重构完成

1. 歌词同步
2. 收藏歌单
3. 我喜欢的音乐
4. 歌手详情
5. 最近播放
6. 排行榜

## 预计添加功能
1. 性能优化（服务端渲染 service worker 动画优化等）

## 本地运行
```bash
git clone https://github.com/worldzhao/music-react.git

cd music-react

npm install

npm run dev
```
每学到一点新知识，新思想，我都会来改进这个项目，欢迎fork和star，如果你正在学习react，通过一个比较综合的项目来实战也还是非常不错的。

[Github地址](https://github.com/worldzhao/music-react)

[我的博客](https://worldzhao.github.io/archives/)

-initital commit on 2018/01/19
