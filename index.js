const catchButton = document.querySelector("#catch-button")//update this to pokeball image


fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(res => res.json())
.then(pokemon => {
    catchButton.addEventListener("click", e => {
    const createImg = document.createElement("img")
    const createName = document.createElement("p")
    const createWeight = document.createElement("p")
    const createDiv = document.createElement("div")
    const createButton = document.createElement("button")

    createImg.src = pokemon.sprites.front_default
    createName.textContent = `Name: ${pokemon.name}`
    createWeight.textContent = `Base Stat: ${pokemon.stats[0].base_stat}`
    createButton.textContent = "Release"

    createDiv.append(createName, createImg, createWeight, createButton)
    team.append(createDiv)

    createDiv.className = "teampokemon"

    createButton.addEventListener("click", e => {
        createDiv.remove()
    })

})
})
