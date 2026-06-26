//Etapa 3 · alimentar()
const mascota = {
    nombre: "Pelusa",
    tipo: "gato",

    hambre: 50,
    felicidad: 50,
    energia: 50,

    describir() {
        return `${this.nombre} es un ${this.tipo}.`;
    },

    alimentar() {
    this.hambre = Math.max(0, this.hambre - 20);

    console.log(
        `${this.nombre} comió 🍖 — Hambre: ${this.hambre}`
    );
    },
};

//Etapa 1 · Nace tu mascota
const mascota1 = {
    nombre: "Pelusa",
    tipo: "gato",

    hambre: 50,
    felicidad: 50,
    energia: 50
};
//Notación punto
console.log("Nombre:", mascota.nombre);
//Notación corchete
console.log("Tipo:", mascota["tipo"]);

//Etapa 2 · Método describir() y this
const mascota2 = {
    nombre: "Pelusa",
    tipo: "gato",

    hambre: 50,
    felicidad: 50,
    energia: 50,

    describir() {
        return `${this.nombre} es un ${this.tipo}.`;
    }
};

console.log(mascota.describir());

//Etapa 3 · alimentar()

mascota.alimentar();
mascota.alimentar();