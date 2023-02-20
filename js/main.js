let zone1 = document.querySelector('#zone1');
let zone2 = document.querySelector('#zone2');

let elements = [
    {image:"./img/animal1.jpg", nom:"Animal1", categorie:"Animaux", prix:200},
    {image:"./img/animal2.jpg", nom:"Animal2", categorie:"Animaux", prix:200},
    {image:"./img/animal3.jpg", nom:"Animal3", categorie:"Animaux", prix:200},
    {image:"./img/animal4.jpg", nom:"Animal4", categorie:"Animaux", prix:200},
    {image:"./img/paysage1.jpg", nom:"Paysage1", categorie:"Paysages", prix:100},
    {image:"./img/paysage2.jpg", nom:"Paysage2", categorie:"Paysages", prix:100},
    {image:"./img/paysage3.jpg", nom:"Paysage3", categorie:"Paysages", prix:100},
    {image:"./img/paysage4.jpg", nom:"Paysage4", categorie:"Paysages", prix:100},
    {image:"./img/personne1.jpg", nom:"Personne1", categorie:"Personnes", prix:300},
    {image:"./img/personne2.jpg", nom:"Personne2", categorie:"Personnes", prix:300},
    {image:"./img/personne3.jpg", nom:"Personne3", categorie:"Personnes", prix:300},
    {image:"./img/personne4.jpg", nom:"Personne4", categorie:"Personnes", prix:300},
];

majInterface("");

function majInterface(typeDemande){
    zone2.innerHTML='';
    if(typeDemande=="") {
        var configElementsFiltres=elements;
    }else{
        var configElementsFiltres = elements.filter(function(configElement,i){
            console.log(configElement.categorie);
            console.log(typeDemande);
            return configElement.categorie==typeDemande;
        });
    }
    console.table(configElementsFiltres);



    configElementsFiltres.forEach(function(laconfig,i){
        Afficher(laconfig);
    });

}

function Afficher(element,i){

    let col = document.createElement('div');
    col.className="col";
    let vignette = document.createElement('figure');
    vignette.className='vignette';
    vignette.setAttribute('id',`v${i}`);
    let image = document.createElement('img');
    image.src = element.image;
    let titre = document.createElement('figcaption');
    titre.innerHTML = element.nom;
    vignette.onmouseover = function(e){
        vignette.style.boxShadow = '0px 0px 10px purple';
        vignette.style.transform = 'scale(1.1)';
    };
    vignette.onmouseleave = function(e){
        vignette.style.boxShadow = 'none';
        vignette.style.transform = 'scale(1)';
        affiche.classList.remove('affiche');
    };
    vignette.onclick = function(e){
        affiche.src = element.image;
        affiche.classList.add('affiche');
        nom.innerHTML = element.nom;
        categorie.innerHTML = element.categorie;
        prix.innerHTML = element.prix;
    }
    zone2.appendChild(col);
    col.appendChild(vignette);
    vignette.appendChild(image);
    vignette.appendChild(titre);
}
