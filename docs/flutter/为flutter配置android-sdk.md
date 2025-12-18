# 使用 Scoop 安装 android-sdk

根据最新情况（截止至2025.12.15），Scoop 的官方 bucket 中已经不再直接提供 "android-sdk" 包了。这是因为 Google 改变了 Android SDK 的分发方式。

可以通过以下步骤使用 Scoop 安装 Android SDK：

## 需要安装 Java JDK

```powershell
scoop install openjdk17
```

建议 11 以后的版本，因为可能会有一些工具不支持使用早期版本的 JDK。

## 安装 android-clt

```powershell
scoop install android-clt
```

这个包会安装 Android SDK 命令行工具，安装完成后，你可以使用其中的 `sdkmanager` 工具来安装所需的 SDK 组件。例如：

```powershell
sdkmanager "platform-tools" "platforms;android-36" "build-tools;36.0.0"
```

具体版本号可以上网搜索。不同版本号对应了不同 Android 版本应用开发所需 SDK 组件。

目前 flutter 要求至少安装 Android SDK Platform 36。

在安装完成以后，可以运行下面指令检查一下安卓开发环境：

```powershell
flutter doctor
```

这时可能显示找不到 Android SDK 的路径，需要设置 `ANDROID_HOME` 环境变量，具体设置方法可以询问 AI。

正确配置了环境变量后，再次运行 `flutter doctor`，会显示需要同意许可协议，运行下面指令：

```powershell
flutter doctor --android-licenses
```

按照提示同意许可协议即可。

完成以上步骤后，Flutter 的 Android 开发环境就配置完成了。可以使用 `flutter create` 创建一个新的 Flutter 项目，然后运行 `flutter build apk`，看一看是否能正常生成 apk 文件。

比较一下flutter、react native、vue+electron三种方案来开发音乐播放器

接下来的回答要有两个部分。第一个部分是从学习成本、将来转型到其他方向的容易程度、技术的通用性等这些方面来比较三者；第二个部分是给出三种方案的starter