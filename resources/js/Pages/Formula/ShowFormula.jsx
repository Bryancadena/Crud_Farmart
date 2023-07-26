import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import * as Icon from '@ant-design/icons';
import { Button, Tooltip, Space,Table, Tag, } from 'antd';
import { Head,Link } from '@inertiajs/react';



const endPoint = "http://localhost:8000/api";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
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

export default function ShowFacturacion({ auth }) {

    const [factura, setFacturas] = useState([]);
    useEffect(() => {
        getAllFacturas();
    }, []);

    const getAllFacturas = async () => {
        const response = await axios.get(`${endPoint}/formulas`);

        setFacturas(response.data);
    };

    const deleteFactura = async (id) => {
        await axios.delete(`${endPoint}/formula/${id}`);
        getAllFacturas();
    };
console.log(factura);
    const data = factura.map((item,index) => ({
      ...item,
    key:index.id,
    name:index.fk_cliente,
    age: index.fk_tipo_facturacion,
    address:index.observacion,
    tags:index.id_usuario, // Supongamos que la propiedad "id" es única para cada elemento
    }));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h6 className="font-semibold text-xl text-gray-800 leading-tight">Facturacion</h6>}
        >
            <Head title="Dashboard" />

            <div className="row">
                <div className="col-12">
                    <div className="card">
                   <div className='card-body px-0 pb-2'>
                        <Table columns={columns} dataSource={data} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


// const App = () => <Table columns={columns} dataSource={data} />;
