import "./App.css";
import { useState } from "react";
import FormUsuario from "./components/FormUsuario";
import TablaUsuario from "./components/TablaUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TablaUsuario
                editarForm={editarForm}
                cargar={cargar}
                setEditar={setEditar}
                className="row"
              ></TablaUsuario>
            }
          />
          <Route
            path="/form"
            element={
              <FormUsuario
                editarUsuarioForm={editarUsuarioForm}
                editar={editar}
                cargar={cargar}
                setCargar={setCargar}
              />
            }
          />
          <Route
            path="/form/:id"
            element={
              <FormUsuario
                editarUsuarioForm={editarUsuarioForm}
                editar={editar}
                cargar={cargar}
                setCargar={setCargar}
              />
            }
          />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
