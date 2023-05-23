
const down = document.querySelectorAll(".bx-chevrons-down");

down.forEach(down => {
    down.addEventListener("click", (e)=>{
        
        let downParent = e.target.parentElement.parentElement;
        
        downParent.classList.toggle("showMenu")
    })
});

const sideBar = document.querySelector(".sidebar")
const sideBarBTN = document.querySelector(".bx-menu")
console.log(sideBarBTN);

sideBarBTN.addEventListener("click", ()=>{
    sideBar.classList.toggle("close")
})