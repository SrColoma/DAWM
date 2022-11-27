
const API_URL = {
    "characters": "https://rickandmortyapi.com/api/character",
    "locations": "https://rickandmortyapi.com/api/location",
    "episodes": "https://rickandmortyapi.com/api/episode"
}

const per_por_episodio = document.getElementById('personajes_por_episodio');
const per_vivos = document.getElementById(`personajes_vivos`);

let per_por_ep_chart;
let per_vivos_chart;

let episodios = [];
let episodios_names = [];
let characters_by_episodios = [];

function get_json(api,done) {
    fetch(api)
    .then(response => response.json())
    .then(data => done(data.results))
}

function config_episodes(api) {
    get_json(api, (episodes)=>{
        let episodes_names = episodes.map(episode => episode.name);
        let characters_by_episode = episodes.map(episode => episode.characters.length);
        per_por_ep_chart = new Chart(per_por_episodio, {
            type: 'bar',
            data: {
                labels: episodes_names,
                datasets: [{
                    label: 'personajes por episodio',
                    data: characters_by_episode,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
                    
}
function config_per_vivos(api) {
    get_json(api, (characters)=>{
        let numero_personajes_vivos = characters.filter(character => character.status == "Alive").length;
        let numero_personajes_muertos = characters.filter(character => character.status == "Dead").length;
        let numero_personajes_desconocido = characters.filter(character => character.status == "unknown").length;

        per_vivos_chart = new Chart(per_vivos, {
            type: 'pie',
            data: {
                labels: ['Vivos', 'Muertos', 'Desconocido'],
                datasets: [{
                    label: 'personajes vivos y muertos',
                    data: [numero_personajes_vivos, numero_personajes_muertos,numero_personajes_desconocido],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
                    
}

function config_per_cards(api) {
    get_json(api, (characters)=>{
        characters.forEach(character => {
            const card = document.createRange().createContextualFragment(/*html*/`
                <div class="col carta" id="${character.name}">
                    <div class="card p-2"><img src="${character.image}" class="card-img-top w-100 d-block">
                        <div class="card-body">
                            <h4 class="card-title">${character.name}</h4>
                            <p class="card-text">${character.status}</p>
                            <button class="btn btn-primary" type="button" onclick="cerrar('${character.name}')">Cerrar</button>
                        </div>
                    </div>
                </div>
            `);
            document.querySelector("#personajes").appendChild(card);
        });
    });
}


function cerrar(name){
    document.getElementById(name).remove();
}



// function consulta_episodios(){
//     for (let i = 1; i < 4; i++) {
//         get_json(API_URL.episodes + "?page=" + i, (episodes)=>{
//             episodios = episodios.concat(episodes);
//         });
//     }

//     episodios_names = episodios.map(episodios => episodios.name);
//     characters_by_episodios = episodios.map(episodios => episodios.characters.length);
// }

// function config_chart(episodes_names, characters_by_episode){
//     per_por_ep_chart.destroy();
//     per_por_ep_chart = new Chart(per_por_episodio, {
//         type: 'bar',
//         data: {
//             labels: episodes_names,
//             datasets: [{
//                 label: 'personajes por episodio',
//                 data: characters_by_episode,
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }

// function set_numero(){
//     let numero = document.getElementById("text_episodes").value;
//     // config_chart(episodios_names.slice(0, numero), characters_by_episodios.slice(0, numero));
//     config_chart(episodios_names, characters_by_episodios);
    
// }


// consulta_episodios()
config_per_vivos(API_URL.characters);
config_episodes(API_URL.episodes);
config_per_cards(API_URL.characters);
        