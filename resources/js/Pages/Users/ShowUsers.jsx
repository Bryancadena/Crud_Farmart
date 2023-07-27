import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Table } from 'antd';
import { Head } from '@inertiajs/react';


const endPoint = "http://localhost:8000/api";

export default function ShowUsers({auth}) {
    const [usuario, setUsers] = useState([]);
    useEffect(() => {
        getAllUsuarios();
    }, []);

    const getAllUsuarios = async () => {
        const response = await axios.get(`${endPoint}/usuarios`);

        setUsers(response.data);
    };

    const columns = [
        {
            title: "Nombre de Usario",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Fecha de Registro",
            dataIndex: "created_at",
            key: "created_at",
        },
    ];
console.log(usuario);
    const data = usuario.map((item, index) => ({
        ...item,
        item: index.id,
        item: index.name,
        item: index.email,
        item: index.created_at,
    }));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h6 className="font-semibold text-xl text-gray-800 leading-tight">
                    Usuarios Registrados
                </h6>
            }
        >
            <Head title="Usuarios"/>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body px-0 pb-2">
                            <Table
                                columns={columns}
                                dataSource={data}
                                rowKey="id"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
