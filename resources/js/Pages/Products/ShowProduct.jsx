import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Table} from 'antd';
import { Head } from '@inertiajs/react';


const endPoint = "http://localhost:8000/api";

export default function ShowProducto({auth}) {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        getAllProductos();
    }, []);

    const getAllProductos = async () => {
        const response = await axios.get(`${endPoint}/productos`);

        setProducts(response.data);
    };

    const columns = [
        {
            title: "Producto",
            dataIndex: "nombre",
            key: "nombre",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Precio",
            dataIndex: "precio",
            key: "precio",
        },
        {
            title: "Lote",
            dataIndex: "lote",
            key: "lote",
        },
        {
            title: "Vencimiento",
            dataIndex: "vencimiento",
            key: "vencimiento",
        },
        {
            title: "Estado",
            dataIndex: "estado",
            key: "estado",
        },

    ];

    const data = product.map((item, index) => ({
        ...item,
        item: index.id_productos,
        item: index.nombre,
        item: index.precio,
        item: index.lote,
        item: index.vencimiento,
        item: index.estado,
    }));
    const Style = {
        width: "fit-content",
        placeSelf:"flex-end",
        backgroundColor: "#1677ff",
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h6 className="font-semibold text-xl text-gray-800 leading-tight">
                    Productos
                </h6>
            }
        >
            <Head title="Productos"/>

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
