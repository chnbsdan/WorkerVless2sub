// ... 前面的代码保持不变 ...

let 网络备案 = `<a href='https://t.me/CMLiussss' style="background: linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000); background-size: 400% 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientMove 5s infinite linear; text-decoration: none; font-weight: bold;">萌ICP备-20240707号</a>`;//写你自己的维护者广告

// ... 中间的代码保持不变 ...

async function subHtml(request) {
	const url = new URL(request.url);
	const HTML = `
			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>${FileName}</title>
				${网站图标}
				<style>
					/* 添加炫彩动画效果 */
					@keyframes gradientMove {
						0% { background-position: 0 0; }
						100% { background-position: 100% 0; }
					}
					
					@keyframes glow {
						0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff; }
						50% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ffff, 0 0 40px #00ffff; }
						100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff; }
					}
					
					.gradient-text {
						background: linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
						background-size: 400% 100%;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						animation: gradientMove 5s infinite linear;
						font-weight: bold;
					}
					
					.glow-text {
						animation: glow 2s infinite;
						color: #ffffff;
						font-weight: bold;
					}

					/* 原有的样式保持不变 */
					:root {
						--primary-color: #4361ee;
						--hover-color: #3b4fd3;
						--bg-color: #f5f6fa;
						--card-bg: #ffffff;
					}
					
					* {
						box-sizing: border-box;
						margin: 0;
						padding: 0;
					}
					
					body {
						${网站背景}
						background-size: cover;
						background-position: center;
						background-attachment: fixed;
						background-color: var(--bg-color);
						font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
						line-height: 1.6;
						color: #333;
						min-height: 100vh;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					
					.container {
						position: relative;
						/* 使用rgba设置半透明背景 */
						background: rgba(255, 255, 255, 0.7);
						/* 添加磨砂玻璃效果 */
						backdrop-filter: blur(10px);
						-webkit-backdrop-filter: blur(10px); /* Safari兼容 */
						max-width: 600px;
						width: 90%;
						padding: 2rem;
						border-radius: 20px;
						/* 调整阴影效果增加通透感 */
						box-shadow: 0 10px 20px rgba(0,0,0,0.05),
									inset 0 0 0 1px rgba(255, 255, 255, 0.1);
						transition: transform 0.3s ease;
					}

					/* 调整hover效果 */
					.container:hover {
						transform: translateY(-5px);
						box-shadow: 0 15px 30px rgba(0,0,0,0.1),
									inset 0 0 0 1px rgba(255, 255, 255, 0.2);
					}
					
					h1 {
						text-align: center;
						color: var(--primary-color);
						margin-bottom: 2rem;
						font-size: 1.8rem;
					}
					
					.input-group {
						margin-bottom: 1.5rem;
					}
					
					label {
						display: block;
						margin-bottom: 0.5rem;
						color: #555;
						font-weight: 500;
					}
					
					input {
						width: 100%;
						padding: 12px;
						/* 修改边框颜色从 #eee 到更深的颜色 */
						border: 2px solid rgba(0, 0, 0, 0.15);  /* 使用rgba实现更自然的深度 */
						border-radius: 10px;
						font-size: 1rem;
						transition: all 0.3s ease;
						/* 添加轻微的内阴影增强边框效果 */
						box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.03);
					}

					input:focus {
						outline: none;
						border-color: var(--primary-color);
						/* 增强focus状态下的阴影效果 */
						box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.15),
									inset 0 2px 4px rgba(0, 0, 0, 0.03);
					}
					
					button {
						width: 100%;
						padding: 12px;
						background-color: var(--primary-color);
						color: white;
						border: none;
						border-radius: 10px;
						font-size: 1rem;
						font-weight: 600;
						cursor: pointer;
						transition: all 0.3s ease;
						margin-bottom: 1.5rem;
					}
					
					button:hover {
						background-color: var(--hover-color);
						transform: translateY(-2px);
					}
					
					button:active {
						transform: translateY(0);
					}
					
					#result {
						background-color: #f8f9fa;
						font-family: monospace;
						word-break: break-all;
					}

					.github-corner svg {
						fill: var(--primary-color);
						color: var(--card-bg);
						position: absolute;
						top: 0;
						right: 0;
						border: 0;
						width: 80px;
						height: 80px;
					}

					.github-corner:hover .octo-arm {
						animation: octocat-wave 560ms ease-in-out;
					}

					@keyframes octocat-wave {
						0%, 100% { transform: rotate(0) }
						20%, 60% { transform: rotate(-25deg) }
						40%, 80% { transform: rotate(10deg) }
					}

					@keyframes rotate {
						from { transform: rotate(0deg); }
						to { transform: rotate(360deg); }
					}

					.logo-title {
						position: relative;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-bottom: 2rem;
					}

					.logo-wrapper {
						position: absolute;
						left: 0;
						width: 50px;
						height: 50px;
					}

					.logo-title img {
						width: 100%;
						height: 100%;
						border-radius: 50%;
						position: relative;
						z-index: 1;
						background: var(--card-bg);
						box-shadow: 0 0 15px rgba(67, 97, 238, 0.1);
					}

					.logo-border {
						position: absolute;
						/* 扩大边框范围以确保完全覆盖 */
						top: -3px;
						left: -3px;
						right: -3px;
						bottom: -3px;
						border-radius: 50%;
						animation: rotate 3s linear infinite;
						background: conic-gradient(
							from 0deg,
							transparent 0%,
							var(--primary-color) 20%,
							rgba(67, 97, 238, 0.8) 40%,
							transparent 60%,
							transparent 100%
						);
						box-shadow: 0 0 10px rgba(67, 97, 238, 0.3);
						filter: blur(0.5px);
					}

					.logo-border::after {
						content: '';
						position: absolute;
						/* 调整内圆遮罩的大小 */
						inset: 3px;
						border-radius: 50%;
						background: var(--card-bg);
					}

					@keyframes rotate {
						from { transform: rotate(0deg); }
						to { transform: rotate(360deg); }
					}

					.logo-title h1 {
						margin-bottom: 0;
						text-align: center;
					}

					@media (max-width: 480px) {
						.container {
							padding: 1.5rem;
						}
						
						h1 {
							font-size: 1.5rem;
						}

						.github-corner:hover .octo-arm {
							animation: none;
						}
						.github-corner .octo-arm {
							animation: octocat-wave 560ms ease-in-out;
						}

						.logo-wrapper {
							width: 40px;
							height: 40px;
						}
					}

					.beian-info {
						text-align: center;
						font-size: 13px;
					}

					.beian-info a {
						color: var(--primary-color);
						text-decoration: none;
						border-bottom: 1px dashed var(--primary-color);
						padding-bottom: 2px;
					}

					.beian-info a:hover {
						border-bottom-style: solid;
					}

					#qrcode {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 20px;
					}

					.info-icon {
						display: inline-flex;
						align-items: center;
						justify-content: center;
						width: 18px;
						height: 18px;
						border-radius: 50%;
						background-color: var(--primary-color);
						color: white;
						font-size: 12px;
						margin-left: 8px;
						cursor: pointer;
						font-weight: bold;
						position: relative;   /* 添加相对定位 */
						top: -3px;            /* 微调垂直位置 */
					}

					.info-tooltip {
						display: none;
						position: fixed; /* 改为固定定位 */
						background: white;
						border: 1px solid var(--primary-color);
						border-radius: 8px;
						padding: 15px;
						z-index: 1000;
						box-shadow: 0 2px 10px rgba(0,0,0,0.1);
						min-width: 200px;
						max-width: 90vw;  /* 视窗宽度的90% */
						width: max-content;  /* 根据内容自适应宽度 */
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%); /* 居中定位 */
						margin: 0;
						line-height: 1.6;
						font-size: 13px;
						white-space: normal;
						word-wrap: break-word;
						overflow-wrap: break-word;
					}

					/* 移除原来的箭头 */
					.info-tooltip::before {
						display: none;
					}
				</style>
				<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
			</head>
			<body>
				<a href="https://github.com/chnbsdan/WorkerVless2sub" target="_blank" class="github-corner" aria-label="View source on Github">
					<svg viewBox="0 0 250 250" aria-hidden="true">
						<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
						<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
						<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
					</svg>
				</a>
				<div class="container">
						<div class="logo-title">
							${网站头像}
							<h1 class="gradient-text">${FileName}</h1>
						</div>
					<div class="input-group">
						<label for="link">节点链接</label>
						<input type="text" id="link" placeholder="${decodeURIComponent(atob('JUU4JUFGJUI3JUU4JUJFJTkzJUU1JTg1JUE1JTIwVk1lc3MlMjAlMkYlMjBWTEVTUyUyMCUyRiUyMFRyb2phbiUyMCVFOSU5MyVCRSVFNiU4RSVBNQ=='))}">
					</div>
					
					<button onclick="generateLink()">生成优选订阅</button>
					
					<div class="input-group">
						<div style="display: flex; align-items: center;">
							<label for="result">优选订阅</label>
							<div style="position: relative;">
								<span class="info-icon" onclick="toggleTooltip(event)">!</span>
								<div class="info-tooltip" id="infoTooltip">
									<strong>安全提示</strong>：使用优选订阅生成器时，需要您提交 <strong>节点配置信息</strong> 用于生成优选订阅链接。这意味着订阅器的维护者可能会获取到该节点信息。<strong>请自行斟酌使用风险。</strong><br>
									<br>
									订阅转换后端：<strong><a href='${subProtocol}://${subConverter}/version' target="_blank" rel="noopener noreferrer">${subProtocol}://${subConverter}</a></strong><br>
									订阅转换配置文件：<strong><a href='${subConfig}' target="_blank" rel="noopener noreferrer">${subConfig}</a></strong>
								</div>
							</div>
						</div>
						<input type="text" id="result" readonly onclick="copyToClipboard()">
						<label id="qrcode" style="margin: 15px 10px -15px 10px;"></label>
					</div>
					<div class="beian-info" style="text-align: center; font-size: 13px;">${网络备案}</div>
				</div>
	
				<script>
					function toggleTooltip(event) {
						event.stopPropagation(); // 阻止事件冒泡
						const tooltip = document.getElementById('infoTooltip');
						tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
					}
					
					// 点击页面其他区域关闭提示框
					document.addEventListener('click', function(event) {
						const tooltip = document.getElementById('infoTooltip');
						const infoIcon = document.querySelector('.info-icon');
						
						if (!tooltip.contains(event.target) && !infoIcon.contains(event.target)) {
							tooltip.style.display = 'none';
						}
					});

					function copyToClipboard() {
						const resultInput = document.getElementById('result');
						if (!resultInput.value) {
							return;
						}
						
						resultInput.select();
						navigator.clipboard.writeText(resultInput.value).then(() => {
							const tooltip = document.createElement('div');
							tooltip.style.position = 'fixed';
							tooltip.style.left: '50%';
							tooltip.style.top: '20px';
							tooltip.style.transform: 'translateX(-50%)';
							tooltip.style.padding: '8px 16px';
							tooltip.style.background: '#4361ee';
							tooltip.style.color: 'white';
							tooltip.style.borderRadius: '4px';
							tooltip.style.zIndex: '1000';
							tooltip.textContent = '已复制到剪贴板';
							
							document.body.appendChild(tooltip);
							
							setTimeout(() => {
								document.body.removeChild(tooltip);
							}, 2000);
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
						const isTrojan = link.startsWith(\`\${atob('dHJvamFuOi8v')}\`);
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
								
								subLink = \`https://\${domain}/sub?host=\${host}&uuid=\${uuid}&path=\${encodeURIComponent(path)}&sni=\${sni}&type=\${type}&alpn=\${encodeURIComponent(alpn)}&alterid=\${alterId}&security=\${security}\`;
							} else {
								const uuid = link.split("//")[1].split("@")[0];
								const search = link.split("?")[1].split("#")[0];
								const domain = window.location.hostname;
								
								subLink = \`https://\${domain}/sub?\${uuidType}=\${uuid}&\${search}\`;
							}
							document.getElementById('result').value = subLink;
	
							// 更新二维码
							const qrcodeDiv = document.getElementById('qrcode');
							qrcodeDiv.innerHTML = '';
							new QRCode(qrcodeDiv, {
								text: subLink,
								width: 220, // 调整宽度
								height: 220, // 调整高度
								colorDark: "#4a60ea", // 二维码颜色
								colorLight: "#ffffff", // 背景颜色
								correctLevel: QRCode.CorrectLevel.L, // 设置纠错级别
								scale: 1 // 调整像素颗粒度
							});
						} catch (error) {
							alert('链接格式错误，请检查输入');
						}
					}
				</script>
			</body>
			</html>
			`;

	return new Response(HTML, {
		headers: {
			"content-type": "text/html;charset=UTF-8",
		},
	});
}
