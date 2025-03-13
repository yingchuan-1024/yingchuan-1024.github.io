document.addEventListener('DOMContentLoaded', () => {
    // 卡片动态倾斜参数配置
    const tiltConfig = {
      maxTilt: 15,    // 最大倾斜角度(度)
      perspective: 800, // 透视距离(px)
      scale: 1.03,     // 悬停时缩放比例
      transitionSpeed: '0.6s cubic-bezier(0.23, 1, 0.32, 1)'
    };
  
    // 为所有卡片绑定事件
    document.querySelectorAll('.recent-post-item').forEach(card => {
      let updateTimeout;
      
      // 动态更新变换样式
      const updateTransform = (x, y) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // 计算相对中心点的偏移比例 (-1到1)
        const tiltX = (x - rect.left - centerX) / centerX;
        const tiltY = (y - rect.top - centerY) / centerY;
        
        // 计算实际旋转角度
        const rotateY = tiltX * tiltConfig.maxTilt;
        const rotateX = tiltY * -tiltConfig.maxTilt;
  
        // 应用动态变换
        card.style.transform = `
          perspective(${tiltConfig.perspective}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale3d(${tiltConfig.scale}, ${tiltConfig.scale}, ${tiltConfig.scale})
        `;
      };
  
      // 鼠标移动事件处理
      const handleMove = (e) => {
        cancelAnimationFrame(updateTimeout);
        updateTimeout = requestAnimationFrame(() => {
          updateTransform(e.clientX, e.clientY);
        });
      };
  
      // 鼠标离开重置状态
      const handleLeave = () => {
        card.style.transform = `
          perspective(${tiltConfig.perspective}px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `;
      };
  
      // 事件监听
      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);
      
      // 移动端适配
      card.style.transition = `transform ${tiltConfig.transitionSpeed}`;
    });
  });