# qqbook

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##实现功能：
#1.小说模糊搜索
#2.加入书架功能
#3.阅读、章节跳转功能
#4.小说分类
#5.小说详情
#6.排行榜
#7.小说删除
#8.加载动画、上拉刷新、懒加载

##遇到问题：
1.项目组件复用导致再次带入参数不会渲染页面

解决：使用监听事件，监听路由是否进入当前页面，是就执行更新页面的函数
         '$route' (to, from) {
               if (to.name === 'detailsView') {
                 this.getBookDetail()
                 this.$store.commit()
               }
             }

2.项目组件多，加载不快

解决：图片使用懒加载 v-lazy="url" ，注意这是mint-ui的插件

3.每次切换tab页后都重新加载数据,使用keep-alive后，排行榜页面还是会发送请求

解决方法：使用created钩子进行请求数据，使用beforeEnterRoute重复发请求

4.列表一次性全部加载，没有实现滚动加载

解决方法：使用vue-scroll获取滚动的高度，更新渲染的数据

5.使用$router.push()后使用浏览器返回会完全还原历史路径

解决方法：存在二次跳转的，最好使用重定向解决，不要使用mounted之后在进行push操作

6.有多层页面，并且上级页面不确定时，路由返回错误

解决方法：将每层的页面路径分类并放到state中（二级页面，三级页面等等）分开管理，向state提交上级路径时，排除当页面的所有下级页面路径

7.异步获取数据后渲染模板 模板会先报错再等数据返回之后再做一次渲染

解决方法1：在渲染需要用到异步获取的数据的地方都先进行判断

解决方法2：事件在data定义异步获取数据的数据格式，避免报错

8.tab切换渲染加载等待加载动画效果

解决方法：使用vue-spinner组件

9.数据过滤问题

解决方法：使用filters加moment解决

10.跳转到相应路由标记active

解决方法：使用vue-router并设置exact属性即可

11.api为第三方网站的，存在跨域问题

使用代理将请求进行转发

12.事件绑定都是使用的是click，在移动端会出现延迟

解决方法：使用vue-touch#next，使用tap替代click事件
