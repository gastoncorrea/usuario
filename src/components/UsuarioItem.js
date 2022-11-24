import React from "react";
import { faUserEdit, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Iconos from "./Iconos";

const UsuarioItem = (props) => {
  const URL = "http://localhost:3004/usuarios/";
  const editarUsuario = (id) => {
   props.editarForm(props.usuario);
  };

  const eliminarUsuario = async () => {
    const resp = await axios.delete(URL + `${props.usuario.id}`);
    console.log(resp);
    if (resp.status === 200) {
      alert("Usuario eliminado");
      props.mostrarDatos();
    } else {
      alert("No se pudo eliminar el usuario");
    }
  };
  return (
    <tr key={props.usuario.id}>
      <th scope="row">{props.usuario.legajo}</th>
      <td>{props.usuario.apellido}</td>
      <td>{props.usuario.nombre}</td>
      <td>{props.usuario.email}</td>
      <td>{props.usuario.carrera}</td>
      <td className="d-flex justify-content-between">
        <button onClick={editarUsuario} className="btn">
          <Iconos icon={faUserEdit} css="icon" />
        </button>
        <button onClick={eliminarUsuario} className="btn">
          <Iconos icon={faUserTimes} css="icon" />
        </button>
      </td>
    </tr>
  );
};

export default UsuarioItem;
