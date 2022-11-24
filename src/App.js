import "./App.css";
import { useState } from "react";
import FormUsuario from "./components/FormUsuario";
import TablaUsuario from "./components/TablaUsuario";

function App() {
  const [editarUsuarioForm, setEditarUsuarioForm] = useState({});
  const [editar, setEditar] = useState(false);
  const [cargar, setCargar] = useState(false);

  const editarForm = (usuario) => {
    setEditar(true);
    let form = usuario;
    setEditarUsuarioForm(form);
    console.log(editarUsuarioForm);
  };
  return (
    <div className="container">
      <FormUsuario
        editarUsuarioForm={editarUsuarioForm}
        editar={editar}
        cargar={cargar}
        setCargar={setCargar}
      ></FormUsuario>
      <TablaUsuario editarForm={editarForm} cargar={cargar}></TablaUsuario>
    </div>
  );
}

export default App;
