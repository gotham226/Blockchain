//declarations des variables
let tab = [];
let coll = document.getElementById("collectionNft");

//constantes
const NB_NFT = 13;

//fonction appelée au chargement de la page, appelant les deux fonctions existante
function commencement(){
    ajoutTab();
}

//ajoute une div contenant le NTF (code en HTML) selon le nombre de la constante NB_NFT 
function ajoutTab(){
    for (let i = 0; i < NB_NFT; i++) {
        tab.push("<li class='col-12 col-md-6 col-lg-3'> <div class='cnt-block equal-hight' style='height: 349px; border-radius: 10px; '> <figure><img src='img/nftImage.png' class='img-responsive'></figure><h3><a href=''>Nom Oeuvre</a></h3><p>Artiste</p></div></li>")
    }
    affichage();
}

//parcour le tableau et affiche son contenu dans l'HTML
function affichage(){
    tab.forEach(nft => {
        coll.innerHTML += nft;
    });
}