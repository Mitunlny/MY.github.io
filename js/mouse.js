// 永久锁定指针样式
document.addEventListener('mousedown', () => {
    document.documentElement.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><circle cx=\'16\' cy=\'16\' r=\'14\' fill=\'%23000\' fill-opacity=\'0.3\'/><circle cx=\'16\' cy=\'16\' r=\'12\' fill=\'none\' stroke=\'%23ff2d55\' stroke-width=\'2\'/><circle cx=\'16\' cy=\'16\' r=\'9\' fill=\'%23ff2d55\' fill-opacity=\'0.8\'/></svg>") 16 16, auto';
  });
  
  document.addEventListener('mouseup', () => {
    document.documentElement.style.cursor = '';
  });
  
  // 右键菜单锁定
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    document.documentElement.classList.add('context-menu');
    setTimeout(() => {
      document.documentElement.classList.remove('context-menu');
    }, 100);
  });
  
  // 动态元素监视
  const observer = new MutationObserver(() => {
    document.querySelectorAll('a, button, [role=button], [onclick], [href]').forEach(el => {
      if (!el.style.cursor) {
        el.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'36\' height=\'36\' viewBox=\'0 0 36 36\'><circle cx=\'18\' cy=\'18\' r=\'15\' fill=\'%23000\' fill-opacity=\'0.1\'/><circle cx=\'18\' cy=\'18\' r=\'13\' fill=\'none\' stroke=\'%234082ff\' stroke-width=\'2\'/><path d=\'M18 12v12m6-6h-12\' stroke=\'%23fff\' stroke-width=\'2\' stroke-linecap=\'round\'/></svg>") 18 18, pointer';
      }
    });
  });
  
  observer.observe(document.body, {
    subtree: true,
    childList: true,
    attributes: true
  });