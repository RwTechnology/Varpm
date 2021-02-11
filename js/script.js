const closeOpen = document.getElementById('close-open');
const menuList = document.getElementById('menu-list');

let menuIsOpen = false;

closeOpen.addEventListener('click', ()=>{
    if(menuIsOpen){
        menuIsOpen = false;
        closeOpen.textContent = "Open";
        menuList.style.display = "none";
    }else{
        menuIsOpen = true;
        closeOpen.textContent = "Close";
        menuList.style.display = "flex";
    }
});