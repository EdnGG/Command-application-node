const colors = require('colors')
const argv = require('./config/yargs').argv
const porHacer = require('./to-do/to-do')

// Las descripciones estan en "argv.descripcion"
let comando = argv._[0]

switch (comando) {
  case 'create':
    let tarea = porHacer.crear(argv.descripcion)
    console.log(tarea)
  break;
  
  case 'list':
    let listado = porHacer.getListado()
    for (let tarea of listado) {
      console.log('======Por Hacer======='.green)
      console.log(tarea.descripcion)
      console.log('Estado:', tarea.completado)
      console.log('======================'.green)
    }
  break;
  
  case 'update':
    let actualizado = porHacer.update(argv.descripcion, argv.completado)
    console.log(actualizado)
  break;
  
  case 'delete':
    let borrado = porHacer.borrar(argv.descripcion)
    console.log(borrado)
  break
  
  default:
    console.log("command don't reconized")
}