import { API_RANDOM_USER_URL } from "./constants.js";

const newUserButton = document.getElementById("newUserButton");
const sectionContainer = document.querySelector(".container");

const containerDoUsuario = document.createElement("div");
containerDoUsuario.className = "container__usuario";
sectionContainer.appendChild(containerDoUsuario);

newUserButton.addEventListener('click', buscarUsuario);

function buscarUsuario() {
    fetch(API_RANDOM_USER_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            exibirUsuario(data);
        })
        .catch((error) => {
            console.error("Não foi possível buscar os dados do usuário", error);
        })
}

function exibirUsuario(data) {
    const userName = data.results[0].name.title + " " +
        data.results[0].name.first + " " +
        data.results[0].name.last;

    const userEmail = data.results[0].email;
    const userPicture = data.results[0].picture.medium;

    containerDoUsuario.innerHTML = `
        <img class="user__picture" src="${userPicture}" alt="Foto do usuário">
        <h1 class="user__name"><span>Nome:</span>${userName}</h1>
        <h1 class="user__email"><span>E-mail:</span>${userEmail}</h1>
    `;
}
