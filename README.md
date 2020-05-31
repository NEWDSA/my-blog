# my-blog
这是我初次使用vue和bootstrap-vue 进行一次探索。
在此之前曾尝试手动使用写样式，但效果不理想，页面不美观样式不统一。
当然在之前也使用过其它框架与vue配合使用效果不理想。
# 使用到的工具
axios用于数据的请求与发送
vue/cli 方便快速构建工程
bootstrap-vue 更适合结合vue使用且适配pc移动端
qull-editor 更适合移动pc端
sqlserver express 2019
# nodejs及各种工具版本号
node v12.13.0
webpack 4.41.2
vue    4.41.2
# 将要完成的功能
1.首页的展示
2.查看日记
3.相册浏览
4.关于我
5.数据分页(待考量）
6.后台管理页面相册管理、日记管理、关于我页面的管理
7.访问统计（待考量）
# 数据表结构
## 相册表(Luciano_Photo)
| id         | int             |
|------------|-----------------|
| title      | nvarchar\(50\)  |
| url        | nvarchar\(max\) |
| insertTime | datetime        |
| updateTime | datetime        |
## 日记表(Luciano_Note)
| id         | int             |
|------------|-----------------|
| title      | nvarchar\(50\)  |
| content    | nvarchar\(max\) |
| insertTime | datetime        |
| updateTime | datetime        |
