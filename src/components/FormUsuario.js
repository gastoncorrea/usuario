import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormUsuario = (props) => {
  const URL = "http://localhost:3004/usuarios/";
  const navigate = useNavigate();
  const params = useParams();
  const [email, setEmail] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [legajo, setLegajo] = useState("");
  const [carrera, setCarrera] = useState(0);
  const [nombreBoton, setNombreBoton] = useState("Guardar");

  useEffect(()=>{
    if( props.editar){
      cargarUnUsuario();
      console.log("Use effect"+props.editar);
    };
  },[props.editar])

  const guardarUnUsuario = async (usuario, ruta) => {
    const resp = await axios.post(ruta, usuario);
    console.log(resp);
    if (resp.status === 201) {
      alert("Usuario creado correctamente");
      navigate("/");
    } else {
      alert("Error en el servidor");
    }
  };

  const editarUsuario = async (usuario,ruta, id)=>{
    const resp = await axios.put(ruta+id, usuario);
    console.log(resp);
    if(resp.status === 200){
      alert("usuario Modificado correctamente");
      navigate("/");
    }else{
      alert("Error al modificar el estudiante");
    }
  }

  const cargarUnUsuario = () => {
    setNombreBoton("Editar");
    console.log(props.editarUsuarioForm);
    setEmail(props.editarUsuarioForm.email);
    setApellido(props.editarUsuarioForm.apellido);
    setNombre(props.editarUsuarioForm.nombre);
    setDni(props.editarUsuarioForm.dni);
    setLegajo(props.editarUsuarioForm.legajo);
    setCarrera(props.editarUsuarioForm.carrera);
  };


  const limpiarForm = ()=>{
    setEmail("");
    setApellido("");
    setNombre("");
    setDni("");
    setLegajo("");
    setCarrera("");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const form = {
      email: email,
      apellido: apellido,
      nombre: nombre,
      dni: dni,
      legajo: legajo,
      carrera: carrera,
    };
    console.log(form);
    if(props.editar){
      editarUsuario(form,URL,params.id);
    }else{
      guardarUnUsuario(form, URL);
      props.setCargar(!props.cargar);
    }
    limpiarForm();
  };

  return (
    <div className="row">
      <h1 className="col-xs-12 mx-auto text-center my-5">
        Formulario para gestionar un usuario
      </h1>
      <form
        className="col-xs-12 col-lg-4 mx-auto shadow py-3 border-radius"
        onSubmit={onSubmit}
      >
        <div className="form-floating mb-4">
          <input
            type="email"
            name="email"
            required
            className="form-control border-0 border-bottom shadow-none invalid"
            id="emailInstitucional"
            placeholder="email institucional"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <label className="form-label">Email institucional:</label>
        </div>
        <div className="d-flex justify-content-center">
          <div className="form-floating mb-4 dimension-primerBloque me-3">
            <input
              type="text"
              name="apellido"
              required
              className="form-control border-0 border-bottom shadow-none"
              id="apellido"
              placeholder="apellido"
              value={apellido}
              onChange={(ev) => setApellido(ev.target.value)}
            />
            <label className="form-label">Apellido:</label>
          </div>
          <div className="form-floating mb-4 dimension-segundoBloque">
            <input
              type="text"
              name="nombre"
              required
              className="form-control border-0 border-bottom shadow-none"
              id="nombre"
              placeholder="nombre"
              value={nombre}
              onChange={(ev) => setNombre(ev.target.value)}
            />
            <label className="form-label">Nombre completo:</label>
          </div>
        </div>
        <div className="form-floating mb-4">
          <input
            type="number"
            required
            name="dni"
            className="form-control border-0 border-bottom shadow-none"
            id="dni"
            placeholder="Ingrese su N° de DNI:"
            value={dni}
            onChange={(ev) => setDni(ev.target.value)}
          />
          <label className="form-label">Número de DNI:</label>
        </div>
        <div className="d-flex justify-content-center">
          <div className="form-floating mb-4 dimension-primerBloque me-3">
            <input
              type="number"
              name="legajo"
              required
              className="form-control border-0 border-bottom shadow-none"
              id="legajo"
              placeholder="Ingrese N° de legajo..."
              value={legajo}
              onChange={(ev) => setLegajo(ev.target.value)}
            />
            <label className="form-label">N° de legajo:</label>
          </div>
          <div className="form-floating mb-4 dimension-segundoBloque">
            <select
              className="form-select border-0 border-bottom shadow-none"
              value={carrera}
              onChange={(ev) => setCarrera(ev.target.value)}
            >
              <option value="0" key="0" disabled>
                Carrera:
              </option>
              <option value="1" key="1">
                Ingenieria en sistemas de informacion
              </option>
              <option value="2" key="2">
                Ingenieria electronica
              </option>
              <option value="3" key="3">
                Ingenieria civil
              </option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center mb-3">
          <h6 className="text-primary d-inline me-3">Agregar otro legajo</h6>
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <button type="submit" className="btn btn-primary d-block">
          {nombreBoton}
        </button>
      </form>
    </div>
  );
};

export default FormUsuario;
