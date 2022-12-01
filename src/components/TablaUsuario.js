import React, { useEffect, useState } from "react";
import UsuarioItem from "./UsuarioItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TablaUsuario = (props) => {
  const URL = "http://localhost:3004/usuarios/";
  const navigate = useNavigate();
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

  const agregarUsuario = ()=>{
    props.setEditar(false);
    navigate("/form");
  }

  return (
  <div className="container">
    <div className="d-flex justify-content-between my-3">
      <h2 className="text-primary titulo p-2">Lista de estudiantes</h2>
      <button className="btn btn-outline-primary" onClick={agregarUsuario}>Agregar estudiante</button>
    </div>
    <table className="table p-3 border-radius shadow my-3">
        <thead>
          <tr>
            <th scope="col">Legajo</th>
            <th scope="col">Apellido</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Carrera</th>
            <th scope="col">Acciones</th>
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
                    key={usuario.id}
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
