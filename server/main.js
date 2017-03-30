import { Meteor } from 'meteor/meteor';
import {LocalidadM} from '../imports/api/localidades.js'
import {Reservas} from '../imports/api/reservas.js'
import {Canchas} from '../imports/api/canchas.js'
import {Usuarios} from '../imports/api/usuarios.js'
import {Partidos} from '../imports/api/partidos.js'

//Deberias aca definir los meteor methods asociados a la base de datos y les añades aca los nombres que llamaras desde el app.js
Meteor.startup(() => {
  // code to run on server at startup
});
