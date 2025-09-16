document.addEventListener('DOMContentLoaded', function() {
    // 获取背景图元素
    const bgElement = document.querySelector('#page-header');
    
    if (!bgElement) return;
    
    // 添加移动背景类
    bgElement.classList.add('moving-bg');
    
    // 创建效果层
    const effectLayer = document.createElement('div');
    effectLayer.classList.add('moving-bg-effect');
    
    // 获取原始背景图
    const originalBg = window.getComputedStyle(bgElement).backgroundImage;
    effectLayer.style.backgroundImage = originalBg;
    
    // 添加到背景元素中
    bgElement.appendChild(effectLayer);
    
    // 监听鼠标移动
    bgElement.addEventListener('mousemove', function(e) {
        // 计算鼠标在元素中的相对位置 (0到1的范围)
        const rect = this.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        // 计算移动偏移量 (可根据需要调整乘数)
        const moveX = (x - 0.5) * 20; // 最大偏移10px
        const moveY = (y - 0.5) * 20;
        
        // 应用移动效果
        effectLayer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // 鼠标离开时复位
    bgElement.addEventListener('mouseleave', function() {
        effectLayer.style.transform = 'translate(0, 0)';
    });
});