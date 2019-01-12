### 目录说明

~~~
+-- src                              // 开发目录
|   +-- component                    // 组件开发目录(重点)
|   |    +--dist                     // react-ui 打包后位置
|   |   |    +--reactUI.min.js       // 打包后的reactUi压缩文件
|   |   +--index.js                  // 所有组件集合在这个文件
|   |   +--webpack.build.js          // webpack打包配置文件(生产环境)
|   |   +--webpack.build.js          // webpack打包配置文件(开发环境)
|   |   +--每个组件目录
|   |   |    +--index.demo.js        // 组件demo运行实例
|   |   |    +--index.js             // 组件定义文件
|   |   |    +--style.css            // 组件样式
|   |   |    +--webpack.build.js     // webpack打包配置文件(生产环境)
|   |   |    +--webpack.build.js     // webpack打包配置文件(开发环境)
|   +-- model                        // dva的model
|   |   +-- app.js              
|   +-- page                         // demo展示界面
|   +-- route                        // demo展示路由
|   +-- style                        // 全局样式
|   |   +-- index.less               //
|   +-- util                         // 帮助类
|   +-- app.js                       // demo入口文件
|   +-- constants.js                 // 常量定义
|   +-- index.html                   // 模板html
+-- .babelrc               
+-- .gitignore              
+-- LICENSE                 
+-- package.json             
+-- README.md                
+-- tsconfig.json            
~~~

### 展示界面的安装
~~~
cnpm/npm i
cnpm/npm run dev //开发环境
~~~



### 单个组件demo开发
~~~
进入./component/[xxx你的组件]

webpack-dev-server //可以看到浏览器打开新的界面
~~~
> 注意:如果没有webpack-dev-server，请cnpm  i webpack-dev-server -g

### 组件打包
~~~
cd ./component

webpack --config ./webpack.build.js

打包文件在./dist文件下
~~~

### 打包reactUI的使用
~~~
找到 ./component/dist/reactUI.min.js

import {  
    Toast,
    Bubble,
    Calender,...} from './reactUI.min.js'
~~~




## todo
 *  component文件下面的每个webpack.config.js+build.config.js公共提取