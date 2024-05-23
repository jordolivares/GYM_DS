document.addEventListener('DOMContentLoaded', function() { 
    // ACÁ YA ESTA LISTO EL DOM
    obtenerPlanes();

 });

async function obtenerPlanes(){
    const url = 'https://dwnuvpjkltqfzsdsfhcfz3hmkq0sxihp.lambda-url.us-east-1.on.aws/';
    try {
        const planes = await fetch(url); 
        const planesJson = await planes.json();
        console.log(planesJson);
        recorreEInsertaPlanes(planesJson.gym);
    } 
    catch (error) {
        crearPaginaDeErro();
    }
};


function recorreEInsertaPlanes(planes){
    const gimplan = document.getElementById('gimplan');
    planes.forEach(gym => {
        const card = crearTarjetaDinamica(gym);
        gimplan.appendChild(card);
    });

};


function crearTarjetaDinamica(gym) {

    const divCol = document.createElement('div');
    divCol.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'mb-3' , 'p-4');
    const divCard = document.createElement('div');
    divCard.classList.add('card', 'text-center');
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src', './img/F.png')
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.style.background = '#C21A01';
    cardBody.style.color = 'aliceblue';
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = gym.nombre;
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = gym.descripcion;
    const button = document.createElement('button');
    button.setAttribute('type', 'button')
    button.classList.add('btn',);
    button.textContent = 'Precio: $'+ gym.precio;
    button.setAttribute('data-bs-toggle','modal')
    button.setAttribute('data-bs-target','#ModalPlan')

    divCol.appendChild(divCard);
    divCard.appendChild(img);
    divCard.appendChild(cardBody);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(button);


    
    
    return divCol;

};



function crearPaginaDeErro() {
    const divError = document.createElement('div');
    const gimplan = document.getElementById('gimplan');
    divError.textContent = 'Error al cargar los cards';
    gimplan.appendChild(divError);
    
}

