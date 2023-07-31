import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BtnModalNuevo from "@/Components/BtnModalNuevo";
import BtnEdit from "@/Components/BtnEditarFormula"
import * as Icon from "@ant-design/icons";
import BtnModalDetalle from "@/Components/BtnModalDetalle";
import { Button, Tooltip, Space, Table, Tag,Popconfirm } from "antd";
import { Head, Link } from "@inertiajs/react";

const endPoint = "http://localhost:8000/api";

export default function ShowFormula({ auth }) {
    const [formula, setFormula] = useState([]);
    useEffect(() => {
        getAllFormula();
    }, []);

    const getAllFormula = async () => {
        const response = await axios.get(`${endPoint}/formulas`);

        setFormula(response.data);
    };

    const deleteFormula = async (id) => {
        await axios.delete(`${endPoint}/formula/${id}`);
        getAllFormula();
    };

    const columns = [
        {
            title: "Identificacion",
            dataIndex: "identificacion",
            key: "identificacion",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Nombres",
            dataIndex: "nombres",
            key: "nombres",
        },
        {
            title: "E.P.S",
            dataIndex: "eps_cliente",
            key: "eps_cliente",
        },
        {
            title: "Tipo Facturacion",
            dataIndex: "descripcion",
            key: "descripcion",
        },
        {
            title: "Observación",
            dataIndex: "observacion",
            key: "observacion",
        },
        {
            title: "Elaboró",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Acción",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <a>
                        <BtnModalDetalle id={record.id}
                            shape="circle"
                            icon={<Icon.EyeOutlined />}
                        />
                    </a>
                    <a>
                            <BtnEdit
                                shape="circle"
                                icon={<Icon.EditOutlined />}
                            />
                    </a>
                    <a>
                        <Tooltip title="Eliminar">
                            <Button
                                shape="circle"
                                onClick={() => deleteFormula(record.id)}
                                icon={<Icon.DeleteOutlined />}
                                danger
                            />
                        </Tooltip>
                    </a>
                </Space>
            ),
        },
    ];

    const data = formula.map((item, index) => ({
        ...item,
        item: index.id,
        item: index.fk_cliente,
        item: index.fk_tipo_facturacion,
        item: index.observacion,
        item: index.id_usuario,
    }));
    

    const Style = {
        width: "fit-content",
        placeSelf: "flex-end",
        backgroundColor: "#1677ff",
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h6 className="font-semibold text-xl text-gray-800 leading-tight">
                    Facturacion
                </h6>
            }
        >
            <Head title="Facturación" />

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <BtnModalNuevo icon={<Icon.PlusOutlined />} auth={auth}/>
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
