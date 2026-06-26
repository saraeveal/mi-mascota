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

    jugar() {
    this.felicidad = Math.min(
        100,
        this.felicidad + 20
    );

    this.energia = Math.max(
        0,
        this.energia - 15
    );

    console.log(
        `${this.nombre} jugó 🎾 — Felicidad: ${this.felicidad}, Energía: ${this.energia}`
    );
    },

    dormir() {
    this.energia = Math.min(
        100,
        this.energia + 30
    );

    console.log(
        `${this.nombre} durmió 😴 — Energía: ${this.energia}`
    );
    },
};

//Etapa 1 · Nace tu mascota

//Notación punto
console.log("Nombre:", mascota.nombre);
//Notación corchete
console.log("Tipo:", mascota["tipo"]);

//Etapa 2 · Método describir() y this
console.log(mascota.describir());

//Etapa 3 · alimentar()
mascota.alimentar();
mascota.alimentar();

//Etapa 4 · jugar() y dormir()
mascota.jugar();
mascota.dormir();