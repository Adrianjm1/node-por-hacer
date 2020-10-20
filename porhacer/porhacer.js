const fs = require('fs');


let listadoPorhacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorhacer)
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar')
    })

}

const cargarDB = () => {

    try {

        listadoPorhacer = require('../db/data.json');


    } catch (error) {
        listadoPorhacer = [];

    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push(porHacer);
    guardarDB();

    return porHacer


}

const getListado = () => {
    cargarDB();
    return listadoPorhacer;


}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })


    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;

    }
}

module.exports = {
    crear,
    getListado,
    actualizar

}