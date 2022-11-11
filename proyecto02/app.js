const API_URL = "https://rickandmortyapi.com/api/character"

function get_characters(done) {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => done(data.results))
}

get_characters(done=>{
    done.forEach(personaje => {
        const card = document.createRange().createContextualFragment(/*html*/`
            <div class="col" id="${personaje.name}">
                <div class="card p-2"><img src="${personaje.image}" class="card-img-top w-100 d-block">
                    <div class="card-body">
                        <h4 class="card-title">${personaje.name}</h4>
                        <p class="card-text">${personaje.status}</p>
                        <button class="btn btn-primary" type="button" onclick="cerrar('${personaje.name}')">Cerrar</button>
                    </div>
                </div>
            </div>
        `)
        document.querySelector("#personajes").appendChild(card);
    });
})

function cerrar(name){
    document.getElementById(name).remove();
}