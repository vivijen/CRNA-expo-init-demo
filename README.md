# CRNA-demo
a small react-native project build with create-react-native-app 

 expo init projectname, if i delete node_modules package, i have no idea to reinstall node_modules, so this version will not be the production version nor the beta version, only the play version.....

#将项目发布到expo上
https://expo.io/@weiwy/CRNA-demo
用nadroid手机版expo扫描页面上二维码即可快速访问本项目，ios呢？？

# android打包
expo build:android
遇见 Would you like to upload a keystore or have us generate one for you?
If you don't know what this means, let us handle it! :)

  1) Let Expo handle the process!
  2) I want to upload my own keystore!
  选择 1

#打包问题：
  第一次打包报错没成功。
  运行 expo fetch:android:keystore
  将keystore信息单独存储起来
  查看报错，大概是android sdk license报错，找到c盘AppData\Local\Android\Sdk\tools\bin，当前目录下执行 sdkmanager --licenses 同意所有的license，再次执行 expo build:android 成功，expo给出最终apk下载地址，打开地址获取apk安装包，大功告成

#ios打包
windows上可否打包ios安装包？？
