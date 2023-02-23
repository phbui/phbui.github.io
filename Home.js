const buttons = document.querySelectorAll('.slider-btn');
const containers = document.querySelectorAll('.container');
const additionalContainers = document.querySelectorAll('.additional-container');

let activeMenu = null;
let activeAdditionalContainer = null;

buttons.forEach((button, index) => {
  const menuId = button.dataset.menu;
  const menu = document.getElementById(menuId);
  const additionalContainer = additionalContainers[index];

  let isMenuActive = false;

  button.addEventListener('click', () => {
    if (isMenuActive && menu.classList.contains('active')) {
      additionalContainer.classList.remove('show');
      activeAdditionalContainer = null;
      setTimeout(() => {
        menu.classList.remove('active');
        activeMenu = null;
        containers.forEach(container => {
          container.classList.remove('active');
        });
        isMenuActive = false;
      }, 500); 
    } else {
      if (activeMenu) {
        const currentAdditionalContainer = activeAdditionalContainer;
        currentAdditionalContainer.classList.remove('show');
        activeAdditionalContainer = null;
        setTimeout(() => {
          activeMenu.classList.remove('active');
          activeMenu = null;
          containers.forEach(container => {
            container.classList.remove('active');
          });
          toggleMenu();
        }, 400); 
      } else {
        toggleMenu();
      }
    }

    function toggleMenu() {
      document.querySelectorAll('.slider-menu.active:not(#' + menuId + ')').forEach(activeMenu => {
        activeMenu.classList.remove('active');
      });

      activeMenu = document.querySelector('.slider-menu.active:not(#' + menuId + ')');

      if (!activeMenu) {
        containers.forEach(container => {
          container.classList.remove('active');
        });

        if (additionalContainer.classList.contains('show')) {
          additionalContainer.classList.remove('show');
          activeAdditionalContainer = null;
        }
      }

      menu.classList.toggle('active');
      isMenuActive = true;
      activeMenu = menu;

      if (document.querySelector('.slider-menu.active')) {
        containers.forEach(container => {
          container.classList.add('active');
        });

        if (menu.classList.contains('active')) {
          setTimeout(() => {
            additionalContainer.classList.add('show');
            activeAdditionalContainer = additionalContainer;
          }, 300); 
        }

      } else {
        containers.forEach(container => {
          container.classList.remove('active');
        });
      }
    }
  });
});
