
class Usuario {
    static count = 0;
    constructor(username, password) {
        this.id = Usuario.count;
        this.username = username;
        this.password = password;
        Usuario.count++;
    }
}

class Pokemon {
    constructor(nombre, tipo1, tipo2, nivel, estadisticas) {
        this.nombre = nombre;
        this.tipo1 = tipo1;
        this.tipo2 = tipo2;
        this.nivel = nivel;
        this.estadisticas = estadisticas;
        // this.ataques = ataques
    }
}

class Estadisticas {
    constructor(vida, atk, def, spatk, spdef, vel) {
        this.vida = vida;
        this.atk = atk;
        this.def = def;
        this.spatk = spatk;
        this.spdef = spdef;
        this.vel = vel;
    }
}

class Ataque {
    constructor(nombre, efecto, dmg) {
        this.nombre = nombre;
        this.efecto = efecto;
        this.dmg = dmg;
    }
}

function inicioSesion() {
    enviarUsuario();
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
}

function inicio() {
    document.getElementById("submenu").style.display = "none";
}

function mostrarInicioSesion() {
    let display = document.getElementById("submenu").style.display;
    if (display == "none") {
        document.getElementById("submenu").style.display = "block";
    }
    else {
        document.getElementById("submenu").style.display = "none";
    }
}

function lecturaPokemons(input) {
    var pokemons = new Array();
    let archivo = input.files[0];
    let lector = new FileReader();

    lector.readAsText(archivo);

    lector.onload = function () {
        let contenido = new String(lector.result);
        let array = contenido.split('\n');
        for (let i = 0; i < array.length; i++) {
            let pokemon = array[i].split(',');
            let p = new Pokemon(pokemon[0], pokemon[1], pokemon[2], pokemon[3], new Estadisticas(pokemon[4], pokemon[5], pokemon[6], pokemon[7], pokemon[8], pokemon[9], pokemon[10]));
            pokemons.push(p);
        }
        pokemons.pop(0);
        addSelectMiembro(pokemons);
    };
    lector.onload();
    lector.onerror = function () {
        console.log("Error al leer el archivo");
    };
}

function addSelectMiembro(pokemons) {
    let select1 = document.getElementById("miembro1");
    for (let i = 0; i < pokemons.length; i++) {
        let option = document.createElement("option");
        option.text = pokemons[i].nombre;
        option.value = i;
        option.setAttribute("id", "option1_" + i);
        select1.add(option);
    }

    let select2 = document.getElementById("miembro2");
    for (let i = 0; i < pokemons.length; i++) {
        let option = document.createElement("option");
        option.text = pokemons[i].nombre;
        option.value = i;
        option.setAttribute("id", "option2_" + i);
        select2.add(option);
    }

    let select3 = document.getElementById("miembro3");
    for (let i = 0; i < pokemons.length; i++) {
        let option = document.createElement("option");
        option.text = pokemons[i].nombre;
        option.value = i;
        option.setAttribute("id", "option3_" + i);
        select3.add(option);
    }

    let select4 = document.getElementById("miembro4");
    for (let i = 0; i < pokemons.length; i++) {
        let option = document.createElement("option");
        option.text = pokemons[i].nombre;
        option.value = i;
        option.setAttribute("id", "option4_" + i);
        select4.add(option);
    }

    let select5 = document.getElementById("miembro5");
    for (let i = 0; i < pokemons.length; i++) {
        let option = document.createElement("option");
        option.text = pokemons[i].nombre;
        option.value = i;
        option.setAttribute("id", "option5_" + i);
        select5.add(option);
    }

    let select6 = document.getElementById("miembro6");
    for (let i = 0; i < pokemons.length; i++) {
        let option = document.createElement("option");
        option.text = pokemons[i].nombre;
        option.value = i;
        option.setAttribute("id", "option6_" + i);
        select6.add(option);
    }


    addImagenPokemon(pokemons);
}


function addImagenPokemon(pokemons) {
    let imagenes = crearImagenes(pokemons); let select1 = document.getElementById("option1_" + document.getElementById("miembro1").value);
    if (select1) {
        document.getElementById("set1").innerHTML = imagenes[select1.value];
    }

    let select2 = document.getElementById("option2_" + document.getElementById("miembro2").value);
    if (select2) {
        document.getElementById("set2").innerHTML = imagenes[select2.value];
    }
    let select3 = document.getElementById("option3_" + document.getElementById("miembro3").value);
    if (select3) {
        document.getElementById("set3").innerHTML = imagenes[select3.value];
    }
    let select4 = document.getElementById("option4_" + document.getElementById("miembro4").value);
    if (select4) {
        document.getElementById("set4").innerHTML = imagenes[select4.value];
    }
    let select5 = document.getElementById("option5_" + document.getElementById("miembro5").value);
    if (select5) {
        document.getElementById("set5").innerHTML = imagenes[select5.value];
    }
    let select6 = document.getElementById("option6_" + document.getElementById("miembro6").value);
    if (select6) {
        document.getElementById("set6").innerHTML = imagenes[select6.value];
    }
}


function actualizarEquipo(pokemons) {
    addImagenPokemon(pokemons);
}


function crearImagenes(pokemons) {
    var imagenes = [];

    if (!Array.isArray(pokemons)) {
        // Si pokemons no es un array, mostrar un mensaje de error en la consola
        console.error('El argumento pasado a crearImagenes() no es un array.');
        return imagenes;
    }

    for (let i = 0; i < pokemons.length; i++) {
        var nombre = pokemons[i].nombre.toLowerCase();
        var imagen = "<a href='https://pokemondb.net/pokedex/" + nombre + "'><img src='https://img.pokemondb.net/sprites/x-y/normal/" + nombre + ".png' alt='" + pokemons[i].nombre[0].toUpperCase() + pokemons[i].nombre.slice(1) + "'></a>";
        imagenes.push(imagen);
    }

    return imagenes;
}


function enviarUsuario() {
    var ehttp = new XMLHttpRequest();

    ehttp.open("POST", "http://localhost:8080/PrFinalLenguajeDeMarcas/Servlet", true);
    ehttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ehttp.send("name=" + document.getElementById("usuario").value + "&password=" + document.getElementById("password").value);
}

function recibirMensaje() {
    var rhttp = new XMLHttpRequest();

    // rhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("").innerHTML = rhttp.responseText;  
    //     }
    // };
    rhttp.open("GET", "http://localhost:8080/PrFinalLenguajeDeMarcas/Servlet", true);
    rhttp.send();
}