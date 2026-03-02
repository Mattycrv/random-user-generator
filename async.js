import { API_RANDOM_USER_URL } from "./constants.js";

const newUserButton = document.getElementById("newUserButton");
const sectionContainer = document.querySelector(".container");

const containerDoUsuario = document.createElement("div");
containerDoUsuario.className = "container__usuario";
sectionContainer.appendChild(containerDoUsuario);

newUserButton.addEventListener('click', buscarUsuario);

async function buscarUsuario() {
    try {
        const response = await fetch(API_RANDOM_USER_URL);
        const data = await response.json();
        exibirUsuario(data);
    } 
    catch(error) {
        console.error("Não foi possível buscar os dados do usuário", error);

        containerDoUsuario.innerHTML = `
            <p>Não foi possível buscar os dados do usuário</p>
        `;
    }
}

function exibirUsuario(data) {
    const user = data.results[0];
    const { name, email, picture } = user;
    const { title, first, last} = name;
    const userName = title + " " + first + " " + last;
    const { large } = picture;

    containerDoUsuario.innerHTML = `
        <img class="user__picture" src="${large}" alt="Foto do usuário">
        <h1 class="user__name"><span>Nome:</span>${userName}</h1>
        <h1 class="user__email"><span>E-mail:</span>${email}</h1>
    `;
}
