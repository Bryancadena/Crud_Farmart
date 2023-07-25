import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from '@inertiajs/react';

const endPoint='http://localhost:8000/api';

export default function ShowFactura() {

    const [formulas,setFormulas]= useState([]);
    useEffect( () => {
        getAllFacturas()
    }, [])

    const getAllFacturas=async () =>{
       const response= await axios.get(`${endPoint}/formulas`)
       console.log(response);
       setFormulas(response.data)
       console.log(response.data);
    }

    const deleteFormula= async (id) =>{
       await axios.delete(`${endPoint}/formulas/${id}`)
       getAllFacturas()
        
    }

    return (
        <div>
            <div className="d-grid gap-2">
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
                    {formulas.map((formula)=> (
                        <tr key={formula.id}>
                            <td>{formula.nombre}</td>
                            <td>{formula.precio}</td>
                            <td>{formula.lote}</td>
                            <td>{formula.vencimiento}</td>
                            <td>{formula.estado}</td>
                            <td>
                                <Link to={`/edit/${formula.id}`} className="btn btn-warning">Editar</Link>
                                <button onClick={()=>deleteFormula(formula.id)} className="btn btn-danger">Eliminar</button>
                            </td>

                        </tr>
                    )
                    )}
               </tbody>
            </table>
        </div>
    );
}
