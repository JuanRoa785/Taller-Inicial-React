import { useState } from "react"
import './Provider.css'

function ProviderPage(){
    const defaultDate = () => {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const stateColor = (estado) => {
        if (estado == 'Completado') {
            return 'green';
        } else if (estado == 'Pendiente') {
            return 'orange';
        } else {
            return 'red';
        }
    }

    const [startDate, setStartDate] = useState(defaultDate);
    
    const orders = [
        { id: 101, nombre: "Laura Méndez", estado: "Completado", fecha: "2025-04-20", total: "150000" },
        { id: 102, nombre: "Andrés Herrera", estado: "Pendiente", fecha: "2025-04-22", total: "85000" },
        { id: 103, nombre: "Mariana López", estado: "Cancelado", fecha: "2025-04-10", total: "0" },
        { id: 104, nombre: "Julián Castro", estado: "Completado", fecha: "2025-04-18", total: "120000" },
        { id: 105, nombre: "Camila Vargas", estado: "Pendiente", fecha: "2025-04-23", total: "60000" },
        { id: 106, nombre: "Santiago Ríos", estado: "Completado", fecha: "2025-04-19", total: "45000" },
        { id: 107, nombre: "Isabella Guzmán", estado: "Pendiente", fecha: "2025-04-24", total: "70000" },
        { id: 108, nombre: "Felipe Martínez", estado: "Completado", fecha: "2025-04-21", total: "110000" }
    ];

    return (
        <>
            <div id="table-container">
                <div className="col-9" id="page-content" style={{ marginBottom: '25px', overflowX: 'auto' }}>
                    <div
                        id="container" style={{ marginTop: '25px', marginLeft: '15px', marginRight: '15px', minWidth: '530px' }}>
                        <p style={{ fontSize: '18px', fontWeight: 500, margin: '5px', textAlign: 'center' }}>
                            PROVEEDORES
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
                                    Ultimo Pedido:
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
                                    <th scope="col">ESTADO</th>
                                    <th scope="col">FECHA</th>
                                    <th scope="col">TOTAL</th>
                                    <th scope="col">DETALLES</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.nombre}</td>
                                    <td style={{color: stateColor(order.estado)}}>{order.estado.toLocaleUpperCase()}</td>
                                    <td>{order.fecha}</td>
                                    <td>$ {order.total.toLocaleString('es-CO')} COP</td>
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

export default ProviderPage