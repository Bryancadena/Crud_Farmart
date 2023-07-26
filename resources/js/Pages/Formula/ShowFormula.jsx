import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import * as Icon from '@ant-design/icons';
import { Button, Tooltip, Space,Table, Tag, } from 'antd';
import { Head,Link } from '@inertiajs/react';



const endPoint = "http://localhost:8000/api";

const columns = [
  {
    title: 'Identificacion',
    dataIndex: 'identificacion',
    key: 'identificacion',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nombres',
    dataIndex: 'nombres',
    key: 'nombres',
  },
  {
    title: 'E.P.S',
    dataIndex: 'eps_cliente',
    key: 'eps_cliente',
  },
  {
    title: 'Tipo Facturacion',
    dataIndex: 'descripcion',
    key: 'descripcion',
  },
  {
    title: 'Observación',
    dataIndex: 'observacion',
    key: 'observacion',
  },
  {
    title: 'Elaboró',
    dataIndex: 'name',
    key: 'name',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a><Tooltip title="Detalle">
        <Button shape="circle" icon={<Icon.EyeOutlined/>} />
        </Tooltip>
        </a>
        <a><Tooltip title="Editar">
        <Button shape="circle" icon={<Icon.EditOutlined/>} />
        </Tooltip>
        </a>
        <a><Tooltip title="Eliminar">
        <Button shape="circle" 
        onClick={() =>
          deleteFactura(producto.id)
        } icon={<Icon.DeleteOutlined/>} danger/>
        </Tooltip>
        </a>
      </Space>
    ),
  },
];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

export default function ShowFormula({auth}) {

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

    
    const data = formula.map((item,index) => ({
      ...item,
    item:index.id,
    item:index.fk_cliente,
    item:index.fk_tipo_facturacion,
    item:index.observacion,
    item:index.id_usuario
    }));

    const Style = {
      width: "fit-content",
      placeSelf:"flex-end",
      backgroundColor: "#1677ff",
  };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h6 className="font-semibold text-xl text-gray-800 leading-tight">Facturacion</h6>}
        >
            <Head title="Facturación" />

            <div className="row">
                <div className="col-12">
                    <div className="card">
                    <Button type="primary" icon={<Icon.PlusOutlined />} style={Style}>
                      Nueva
                    </Button>
                   <div className='card-body px-0 pb-2'>
                        <Table columns={columns} dataSource={data} rowKey="id"/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}