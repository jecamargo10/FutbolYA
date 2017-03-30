  'use strict';
  import React, { Component } from 'react';
  import {Canchas} from '../api/canchas.js'
  import {Reservas} from '../api/reservas.js'
  export default class Reserva extends Component {
      constructor(props)
      {
        super(props);
        this.state=
          {
            cancha:'',
            precio:-1,
            cupos: -1,
            hora:'4:00 pm',
            nombreCancha:'Foto de Cancha \'5Site\''
          }
      }
    //Si no hay reserva muestras el precio y cupo en -1 ? eso no es muy diciente que digamos podrias poner 0 por tema de estetica
    render(){
        return(
          <div className='container reserva'>
            <div className='reservaI amarillo'>
              <h3>
                Cancha: {this.props.nombreC}
              </h3>
              <p>
                Precio: ${this.props.reserva.precio}
                <br></br>
                Cupos: {this.props.reserva.cupos}
                <br></br>
                Hora: {this.state.hora}
              </p>
            </div>
            <div className='reservaD'>
              <div className="fotoSitio">
                <img src="img/cancha.jpg" className="img-responsive imgCancha" alt={this.state.nombreCancha}></img>                              </div>
              <div>
                <button className="btn btn-danger" onClick={this.reservarCupo.bind(this)} href="#">Reserva Cupo</button>
              </div>
            </div>
          </div>
        )
      }

      reservarCupo(){
        var cuposN = this.props.reserva.cupos -1;
        Reservas.update({"_id":this.props.reserva._id},
        {
          "key":this.props.reserva.key,
          "precio":this.props.reserva.precio,
          "cupos":cuposN,
          "id_usuario":this.props.reserva.id_usuario,
          "id_cancha":this.props.reserva.id_cancha
        });
        this.props.infoReserva(this.props.reserva.key,this.props.reserva.id_cancha);
      }
  }
