import { useEffect } from 'react';

export function useDraggableScroll(ref) {
  useEffect(() => {
    const ele = ref.current;
    if (!ele) return;

    let isDragging = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      // Only apply for main mouse button
      if (e.button !== 0) return;
      isDragging = true;
      startX = e.pageX - ele.offsetLeft;
      scrollLeft = ele.scrollLeft;
      ele.style.cursor = 'grabbing';
      ele.style.scrollSnapType = 'none';
      ele.style.scrollBehavior = 'auto'; // Disable smooth scroll while dragging
    };

    const onMouseLeave = () => {
      if (!isDragging) return;
      isDragging = false;
      ele.style.cursor = '';
      ele.style.scrollSnapType = '';
      ele.style.scrollBehavior = '';
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      ele.style.cursor = '';
      ele.style.scrollSnapType = '';
      ele.style.scrollBehavior = '';
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - ele.offsetLeft;
      const walk = (x - startX) * 1.5; // Scroll speed multiplier
      ele.scrollLeft = scrollLeft - walk;
    };

    ele.addEventListener('mousedown', onMouseDown);
    ele.addEventListener('mouseleave', onMouseLeave);
    ele.addEventListener('mouseup', onMouseUp);
    ele.addEventListener('mousemove', onMouseMove);

    return () => {
      ele.removeEventListener('mousedown', onMouseDown);
      ele.removeEventListener('mouseleave', onMouseLeave);
      ele.removeEventListener('mouseup', onMouseUp);
      ele.removeEventListener('mousemove', onMouseMove);
    };
  }, [ref]);
}
