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
    dropdownToogle=toogle(dropdownToogle);
    if(dropdownToogle){
        document.getElementById("dropdown-items").style.display="block";
    }
    else{
        document.getElementById("dropdown-items").style.display="none";
    }
}
var dropdownToogle=false;