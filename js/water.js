/*!
 * Hexo Background Ripples Effect
 * Adds interactive ripples effect to Hexo blogs
 * Place this script in your theme's source/js/ directory
 */

(function($) {
    // 配置对象
    const config = {
        // 波纹效果配置
        ripples: {
            resolution: 512,      // 波纹效果的分辨率
            dropRadius: 10,      // 滴落点的半径
            perturbance: 0.04,   // 波纹的强度
            interactive: true,   // 是否允许交互
            crossOrigin: ""      // 跨域设置
        }
    };

    // 初始化波纹效果
    function initRipples() {
        // 检查是否已经加载了ripples插件
        if (typeof $.fn.ripples !== 'function') {
            console.error('jQuery ripples plugin is not loaded.');
            return;
        }

        // 在body上添加波纹效果
        $('body').ripples(config.ripples);

        // 自动滴落效果（可选）
        setInterval(function() {
            const $el = $('body');
            const width = $el.width(); // 获取页面宽度
            const height = $el.height(); // 获取页面高度

            const x = Math.random() * width; // 随机x坐标
            const y = Math.random() * height; // 随机y坐标
            const dropRadius = 10 + Math.random() * 10; // 随机半径
            const strength = 0.04 + Math.random() * 0.04; // 随机强度

            $el.ripples('drop', x, y, dropRadius, strength);
        }, 1500);
    }

    // 当DOM加载完成后初始化
    $(document).ready(function() {
        // 确保jQuery已加载
        if (typeof jQuery === 'undefined') {
            console.error('jQuery is required for ripples effect');
            return;
        }

        // 检查是否加载了ripples插件，如果没有加载则提示错误
        if (typeof $.fn.ripples !== 'function') {
            console.error('jQuery ripples plugin is not loaded. Please ensure it is included before this script.');
            return;
        }

        // 初始化波纹效果
        initRipples();
    });

})(jQuery);