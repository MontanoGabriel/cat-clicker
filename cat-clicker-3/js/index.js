let htmlstring= '';
let data = {
    catActive: 0,
    gatos: [
        { name: "Michifu", content: "lorem", image: "img/cat.jpg", nclicks: 0 },
        { name: "Minino", content: "lorem2", image: "img/cat2.jpg", nclicks: 0 },
        { name: "Garfield", content: "lorem", image: "img/cat3.jpg", nclicks: 0 },
        { name: "Garfield", content: "lorem", image: "img/cat4.jpg", nclicks: 0 }
    ]
};
//funcion que lee el json y crea una lista con los nombres del json
    function listagats(){
        
        for (let i = 0; i < data.gatos.length; i++) {
            htmlstring += `
            <ul>
                <li>
                    <p id="nomgat">${data.gatos[i].name}</p>
                </li>
            </ul>`;
    }
    //selecciona una id de content que esta en un div en el html y añade la lista
    document.getElementById('content').innerHTML = htmlstring;
    document.getElementById('nomgat').addEventListener('click', imagenes);
    }

function imagenes(){
    
for(let i =0 ; i < data.gatos.length; i++){
    htmlstring += `
    <ul>
        <li>
            <p>${data.gatos[i].image}</p>
        </li>
    </ul>`;
}
document.getElementById('content').innerHTML = htmlstring;
}
listagats();





// let cont1 = 0;
//     let elem1 = document.getElementById('gato1');
//     elem1.addEventListener('click', contador1);

// function contador1(){
//   cont1++;
//   document.getElementById('cont1').innerHTML = cont1;
  
// }


// let cont2 = 0;
//     let elem2 = document.getElementById('gato2');
//     elem2.addEventListener('click', contador2);

// function contador2(){
//   cont2++;
//   document.getElementById('cont2').innerHTML = cont2;
  
// }


