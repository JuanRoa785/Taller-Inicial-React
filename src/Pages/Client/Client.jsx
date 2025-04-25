import { useState } from "react"
import './Client.css'

function ClientPage(){
    
    const defaultDate = () => {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [startDate, setStartDate] = useState(defaultDate);
    
    const clients = [
        { id: 1, nombre: "Laura Méndez", totalCompras: 50000, ultimaCompra: "2025-04-10" },
        { id: 2, nombre: "Andrés Herrera", totalCompras: 1200000, ultimaCompra: "2025-04-18" },
        { id: 3, nombre: "Mariana López", totalCompras: 340000, ultimaCompra: "2025-03-30" },
        { id: 4, nombre: "Julián Castro", totalCompras: 820000, ultimaCompra: "2025-04-20" },
        { id: 5, nombre: "Camila Vargas", totalCompras: 150000, ultimaCompra: "2025-04-15" },
        { id: 6, nombre: "Santiago Ríos", totalCompras: 28000, ultimaCompra: "2025-04-05" },
        { id: 7, nombre: "Isabella Guzmán", totalCompras: 120400, ultimaCompra: "2025-04-22" }
      ];

    return (
        <>
            <div id="table-container">
                <div className="col-9" id="page-content" style={{ marginBottom: '25px', overflowX: 'auto' }}>
                    <div
                        id="container" style={{ marginTop: '25px', marginLeft: '15px', marginRight: '15px', minWidth: '530px' }}>
                        <p style={{ fontSize: '18px', fontWeight: 500, margin: '5px', textAlign: 'center' }}>
                            CLIENTES
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
                                <p className="mb-0 me-2" style={{ fontSize: '14px', fontWeight: 500, width: '190px' }}>
                                    Ultima Compra:
                                </p>
                                <div className="input-group ms-2">
                                    <input
                                        type="date"
                                        className="form-control form__input"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        name="datePicker1"
                                        style={{width: '100px', paddingLeft: '10px'}}
                                    />
                                </div>
                            </div>
                        </div>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NOMBRE</th>
                                    <th scope="col">TOTAL COMPRAS</th>
                                    <th scope="col">ULTIMA COMPRA</th>
                                    <th scope="col">DETALLES</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                clients.map((client) => (
                                <tr key={client.id}>
                                    <td>{client.id}</td>
                                    <td>{client.nombre}</td>
                                    <td>$ {client.totalCompras.toLocaleString('es-CO')} COP</td>
                                    <td>{client.ultimaCompra}</td>
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

export default ClientPage