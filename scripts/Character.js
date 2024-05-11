class Character {
    constructor(name, image, status, species, location) {
        this.name = name
        this.image = image
        this.status = status
        this.species = species
        this.location = location
    }

    toHtml() {
        const isAlive = this.status == "Alive"
        var isAliveClass = isAlive ? "alive" : "no-alive"

        return `
        <div class="card">
            <img src="${this.image}" alt="Character Image">
            <div class="info">
                <h2>${this.name}</h2>
                <div class="status">
                    <div class="${isAliveClass}"></div>
                    <p>${this.status} - ${this.species}</p>
                </div>
                <p><b>Last known location:</b></p>
                <p>${this.location}</p>
            </div>
        </div>
        `
    }
}