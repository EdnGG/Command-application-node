// const descripcion = {
//   demand: true,
//   alias: 'd',
//   desc: 'Descripcion de la tarea por hacer'
// }

// const completado = {
//   default: true,
//   alias: 'c',
//   desc: 'Marca como compleado o pendinte la tarea',
// }

const argv = require('yargs')
  .command('create', 'create to do list', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: 'Descripcion de la tarea por hacer'
    }
  })
  .command('update', 'Update all to-do items', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: 'Actualizacion de tarea',
    },
    completado: {
      default: true,
      alias: 'c',
      desc: 'Marca como compleado o pendinte la tarea',
    }
  })
  .command('delete', 'delete a list element', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: 'Eliminacion de tarea por hacer'
    }
  })
  .help()
  .argv

module.exports = {
    argv
  }