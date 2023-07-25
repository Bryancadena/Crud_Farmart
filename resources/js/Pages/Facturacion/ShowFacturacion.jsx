import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from '@inertiajs/react';
import * as bootstrap from 'bootstrap'


const endPoint='http://localhost:8000/api';

export default function ShowFactura() {

    const [product,setProducts]= useState([]);
    useEffect( () => {
        getAllProductos()
    }, [])

    const getAllProductos=async () =>{
       const response= await axios.get(`${endPoint}/productos`)

       setProducts(response.data)
      
    }

    const deleteProducto= async (id) =>{
       await axios.delete(`${endPoint}/producto/${id}`)
       getAllFacturas()
        
    }

    return (
        <div className="table-responsive-sm pt-5">
            <div className="d-grid gap-2 justify-content-end">
                <Link to ="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">Crear</Link>
            </div>
            <table className="table">
                <thead className="table-dark">
                    <tr >
                        <th scope="col">NOMBRE</th>
                        <th scope="col">PRECIO</th>
                        <th scope="col">LOTE</th>
                        <th scope="col">VENCIMIENTO</th>
                        <th scope="col">ESTADO</th>
                        <th scope="col">ACCION</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((producto)=> (
                        <tr key={producto.id_productos}>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.lote}</td>
                            <td>{producto.vencimiento}</td>
                            <td>{producto.estado}</td>
                            <td>
                                <Link to={`/edit/${producto.id}`} className="btn btn-warning">Editar</Link>
                                <button onClick={()=>deleteProducto(producto.id)} className="btn btn-danger">Eliminar</button>
                            </td>

                        </tr>
                    )
                    )}
               </tbody>
            </table>
        </div>
    );
}
