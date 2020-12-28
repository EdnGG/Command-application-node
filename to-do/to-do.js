const fs = require('fs');

let listadoPorHacer = []

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer)
  fs.writeFile('db/data.json', data , (err) => {
      if (err)
       throw new Error('Error trying to save data', err);
    });

}

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json')
  } catch(err) {
    listadoPorHacer = []
  }
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
// crea un nuevo arreglo y filtra a elemento que tenga la descripcion
// que viene como parametro y lo excluye del nuevo arreglo "!=="
  let nuevoListado = listadoPorHacer.filter(tarea => {
    return tarea.descripcion !== descripcion
  })
// Aqui se comparan los 2 arreglos para verificar que se borro el elemento deseado
// comparando su longitud
  if (listadoPorHacer.length === nuevoListado.length) {
    return false
  } else {
// Si la longitud es diferente, entonces se substituye el contenido del 
// viejo arreglo con lo que tiene el nuevo arreglo
    listadoPorHacer = nuevoListado
    guardarDB()
    return true
  }
}

module.exports = {
  getListado,
  crear,
  update,
  borrar
}