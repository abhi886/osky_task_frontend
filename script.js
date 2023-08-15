const menuItems = document.querySelectorAll(".top-div-main-menu-item");
const midDiv = document.getElementById("midDiv");

var activeItem = "";

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Toggle only when the user click the same menu twice
    if (activeItem === item) {
      item.classList.toggle("active");
      const subMenu = item.querySelector(".sub-menu-container");
      subMenu && subMenu.classList.toggle("active");
      return;
    }
    // if the user clicks on a different menu item then close the previous
    // one and show the current one
    else if (activeItem != item) {
      removeAllMenuItemsState();
      item.classList.add("active");
      const subMenu = item.querySelector(".sub-menu-container");
      subMenu && subMenu.classList.add("active");
      activeItem = item;
      return;
    } else {
    }
    handleClose(item);
  });
});

function removeAllMenuItemsState() {
  menuItems.forEach((otherLink) => {
    otherLink.classList.remove("active");
    // close the sub menu
    const sub = otherLink.querySelector(".sub-menu-container");
    sub && sub.classList.remove("active");
  });
}

function handleClose(item) {
  const closeSubmenu = document.querySelector(".midDiv-close-button");
  closeSubmenu.addEventListener("click", function () {
    const subMenu = item.querySelector(".sub-menu-container");
    subMenu && subMenu.remove("active");
  });
}
// Close the menu when pressing on any part of the screen
window.addEventListener("click", function (event) {
  if (event.target === midDiv) {
    removeAllMenuItemsState();
  }
});
