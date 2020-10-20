const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }

}

const completado = {
    default: true,
    alias: 'c',
    desc: "marca como completado o pendiente"

}


const com = {
    descripcion: {
        contenido: '',
        alias: 'd'
    },
    completado: {
        default: false,
        alias: 'c'
    }

}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarear', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: "marca como completado o pendiente"
        }
    })
    .help()
    .argv;

module.exports = {
    argv

}