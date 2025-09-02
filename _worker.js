<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>优选订阅生成器</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #4361ee;
            --hover-color: #3b4fd3;
            --card-bg: rgba(255, 255, 255, 0.15);
            --text-color: #fff;
            --input-bg: rgba(255, 255, 255, 0.12);
            --border-color: rgba(255, 255, 255, 0.2);
            --shadow-color: rgba(0, 0, 0, 0.2);
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            padding: 20px;
            position: relative;
            overflow-x: hidden;
        }
        
        /* 动态背景元素 */
        .bg-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.5;
        }
        
        .bg-animation span {
            position: absolute;
            width: 20px;
            height: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.2),
                        0 0 20px rgba(0, 255, 255, 0.2),
                        0 0 30px rgba(0, 255, 255, 0.2);
            animation: animate 5s linear infinite;
        }
        
        @keyframes animate {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-2000%) rotate(720deg);
                opacity: 0;
            }
        }
        
        .container {
            background: var(--card-bg);
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            max-width: 600px;
            width: 100%;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 15px 35px var(--shadow-color);
            border: 1px solid var(--border-color);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            z-index: 1;
        }

        .container:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px var(--shadow-color);
        }
        
        .logo-title {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 2.5rem;
        }
        
        .logo-wrapper {
            position: absolute;
            left: 0;
            width: 60px;
            height: 60px;
        }
        
        .logo-title img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: relative;
            z-index: 1;
            box-shadow: 0 0 20px rgba(67, 97, 238, 0.3);
        }
        
        .logo-border {
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border-radius: 50%;
            animation: rotate 3s linear infinite;
            background: conic-gradient(
                from 0deg,
                #ff0000, #ff9900, #ffff00, #00ff00, 
                #00ffff, #0000ff, #9900ff, #ff00ff, #ff0000
            );
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
            filter: blur(1px);
        }
        
        .logo-border::after {
            content: '';
            position: absolute;
            inset: 5px;
            border-radius: 50%;
            background: var(--card-bg);
        }
        
        .logo-title h1 {
            text-align: center;
            font-size: 2.2rem;
            margin-bottom: 0;
            background: linear-gradient(90deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #9900ff, #ff00ff);
            background-size: 400% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient-text 8s linear infinite;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            font-weight: 700;
            letter-spacing: 1px;
        }
        
        @keyframes gradient-text {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 400% 50%;
            }
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .input-group {
            margin-bottom: 1.8rem;
        }
        
        label {
            display: block;
            margin-bottom: 0.8rem;
            color: var(--text-color);
            font-weight: 500;
            font-size: 1.1rem;
        }
        
        input {
            width: 100%;
            padding: 14px 16px;
            background: var(--input-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            font-size: 1rem;
            transition: all 0.3s ease;
            color: var(--text-color);
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        input::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.3),
                        inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        button {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, var(--primary-color), var(--hover-color));
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 1.8rem;
            box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
        }
        
        button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(67, 97, 238, 0.4);
        }
        
        button:active {
            transform: translateY(0);
        }
        
        #result {
            background: var(--input-bg);
            font-family: monospace;
            word-break: break-all;
            cursor: pointer;
            border: 1px solid var(--border-color);
            min-height: 50px;
            display: flex;
            align-items: center;
            padding: 14px 16px;
            border-radius: 12px;
            position: relative;
        }
        
        #result:after {
            content: '点击复制';
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.6);
            background: rgba(0, 0, 0, 0.2);
            padding: 3px 8px;
            border-radius: 4px;
            pointer-events: none;
        }
        
        .github-corner {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
        }
        
        .github-corner svg {
            fill: var(--primary-color);
            color: rgba(255, 255, 255, 0.9);
            width: 80px;
            height: 80px;
        }
        
        .beian-info {
            text-align: center;
            font-size: 0.95rem;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--border-color);
        }
        
        .beian-info a {
            background: linear-gradient(90deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #9900ff, #ff00ff);
            background-size: 400% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient-text 8s linear infinite;
            text-decoration: none;
            font-weight: bold;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
            font-size: 1.1rem;
        }
        
        .beian-info a:hover {
            text-decoration: underline;
        }
        
        #qrcode {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 25px 0 15px;
        }
        
        #qrcode canvas {
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--border-color);
            background: white;
            padding: 10px;
        }
        
        .info-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            font-size: 12px;
            margin-left: 10px;
            cursor: pointer;
            font-weight: bold;
        }
        
        .info-tooltip {
            display: none;
            position: fixed;
            background: rgba(30, 30, 40, 0.95);
            border: 1px solid var(--primary-color);
            border-radius: 12px;
            padding: 20px;
            z-index: 1000;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            max-width: 400px;
            width: 90%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            line-height: 1.6;
            font-size: 14px;
            backdrop-filter: blur(10px);
        }
        
        .info-tooltip strong {
            color: var(--primary-color);
        }
        
        .info-tooltip a {
            color: #00ffff;
            text-decoration: none;
        }
        
        .info-tooltip a:hover {
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 2rem 1.5rem;
            }
            
            .logo-title h1 {
                font-size: 1.8rem;
            }
            
            .logo-wrapper {
                width: 50px;
                height: 50px;
            }
            
            input, button {
                padding: 12px 14px;
            }
        }
        
        @media (max-width: 480px) {
            .container {
                padding: 1.8rem 1.2rem;
            }
            
            .logo-title h1 {
                font-size: 1.6rem;
            }
            
            .logo-wrapper {
                position: relative;
                margin: 0 auto 15px;
                left: auto;
            }
            
            .logo-title {
                flex-direction: column;
            }
            
            .github-corner svg {
                width: 60px;
                height: 60px;
            }
            
            .beian-info a {
                font-size: 1rem;
            }
        }
        
        .toast {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(30, 30, 40, 0.9);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s;
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
        }
        
        .toast.show {
            opacity: 1;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
</head>
<body>
    <!-- 动态背景 -->
    <div class="bg-animation" id="bg-animation"></div>
    
    <!-- 修改GitHub链接为指定URL -->
    <a href="https://github.com/chnbsdan/WorkerVless2sub" target="_blank" class="github-corner" aria-label="View source on Github">
        <svg viewBox="0 0 250 250" aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
            <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
        </svg>
    </a>
    
    <div class="container">
        <div class="logo-title">
            <!-- 保留原LOGO -->
            <div class="logo-wrapper">
                <div class="logo-border"></div>
                <img src="https://tc.1356666.xyz/file/1755410653958_hangdn.png" alt="Logo">
            </div>
            <h1>优选订阅生成器</h1>
        </div>
        
        <div class="input-group">
            <label for="link">节点链接</label>
            <input type="text" id="link" placeholder="请输入 VMess / VLESS / Trojan 链接">
        </div>
        
        <button onclick="generateLink()">
            <i class="fas fa-bolt"></i> 生成优选订阅
        </button>
        
        <div class="input-group">
            <div style="display: flex; align-items: center;">
                <label for="result">优选订阅链接</label>
                <div style="position: relative;">
                    <span class="info-icon" onclick="toggleTooltip(event)">!</span>
                </div>
            </div>
            <input type="text" id="result" readonly>
            <div id="qrcode"></div>
        </div>
        
        <div class="beian-info">
            <a href='https://hangdn.com' target="_blank">BSDAN 智能家居制造商</a>
        </div>
    </div>
    
    <div class="info-tooltip" id="infoTooltip">
        <strong>安全提示</strong>：使用优选订阅生成器时，需要您提交 <strong>节点配置信息</strong> 用于生成优选订阅链接。这意味着订阅器的维护者可能会获取到该节点信息。<strong>请自行斟酌使用风险。</strong><br>
        <br>
        订阅转换后端：<strong><a href='https://sub.cmliussss.net/version' target="_blank" rel="noopener noreferrer">https://sub.cmliussss.net</a></strong><br>
        订阅转换配置文件：<strong><a href='https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full_MultiMode.ini' target="_blank" rel="noopener noreferrer">ACL4SSR_Online_Full_MultiMode.ini</a></strong>
    </div>
    
    <div class="toast" id="toast">已复制到剪贴板</div>

    <script>
        // 创建动态背景元素
        function createBackground() {
            const bgAnimation = document.getElementById('bg-animation');
            const elements = 25;
            
            for (let i = 0; i < elements; i++) {
                const span = document.createElement('span');
                bgAnimation.appendChild(span);
                
                // 随机位置和大小
                const size = Math.random() * 30 + 10;
                span.style.width = size + 'px';
                span.style.height = size + 'px';
                span.style.left = Math.random() * 100 + 'vw';
                span.style.top = Math.random() * 100 + 'vh';
                
                // 随机动画延迟和持续时间
                span.style.animationDelay = Math.random() * 5 + 's';
                span.style.animationDuration = Math.random() * 10 + 10 + 's';
            }
        }
        
        function toggleTooltip(event) {
            event.stopPropagation();
            const tooltip = document.getElementById('infoTooltip');
            tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
        }
        
        // 点击页面其他区域关闭提示框
        document.addEventListener('click', function(event) {
            const tooltip = document.getElementById('infoTooltip');
            const infoIcon = document.querySelector('.info-icon');
            
            if (tooltip && !tooltip.contains(event.target) && !infoIcon.contains(event.target)) {
                tooltip.style.display = 'none';
            }
        });
        
        function showToast() {
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        }
        
        function copyToClipboard() {
            const resultInput = document.getElementById('result');
            if (!resultInput.value) {
                return;
            }
            
            resultInput.select();
            navigator.clipboard.writeText(resultInput.value).then(() => {
                showToast();
            }).catch(err => {
                alert('复制失败，请手动复制');
            });
        }
        
        function generateLink() {
            const link = document.getElementById('link').value;
            if (!link) {
                alert('请输入节点链接');
                return;
            }
            
            let uuidType = 'uuid';
            const isTrojan = link.startsWith(`trojan://`);
            if (isTrojan) uuidType = 'password';
            
            let subLink = '';
            try {
                const isVMess = link.startsWith('vmess://');
                if (isVMess){
                    const vmessLink = link.split('vmess://')[1];
                    const vmessJson = JSON.parse(atob(vmessLink));
                    
                    const host = vmessJson.host;
                    const uuid = vmessJson.id;
                    const path = vmessJson.path || '/';
                    const sni = vmessJson.sni || host;
                    const type = vmessJson.type || 'none';
                    const alpn = vmessJson.alpn || '';
                    const alterId = vmessJson.aid || 0;
                    const security = vmessJson.scy || 'auto';
                    const domain = window.location.hostname;
                    
                    subLink = `https://${domain}/sub?host=${host}&uuid=${uuid}&path=${encodeURIComponent(path)}&sni=${sni}&type=${type}&alpn=${encodeURIComponent(alpn)}&alterid=${alterId}&security=${security}`;
                } else {
                    const uuid = link.split("//")[1].split("@")[0];
                    const search = link.split("?")[1].split("#")[0];
                    const domain = window.location.hostname;
                    
                    subLink = `https://${domain}/sub?${uuidType}=${uuid}&${search}`;
                }
                document.getElementById('result').value = subLink;

                // 更新二维码
                const qrcodeDiv = document.getElementById('qrcode');
                qrcodeDiv.innerHTML = '';
                new QRCode(qrcodeDiv, {
                    text: subLink,
                    width: 220,
                    height: 220,
                    colorDark: "#4a60ea",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.L
                });
                
                // 为结果区域添加点击事件
                document.getElementById('result').onclick = copyToClipboard;
            } catch (error) {
                alert('链接格式错误，请检查输入');
                console.error(error);
            }
        }
        
        // 初始化页面
        document.addEventListener('DOMContentLoaded', function() {
            createBackground();
            
            // 为结果区域添加点击事件
            document.getElementById('result').onclick = copyToClipboard;
            
            // 示例链接（仅用于演示）
            document.getElementById('link').value = "vmess://eyJ2IjoiMiIsInBzIjoiMTEtMTIwMjDliqDovb3nmoTlpLTlg48iLCJhZGQiOiIxMjAuMjM5LjE1OC4xMjMiLCJwb3J0IjoiODAiLCJpZCI6ImE1YTE3YmY0LTk0YjMtNDRkZC1hODAwLTc4NDk3N2Y0ZGY0YyIsImFpZCI6IjAiLCJuZXQiOiJ3cyIsInR5cGUiOiJub25lIiwiaG9zdCI6ImRkLmNmZC9kc2QvZHMvZCIsInBhdGgiOiIvIiwidGxzIjoiIn0=";
        });
    </script>
</body>
</html>
