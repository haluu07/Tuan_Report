/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN
 * Component Loader: Bộ tải động các khối HTML Component
 * Cho phép lập trình viên phân tách trang web thành các file HTML con độc lập
 */

export async function loadComponents() {
  const elements = document.querySelectorAll('[data-component]');
  
  const tasks = Array.from(elements).map(async (placeholder) => {
    const compPath = placeholder.getAttribute('data-component');
    if (!compPath) return;

    try {
      const response = await fetch(compPath);
      if (!response.ok) {
        throw new Error(`Không tìm thấy file component: ${compPath} (HTTP ${response.status})`);
      }
      const htmlContent = await response.text();
      
      // Tạo container tạm thời để parse DOM
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;

      // Thay thế placeholder bằng nội dung component
      if (tempDiv.firstElementChild) {
        placeholder.replaceWith(...Array.from(tempDiv.children));
      }
    } catch (error) {
      console.error(`[ComponentLoader] Lỗi tải component ${compPath}:`, error);
    }
  });

  await Promise.all(tasks);
}
