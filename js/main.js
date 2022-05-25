function updatemenu() {
    if (document.getElementsByClassName('responsive-menu')[0].checked == true) {
        document.getElementsByClassName('menu')[0].style.borderBottomRightRadius = '0';
        document.getElementsByClassName('menu')[0].style.borderBottomLeftRadius = '0';
    }else{
        document.getElementsByClassName('menu')[0].style.borderRadius = '0';
    }
}

function showDialogPasteleria() {
    document.querySelector('#dialogPasteleria').showModal();
}

function hideDialogPasteleria() {
    document.querySelector('#dialogPasteleria').close();
}

function showDialogVacunacion() {
    document.querySelector('#dialogVacunacion').showModal();
}

function hideDialogVacunacion() {
    document.querySelector('#dialogVacunacion').close();
}

function showDialogPokedex() {
    document.querySelector('#dialogPokedex').showModal();
}

function hideDialogPokedex() {
    document.querySelector('#dialogPokedex').close();
}
