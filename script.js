const menuItems = document.querySelectorAll(".top-div-main-menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // 1. Remove the active state of any active menu items
    removeAllMenuItemsState();
    //2. Toggle active to the clicked class
    item.classList.toggle("active");
    //3. Open the submenu
    const subMenu = item.querySelector(".sub-menu-container");

    subMenu && subMenu.classList.toggle("active");

    // 4. Get the close button of the sub menu item and attach a event listener
    console.log(subMenu);
    // const closeSubmenu = document.querySelector(".midDiv-close-button");
    // closeSubmenu.addEventListener("click", function () {
    //   const subMenu = item.querySelector(".sub-menu-container");
    //   console.log(subMenu);
    //   subMenu.remove("active");
    //   console.log("clicked close button");
    // }
    // );
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
    console.log(subMenu);
    subMenu && subMenu.remove("active");
    //   console.log("clicked close button");
  });
}
