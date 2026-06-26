const mascota = {
    nombre: "Pelusa",
    tipo: "gato",

    hambre: 50,
    felicidad: 50,
    energia: 50,

    describir() {
        alert(`${this.nombre} es un ${this.tipo}.`);
    },

    alimentar() {
    this.hambre = Math.max(0, this.hambre - 20);

    alert(
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

    alert(
        `${this.nombre} jugó 🎾 — Felicidad: ${this.felicidad}, Energía: ${this.energia}`
    );
    },

    dormir() {
    this.energia = Math.min(
        100,
        this.energia + 30
    );

    alert(
        `${this.nombre} durmió 😴 — Energía: ${this.energia}`
    );
    },

    verEstado() {
        let estado = "";
        Object.entries(this)

            .filter(([clave, valor]) =>
                typeof valor === "number"
            )

            .forEach(([clave, valor]) =>{
                estado += `${clave}: ${valor}\n`;
            });
            alert(estado)

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

//Etapa 5 · verEstado()
mascota.verEstado();

//Etapa 6 · Clon VIP + spread + destructuring
const mascotaVIP = {
    ...mascota,
    accesorio: "corona 👑",
    felicidad: 100
};
console.log(
`VIP felicidad: ${mascotaVIP.felicidad} | accesorio: ${mascotaVIP.accesorio}`
);

console.log(
`Original felicidad: ${mascota.felicidad}`
);

const { nombre, tipo } = mascota;
console.log(
`Mi mascota: ${nombre} (${tipo})`
);

//🏆 Jefe Final · Menú do/while
let opcion;

do {

opcion = prompt(
`=== ${mascota.nombre} ===

1) Alimentar 🍖
2) Jugar 🎾
3) Dormir 😴
4) Ver estado 📋
5) Salir

Elige una opción:`
);

if (opcion === "1") {

    mascota.alimentar();

}

else if (opcion === "2") {

    mascota.jugar();

}

else if (opcion === "3") {

    mascota.dormir();

}

else if (opcion === "4") {

    mascota.verEstado();

}

else if (opcion === "5") {

    alert(`¡Cuídate, ${mascota.nombre}! 👋`);

}

else {

    alert("Opción inválida");

}

} while (opcion !== "5");