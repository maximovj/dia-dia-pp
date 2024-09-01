import { useAuth } from '../context/AuthContext';
import Cookies from 'js-cookie';
import SwitchModoOscuro from "./SwitchModoOscuro";

export function NavBar() {
  const sessionData = Cookies.get('session_diadiapp');
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark text-white"
        style={{ backgroundColor: "#363636" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DiaDiApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExampleLabel"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Solo se muestra cuando el usuario no está autenticado  */}
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/acceder">
                      Acceder
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/registrarme">
                      Registrarme
                    </a>
                  </li>
                </>
              )}

              {/* Solo se muestra si el usuario a iniciado sesión  */}
              {isAuthenticated && (
                <>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Cuenta
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Ver información</a></li>
                      <li><a className="dropdown-item" href="#">Configurar</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" type='button' onClick={logout} >Cerrar sesión</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/tareas">
                      Lista de tareas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/diarios">
                      Diario
                    </a>
                  </li>
                </>
              )}
            </ul>
            <div className="d-flex flex-column justify-content-end align-items-end">
              <span className="txt-span-version-css">v1.0Alpha</span>
              <SwitchModoOscuro></SwitchModoOscuro>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            DiaDiApp
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <span>Menu</span>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Lista de tareas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Diario
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
