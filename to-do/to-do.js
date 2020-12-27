const fs = require('fs');

let listadoPorHacer = []

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer)
  fs.writeFile('db/data.json', data , (err) => {
      if (err)
       throw new Error('No se pudo grabar', err);
      // else
      //   // resolve(`tabla-${base}.txt`)
      // console.log('File has been saved!');
    });

}

const cargarDB = () => {
  try {
    
    listadoPorHacer = require('../db/data.json')
  } catch(err) {
    listadoPorHacer = []
  }
  // console.log(listadoPorHacer)
}

const crear = (descripcion) => {
  
  cargarDB()
  let porHacer = {
    descripcion,
    completado: false,
  }

  listadoPorHacer.push(porHacer)

  guardarDB()
  
  return porHacer
}

const getListado = () => {
  // console.log(listadoPorHacer)
  cargarDB()
  return listadoPorHacer
}

const update = (descripcion, completado = true) => {
  cargarDB()

  let index = listadoPorHacer.findIndex(tarea => {
    return tarea.descripcion === descripcion
  })

  if (index >= 0) {
    listadoPorHacer[index].completado = completado
    guardarDB()
    return true
  } else {
    return false
  }
}

const borrar = (descripcion) => {
  cargarDB()

  let nuevoListado = listadoPorHacer.filter(tarea => {
    return tarea.descripcion !== descripcion
  })

  if (listadoPorHacer.length === nuevoListado.length) {
    return false
  } else {
    listadoPorHacer = nuevoListado
    guardarDB()
    return true
  }

  // let index = listadoPorHacer.findIndex(tarea => {
  //   return tarea.descripcion === descripcion
  // })
  // return listadoPorHacer.shift(index)
}

module.exports = {
  getListado,
  crear,
  update,
  borrar
}