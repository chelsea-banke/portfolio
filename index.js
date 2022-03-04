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