function toogle(parameter){
    let ret;
    if(parameter){
        ret=false;
    }
    else{
        ret=true;
    }
    return ret;
}
function dropdown(){ 
    const dropdown = document.getElementById("dropdown-items");
    dropdownToogle=toogle(dropdownToogle);
    if(dropdownToogle){
        dropdown.style.display="block";
    }
    else{
        dropdown.style.display="none";
    }
}
var dropdownToogle=false;