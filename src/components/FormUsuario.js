import React from "react";

const FormUsuario = () => {
  return (
    <div class="row">
      <h1 class="col-xs-12 mx-auto text-center my-5">Formulario para gestionar un usuario</h1>
      <form class="col-xs-12 col-md-6 mx-auto shadow py-3 border-radius">
        <div class="form-floating mb-4">
          <input
            type="email"
            required
            class="form-control border-0 border-bottom shadow-none"
            id="emailInstitucional"
            placeholder="email institucional"
            formControlName="email"
          />
          <label for="emailInstitucional" class="form-label">
            Email institucional:
          </label>
        </div>
        <div class="d-flex justify-content-center">
          <div class="form-floating mb-4 dimension-primerBloque me-3">
            <input
              type="text"
              class="form-control border-0 border-bottom shadow-none"
              id="apellido"
              placeholder="apellido"
              formControlName="apellido"
              required
            />
            <label for="apellido" class="form-label">
              Apellido:
            </label>
          </div>
          <div class="form-floating mb-4 dimension-segundoBloque">
            <input
              type="text"
              class="form-control border-0 border-bottom shadow-none"
              id="nombre"
              placeholder="nombre"
              formControlName="nombre"
              required
            />
            <label for="nombre" class="form-label">
              Nombre completo:
            </label>
          </div>
        </div>
        <div class="form-floating mb-4">
          <input
            type="number"
            class="form-control border-0 border-bottom shadow-none"
            id="dni"
            placeholder="Ingrese su N° de DNI:"
            formControlName="dni"
            required
          />
          <label for="dni" class="form-label">
            Número de DNI:
          </label>
        </div>
        <div class="d-flex justify-content-center">
          <div class="form-floating mb-4 dimension-primerBloque me-3">
            <input
              type="number"
              class="form-control border-0 border-bottom shadow-none"
              id="legajo"
              placeholder="Ingrese N° de legajo..."
              formControlName="legajo"
              required
            />
            <label for="legajo" class="form-label">
              N° de legajo:
            </label>
          </div>
          <div class="form-floating mb-4 dimension-segundoBloque">
            <select class="form-select border-0 border-bottom shadow-none">
              <option disabled selected>Carrera:</option>
              <option value="1">Ingenieria en sistemas de informacion</option>
              <option value="2">Ingenieria electronica</option>
              <option value="3">Ingenieria civil</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FormUsuario;
