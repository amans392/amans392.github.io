// grabs the header//
let headerMain = document.querySelector(".header-main")
//grabs the menu button
let headerMobileBtn = document.querySelector(".mobile-menu-btn")
//checks if the menu is open//
let isMenuOpen = false;
//event that when you click on the button
headerMobileBtn.onclick = function() {
    //check if menu is open
    //displays it if it's open
    if (!isMenuOpen) {
        headerMain.style.display = "flex";
        isMenuOpen = true;

    }
    //hides the menu if it's not open
    else if (isMenuOpen) {
        headerMain.style.display = "none";
        isMenuOpen = false;
    }
}
