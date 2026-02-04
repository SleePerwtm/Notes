在终端中粘贴以下指令：

```powershell
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

然后重启资源管理器或电脑即可恢复 Win10 风格的右键菜单。

---

如果想要恢复 Win11 风格的右键菜单，可以在终端中粘贴以下指令：

```powershell
reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /va /f
```

同理，重启资源管理器或电脑后即可生效。