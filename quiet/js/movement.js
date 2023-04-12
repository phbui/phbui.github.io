function moveWithCursor(elements) {

    document.addEventListener('mousemove', function(event) {
      if(box.dataset.expanded === "false") {
        const x = event.clientX;
        const y = event.clientY;
        
        elements.forEach(function(element) {
          element.style.display = 'block';
          element.style.top = (y - element.offsetHeight / 2)+ 'px';
          element.style.left = (x - element.offsetWidth / 2) + 'px';
        });
      }
    });
}
  