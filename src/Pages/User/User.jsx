import { useState } from "react"
import './User.css'

function UsersPage(){
    const users = [
        { id: 1, nombre: "Ana Torres", rol: "Administrador", equipo: "Ventas", fechaCreacion: "2024-01-15" },
        { id: 2, nombre: "Carlos Ruiz", rol: "Editor", equipo: "Marketing", fechaCreacion: "2024-02-01" },
        { id: 3, nombre: "Luisa Gómez", rol: "Lector", equipo: "Soporte", fechaCreacion: "2024-02-10" },
        { id: 4, nombre: "Pedro Mendoza", rol: "Administrador", equipo: "Desarrollo", fechaCreacion: "2024-03-05" },
        { id: 5, nombre: "Sara Díaz", rol: "Lector", equipo: "Diseño", fechaCreacion: "2024-03-20" },
        { id: 6, nombre: "Jorge Silva", rol: "Editor", equipo: "Finanzas", fechaCreacion: "2024-04-01" },
        { id: 7, nombre: "Marta Rojas", rol: "Lector", equipo: "Legal", fechaCreacion: "2024-04-10" }
      ];

    return (
        <>
            <div id="table-container">
                <div className="col-9" id="page-content" style={{ marginBottom: '25px', overflowX: 'auto' }}>
                    <div
                        id="container" style={{ marginTop: '25px', marginLeft: '15px', marginRight: '15px', minWidth: '530px' }}>
                        <p style={{ fontSize: '18px', fontWeight: 500, margin: '5px', textAlign: 'center' }}>
                            USUARIOS
                        </p>

                        <div style={{ width: '100%', borderBottom: '1px solid rgb(214, 212, 212)', marginBottom: '5px' }}></div>

                        <div className="row d-flex mt-3 mb-1">
                            <div className="col-md-6 d-flex align-items-center">
                                <p className="mb-0" style={{ fontSize: '14px', fontWeight: 500 }}>
                                    Nombre:
                                </p>
                                <div className="input-group">
                                    <input type="search" id="buscador-inventario" className="form-control" />
                                    <button id="btn-filter-inventory" type="button" className="btn">
                                        <i className="bi bi-search icon-large"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex align-items-center">
                                <p className="mb-0 me-2" style={{ fontSize: '14px', fontWeight: 500}}>
                                    Orden:
                                </p>
                                <select class="form-select" aria-label="creacion sort select" id="selectOrderUser">
                                <option value="1" >Descendente</option>
                                <option value="2" >Ascendente</option>
                            </select>
                            </div>
                        </div>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NOMBRE</th>
                                    <th scope="col">ROL</th>
                                    <th scope="col">EQUIPO</th>
                                    <th scope="col">FECHA CREACION</th>
                                    <th scope="col">DETALLES</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.rol}</td>
                                    <td>{user.equipo}</td>
                                    <td>{user.fechaCreacion}</td>
                                    <td><a className="details-link"><i class="bi bi-plus-circle"></i> Info</a></td>
                                </tr>))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersPage