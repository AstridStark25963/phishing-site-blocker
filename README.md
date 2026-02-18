# Phishing Site Blocker

一个轻量、高效的 UserScript，专为拦截恶意的假冒网站（钓鱼网站）设计。

它利用浏览器的 `document-start` 机制，在网页加载的第一毫秒进行**核弹级拦截**，强制停止恶意资源的加载，并显示醒目的全屏红色双语警告，保护你的浏览安全。

## ✨ 核心特性

* **⚡️ 极速拦截**: 脚本运行于 `document-start` 阶段，在恶意脚本、广告追踪器或挖矿代码运行前直接切断加载。
* **🛑 视觉阻断**: 使用高对比度的深红色全屏警告覆盖原网页，不仅阻止访问，还提供强烈的视觉警示。
* **🌐 双语警告**: 支持中文与英文双语提示，明确告知风险。
* **📝 极简配置**: 代码内建模块化的黑名单数组，无需复杂设置，一行代码即可添加新拦截目标。
* **🛡️ 防止误触**: 自动匹配域名及其子域名（例如屏蔽 `example.com` 会自动屏蔽 `www.example.com`）。

## 📸 效果演示

当尝试访问黑名单中的网站时，页面将展示为如下样式：

![效果展示]()

## 🛠️ 安装说明

### 前置要求
确保你的浏览器已安装以下任意一个用户脚本管理器：
- [Tampermonkey (推荐)](https://www.tampermonkey.net/)
- [Violentmonkey](https://violentmonkey.github.io/)

### 安装链接
点击下方链接进入 Greasy Fork 页面进行一键安装：
👉 **[安装 Gemini Chat Exporter](https://greasyfork.org/scripts/566616-phishing-site-blocker)**

## ⚙️ 配置指南

### 添加新的屏蔽网站

脚本的设计非常模块化。要添加新的“恶心”网站，只需编辑脚本代码顶部的 `BLOCKED_DOMAINS` 数组：

```javascript
const BLOCKED_DOMAINS = [
    "z-lib.ai",        // 假冒 Z-Library
    "z-lib.cv",
    "z-lib.id",
    "fake-login.com",  // <--- 在这里添加你想屏蔽的新域名，注意用引号和逗号
    "malware.net"      // 最后一行可以不加逗号
];

```

* **注意**: 不需要加 `http://` 或 `www`。只需填写主域名（如 `baidu.com`），脚本会自动处理所有子域名。

## 📋 默认拦截列表

当前版本默认针对以下已知的假冒/钓鱼站点进行拦截：

* `z-lib.ai` (Fake Z-Library scam site)
* `z-lib.cv`
* `z-lib.id`

*(该列表仅作为示例，请根据实际需求自行扩充)*

## ⚠️ 免责声明

* 本脚本仅作为辅助安全工具，无法保证拦截所有网络威胁。
* 脚本提供的黑名单列表由用户自行维护，作者不对因配置错误导致的网站无法访问或误拦截承担责任。
* 请勿将此脚本用于非法用途。

## 🔗 相关链接

- **GitHub 仓库**: [AstridStark25963/phishing-site-blocker](https://github.com/AstridStark25963/phishing-site-blocker)
- **问题反馈**: [Issues 页面](https://github.com/AstridStark25963/phishing-site-blocker/issues)
- **脚本发布页**: [Greasy Fork](https://greasyfork.org/scripts/566616-phishing-site-blocker)

## ⚖️ 许可证

本项目基于 **MIT License** 协议开源。
