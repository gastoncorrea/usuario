import React, { useEffect, useState } from "react";
import UsuarioItem from "./UsuarioItem";
import axios from "axios";

const TablaUsuario = (props) => {
  const URL = "http://localhost:3004/usuarios/";
  const [listaUsuario, setListaUsuario] = useState([{}]);

  useEffect(() => {
    mostrarDatos();
  },[props.cargar])
  const traerDatos = async () => {
    const resp = await axios.get(URL);
    return resp.data;
  };

  const mostrarDatos = async () => {
    const listaDatos = await traerDatos();
    setListaUsuario(listaDatos);
  };

  return (
    <div className="col-xs-12 col-lg-8 mx-auto shadow py-3 border-radius">
      <table className="table mx-auto">
        <thead>
          <tr>
            <th scope="col">Legajo</th>
            <th scope="col">Apellido</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Carrera</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuario !== []
            ? listaUsuario.map((usuario) => {
                return (
                  <UsuarioItem
                    usuario={usuario}
                    mostrarDatos={mostrarDatos}
                    editarForm = {props.editarForm}
                  ></UsuarioItem>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuario;
