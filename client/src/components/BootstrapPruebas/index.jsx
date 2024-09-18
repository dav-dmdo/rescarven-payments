
const BootstrapPruebas = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">Columna 1</div>
          <div className="col-4">Columna 2</div>
          <div className="col-4">Columna 3</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">Columna 1</div>
          <div className="col-4">Columna 2</div>
        </div>
      </div>
      <div className="container">
        <button type="button" className="btn btn-primary">
          Botón Principal
        </button>
        <button type="button" className="btn btn-danger">
          Botón de Peligro
        </button>
        <button type="button" className="btn btn-success">
          Enviar
        </button>
      </div>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="tuemail@ejemplo.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
      <div className="container p-4 m-4 bg-primary text-white">
        <form>
          <div className="row">
            <div className="col m-auto">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Introduce your name.."
              />
            </div>
            <div className="col m-auto">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Introduce your pwd.."
              />
            </div>
            <div className="row">
              <button
                className="col-4 mt-4 mx-auto btn bg-dark text-white"
                type="button"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Enlace
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <table className="table m-6">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Juan</td>
            <td>juan@ejemplo.com</td>
          </tr>
        </tbody>
      </table>

      <div className="card" style={{ width: "18rem" }}>
        <img src="image.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Título de la Card</h5>
          <p className="card-text">
            Esta es una tarjeta simple con un ejemplo de contenido.
          </p>
          <a href="#" className="btn btn-primary">
            Ir a algún lugar
          </a>
        </div>
      </div>
    </>
  );
};

export default BootstrapPruebas;
