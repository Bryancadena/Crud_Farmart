import React, { useEffect, useState } from "react";
import axios from "axios";

const endPoint = "http://localhost:8000/api";

export default function  ({id}) {
    const [detalle, setDetalle] = useState([]);
    useEffect(() => {
        getDetalle(id);
    }, []);

    const getDetalle = async (id) => {
        const response = await axios.get(`${endPoint}/detalle/${id}`);

        setDetalle(response.data);
    };

    const columns = [
        {
            title: "Numero Formula",
            dataIndex: "fk_id_formula",
            key: "fk_id_formula",
        },
        {
            title: "Producto",
            dataIndex: "fk_id_producto",
            key: "fk_id_producto",
        },
        {
            title: "Cantidad",
            dataIndex: "cantidad",
            key: "cantidad",
        },
        {
            title: "Valor",
            dataIndex: "valor",
            key: "valor",
        },
    ];

    const data = detalle.map((item, index) => ({
        ...item,
        item: index.id,
        item: index.fk_id_formula,
        item: index.fk_id_producto,
        item: index.cantidad,
        item: index.valor,
    }));

    return (
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
    );
}
