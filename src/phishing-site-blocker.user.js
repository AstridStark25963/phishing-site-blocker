// ==UserScript==
// @name                 Phishing Site Blocker
// @name:zh-CN           钓鱼网站屏蔽器
// @description          A simple script to block access to known phishing sites by displaying a warning page.
// @description:zh-CN    一个简单的脚本，通过显示警告页面来阻止访问已知的钓鱼网站。
// @namespace            https://github.com/AstridStark25963/phishing-site-blocker
// @version              1.0.0
// @author               AstridStark25963
// @license              MIT
// @icon                 data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNlZjQ0NDQiPjxwYXRoIGZpbGw9IiNlZjQ0NDQiIGQ9Ik0yMyAySDF2MTZoMTAuNTE4YTYuOTcgNi45NyAwIDAgMSAuOTItNC4wMDJIM3YtMTBoMTh2Ni45NjJjLjczNC4yOCAxLjQwOS42ODEgMiAxLjE3OHpNMyAyMGg4Ljk2Yy4yOC43MzQuNjgxIDEuNDA5IDEuMTc4IDJIM3oiLz48cGF0aCBmaWxsPSIjZWY0NDQ0IiBkPSJNMTguNSAxMmE1LjUgNS41IDAgMSAwIDAgMTFhNS41IDUuNSAwIDAgMCAwLTExTTE1IDE3LjVhMy41IDMuNSAwIDAgMSA1LjE2NS0zLjA4bC00Ljc0NCA0Ljc0NUEzLjUgMy41IDAgMCAxIDE1IDE3LjVtMS44MzUgMy4wOGw0Ljc0NC00Ljc0NWEzLjUgMy41IDAgMCAxLTQuNzQ1IDQuNzQ1Ii8+PC9zdmc+
// @match                *://*/*
// @run-at               document-start
// @grant                none
// @downloadURL          https://raw.githubusercontent.com/AstridStark25963/phishing-site-blocker/main/src/phishing-site-blocker.user.js
// @updateURL            https://raw.githubusercontent.com/AstridStark25963/phishing-site-blocker/main/src/phishing-site-blocker.user.js
// ==/UserScript==

(function() {
    'use strict';

    const BLOCKED_DOMAINS = [
        // Fake Z-Library Websites
        "z-lib.ai",
        "z-lib.cv",
        "z-lib.id",
    ];

    const currentHost = window.location.hostname;

    const isPhishing = BLOCKED_DOMAINS.some(domain => 
        currentHost === domain || currentHost.endsWith('.' + domain)
    );

    if (isPhishing) {
        window.stop();

        const warningPage = `
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <title>⚠️ SECURITY ALERT | 安全警告</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        width: 100vw;
                        background-color: #cc0000 !important;
                        color: #ffffff !important;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        font-family: 'Arial', 'Microsoft YaHei', sans-serif;
                        text-align: center;
                        overflow: hidden;
                        z-index: 2147483647;
                    }
                    .icon {
                        font-size: 8rem;
                        margin-bottom: 20px;
                    }
                    h1 {
                        font-size: 4rem;
                        margin: 0;
                        text-transform: uppercase;
                        font-weight: 900;
                        letter-spacing: 2px;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                    }
                    h2 {
                        font-size: 2.5rem;
                        margin-top: 20px;
                        font-weight: bold;
                        background-color: #000;
                        padding: 10px 30px;
                        border-radius: 10px;
                    }
                    .footer {
                        margin-top: 50px;
                        opacity: 0.7;
                        font-size: 1rem;
                    }
                </style>
            </head>
            <body>
                <div class="icon">☠️</div>
                <h1>WARNING!<br>THIS IS A PHISHING SITE!</h1>
                <h2>警告！这是一个钓鱼网站！</h2>
                <div class="footer">
                    已由您的 [钓鱼网站屏蔽器] 脚本拦截<br>
                    Blocked by UserScript "Phishing Site Blocker"
                </div>
            </body>
            </html>
        `;

        if (document.documentElement) {
            document.documentElement.innerHTML = warningPage;
        } else {
            document.write(warningPage);
        }

        console.warn(`🚫 Phishing site blocked: ${currentHost}`);
    }

})();
