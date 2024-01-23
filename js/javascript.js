//recuperation des element html
let menuheader = document.getElementById('menuheader');
let menuderoulant = document.getElementById("menuderoulant");


menuheader.onclick = () => { //sur le click sur le logo menu
    menuderoulant.classList.toggle('open'); //appliquer ou retirer la class open
    menuheader.classList.toggle('burger_open'); //appliquer ou retirer la class burgeropen

}

