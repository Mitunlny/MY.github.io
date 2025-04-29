document.addEventListener("mousemove", function(event) {
    const cursor = document.getElementById("cursor");
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
  });
  
  document.addEventListener("mouseover", function(event) {
    if (event.target.tagName === "A") { // 如果鼠标悬停在链接上
      document.getElementById("cursor").classList.add("hover");
    } else {
      document.getElementById("cursor").classList.remove("hover");
    }
  });
  
  document.addEventListener("click", function() {
    const cursor = document.getElementById("cursor");
    cursor.classList.add("active");
    setTimeout(() => {
      cursor.classList.remove("active");
    }, 200); // 200ms后移除active类
  });