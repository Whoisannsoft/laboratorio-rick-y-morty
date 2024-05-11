const container = document.getElementById("main-container");

async function getCharacters() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        
        const characters = data.results.map(parseJsonToCharacter);
        renderAllCharacters(characters);
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
    }
}

function parseJsonToCharacter(element) {
    const { name, image, status, species, location } = element;
    return new Character(name, image, status, species, location);
}

function renderAllCharacters(characters) {
    container.innerHTML = ""; 
    characters.forEach(character => {
        container.innerHTML += character.toHtml();
    });
}

getCharacters();
