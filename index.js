function toogle(parameter) {
    let ret;
    if(parameter){
        ret = false;
    }
    else{
        ret = true;
    }
    return ret;
}

var dropdownToogle = false;
const menu = document.getElementById("menu");

menu.addEventListener('click', function() {
    let dropdown = document.getElementById("dropdown-items");
    dropdownToogle = toogle(dropdownToogle);
    if(dropdownToogle) {
        dropdown.style.display = "block";
    }
    else{
        dropdown.style.display = "none";
    }
})

let scrollElements = document.querySelectorAll(".on-scroll");

function intoView(element){
    let fromTop = element.getBoundingClientRect().top;
    return (
        (fromTop <= window.innerHeight)
    )
}
function outOfView(element){
    let fromTop = element.getBoundingClientRect().top;
    return (
        (fromTop > window.innerHeight)
    )
}

function detectElement(){
    scrollElements.forEach(scrollElement => {
        if (intoView(scrollElement)){
            scrollElement.classList.remove("hide-element");
            scrollElement.classList.add("show-element");
        }
        else if (outOfView(scrollElement)){
            scrollElement.classList.remove("show-element");
            scrollElement.classList.add("hide-element");
        }
    })
}

window.addEventListener("scroll", function(){
    detectElement();
})