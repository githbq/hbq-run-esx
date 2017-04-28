#  模块名称: run-esx 以babel->es7+支持最高特性,执行引导入口文件
## 描述
1. 简介1
2. 简介2
![my love](./logo.png)
## 用例
``` javascript
//新建文件  run
#!/usr/bin/env node
require('run-esx')([__dirname,'index']);
```
> 这样你就可以尽情的在index里使用es7+了

> 改自runKos,但是runEsx 作了一些限制,只好重写它的核心代码,会经常与runEsx跟进!