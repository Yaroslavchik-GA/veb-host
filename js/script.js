let menu = document.querySelector(".menu-triger");
let close = document.querySelector(".menu-close");
let hMenu = document.querySelector(".header_menu");

menu.addEventListener('click', function(open){
    hMenu.classList.remove("disactive");
});

close.addEventListener('click', function(close){
    hMenu.classList.add("disactive");
})
