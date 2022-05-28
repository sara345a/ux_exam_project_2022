

function toggleHideBurgermenu() {
    var element = document.getElementById("mobile-navigation__collapsiple");
    element.classList.toggle("hide");

    var overlay = document.getElementById("body-overlay");
    overlay.classList.toggle("hide");

}

function toggleHideSearchModal() {
    var element = document.getElementById("mobile-navigation__search-modal");
    element.classList.toggle("hide");

    var overlay = document.getElementById("search-overlay");
    overlay.classList.toggle("hide");
}

function toggleHideMegaMenu() {
    var mega_menu = document.getElementById("desktop-navbar__mega-menu");
    mega_menu.classList.toggle("hide");

    var arrow = document.getElementById("mega-menu__icon-down");
    arrow.classList.toggle("transform");

}

function addRedColor() {
    var element = document.getElementById("like");
    element.classList.toggle("like");
}


function toggleDisplay() {
    var element = document.getElementById("footer-collapsiple__content");
    element.classList.toggle("display");
}

/**/
function toggleHideSearchModalDesktop() {
    var element = document.getElementById("desktop-navigation__search-modal");
    element.classList.toggle("hide");

    var overlay = document.getElementById("search-overlay");
    overlay.classList.toggle("hide");
}



function toggleAdvancedFilter() {
    var element = document.getElementById("advanced-filter__content");
    element.classList.toggle("hide");

    var overlay = document.getElementById("body-overlay");
    overlay.classList.toggle("hide");

}

function toggleAddToCollection() {
    var element = document.getElementById("single-recipe__plus-clicked");
    element.classList.toggle("hide");

    var overlay = document.getElementById("body-overlay");
    overlay.classList.toggle("hide");

}




