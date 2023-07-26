import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";
import * as Icon from 'react-bootstrap-icons';
import "../../../css/material-dashboard.min.css";

const endPoint = "http://localhost:8000/api";

export default function ShowProducto() {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        getAllProductos();
    }, []);

    const getAllProductos = async () => {
        const response = await axios.get(`${endPoint}/productos`);

        setProducts(response.data);
    };

    const deleteProducto = async (id) => {
        await axios.delete(`${endPoint}/producto/${id}`);
        getAllFacturas();
    };

    return (
        <div className="table-responsive">
            <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                <Link
                    to="/create"
                    // className="btn btn-success btn-lg mt-2 mb-2 text-white"
                ><button className="btn btn-success"> Crear</button>
                   
                </Link>
            </div>
            <div className="dataTable-container">
                <table className="table text-center">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>NOMBRE</th>
                            <th>PRECIO</th>
                            <th>LOTE</th>
                            <th>VENCIMIENTO</th>
                            <th>ESTADO</th>
                            <th>ACCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((producto) => (
                            <tr key={producto.id_productos}>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.lote}</td>
                                <td>{producto.vencimiento}</td>
                                <td>{producto.estado}</td>
                                <td className="d-flex justify-content-center">
                                    <Link
                                    ><Icon.Eye/>
                                    </Link>
                                    <Link
                                        to={`/edit/${producto.id}`}
                                    ><Icon.PencilSquare/>
                                    </Link>
                                    <Link onClick={() =>
                                        deleteProducto(producto.id)
                                    }
                                    ><Icon.Trash />
                                    </Link>
                                        
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
