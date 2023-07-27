import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Table } from 'antd';
import { Head } from '@inertiajs/react';


const endPoint = "http://localhost:8000/api";

export default function ShowUsers({auth}) {
    const [cliente, setClientes] = useState([]);
    useEffect(() => {
        getAllClientes();
    }, []);

    const getAllClientes = async () => {
        const response = await axios.get(`${endPoint}/clientes`);

        setClientes(response.data);
    };

    const columns = [
        {
            title: "Identificación",
            dataIndex: "identificacion",
            key: "identificacion",
        },
        {
            title: "Tipo de Documento",
            dataIndex: "tipo_identificacion",
            key: "tipo_identificacion",
        },
        {
            title: "Nombre",
            dataIndex: "nombres" ,
            key: "nombres",
        },
        {
            title: "Apellidos",
            dataIndex:"apellidos" ,
            key: "apellidos",
        },
        {
            title: "EPS",
            dataIndex: "eps_cliente",
            key: "eps_cliente",
        },
        {
            title: "Numero de Contacto",
            dataIndex: "contacto",
            key: "contacto",
        },
        {
            title: "Estado",
            dataIndex: "estado",
            key: "estado",
        },
    ];
console.log(cliente);
    const data = cliente.map((item, index) => ({
        ...item,
        item: index.id_clientes,
        item: index.identificacion,
        item: index.tipo_identificacion,
        item: index.nombres,
        item: index.apellidos,
        item: index.eps_cliente,
        item: index.contacto,
        item: index.estado,
        item: index.created_at,
    }));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h6 className="font-semibold text-xl text-gray-800 leading-tight">
                    Clientes
                </h6>
            }
        >
            <Head title="Clientes"/>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body px-0 pb-2">
                            <Table
                                columns={columns}
                                dataSource={data}
                                rowKey="id_clientes"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
