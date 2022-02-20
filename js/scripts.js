function openClose(id) {
    let block = id;
    block.classList.toggle('open');
}

let burgerMenu = document.getElementById("menu");
let inputSearch = document.getElementById("inputSearch");
let shop = document.getElementById("shop");
let about = document.getElementById("about");
let more = document.getElementById("more");

function changeIcon(id) {
    let iconChange = id;
    iconChange.classList.toggle('close'); 
}

let burgerBtn = document.getElementById('burgerBtn');
let searchBtn = document.getElementById('searchBtn');

function changeColor(id) {
    let colorText = id;
    colorText.classList.toggle('changeColor'); 
}

let titleShop = document.getElementById('titleShop');
let titleAbout = document.getElementById('titleAbout');
let titleMore = document.getElementById('titleMore');
