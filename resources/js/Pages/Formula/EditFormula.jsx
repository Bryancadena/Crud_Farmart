import axios from "axios"
import React,{useState,useEffect} from "react"
import { Button, Form, Input,DatePicker,Select,Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import SelecProducto from "@/Components/SelectProductos"

const endPoint = "http://localhost:8000/api";

export default function EditFormula({ id }) {
    const [formula, setFormula] = useState({});

    const handleChange = (e) => {
        // Actualizar el estado con los cambios del input
        const { name, value } = e.target;
        setFormula((prevFormula) => ({
          ...prevFormula,
          [name]: value,
        }));
      };

    useEffect(() => {
        getEditFormula(id);
    }, []);

    const getEditFormula = async (id) => {
        // const response = await axios.get(`${endPoint}/formula/${id}`);
        // setFormula(response.data);
        try {
            const response = await axios.get(`${endPoint}/formula/${id}`);
            if (Array.isArray(response.data)) {
                setFormula(response.data[0]);
            } else {
                console.error('La respuesta no contiene un arreglo válido.');
            }
        } catch (error) {
            console.error('Error al obtener los datos de la fórmula:', error);
        }
    };

    const onFinish = async (values) => {
        console.log(values);
              
            const response = await axios.put(`${endPoint}/formula/${id}`,values).then(function (response1) {
                console.log(response1);
    
            if (response1.ok) {
              console.log('Datos del formulario enviados al servidor con éxito.');
            } else {
              console.error('Error al enviar los datos del formulario al servidor.');
            }
        });
        
    }
    
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
     const keys= Object.keys(formula);
    return (
        <Form 
        {...layout}
        // name="nest-messages"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }} 
        // validateMessages={validateMessages} 
    >
        <Form.Item
            name={keys[1]}
            label="Identificacion"
            rules={[
                {
                    required: true,
                },
            ]} 
            initialValue={formula.identificacion}
        >
            <Input 
            //  value={formula.identificacion}
            onChange={handleChange}
          className="formula"/>
        </Form.Item>
        <Form.Item name={keys[2]} label="Nombre Cliente"  initialValue={formula.nombres}>
            <Input type="text"/>
        </Form.Item>
        <Form.Item name={keys[4]} label="Eps" initialValue={formula.eps_cliente}>
            <Input type="text"/>
        </Form.Item>
        <Form.Item name={keys[5]} label="Fecha Actual" initialValue={formula.created_at}>
        <Input type="text"/>
        </Form.Item>
        <Form.Item
            name={keys[6]}
            label="Tipo Facturacion"
            rules={[{ required: true }]} 
        >
            <Select value={formula.fk_tipo_facturacion}
                placeholder="Seleccione Tipo Facturacion"
                //   onChange={onGenderChange}
                allowClear
            >
                <Select.Option value="1">EVENTO</Select.Option>
                <Select.Option value="2">CAPITACION</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item name={keys[8]} label="Observacion" initialValue={formula.observacion} >
            <Input.TextArea />
        </Form.Item>
        <Form.Item name={keys[9]} label="Usuario" initialValue={formula.name}>
            <Input type="text" disabled/>
        </Form.Item>
        {/* <Form.Item name={["user", "productos"]} label="Productos">
            <Form.List name="productos">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space
                                key={key}
                                style={{
                                    display: "flex",
                                    marginBottom: 8,
                                }}
                                align="baseline"
                            >
                                <Form.Item
                                    {...restField}
                                    name={[name, "producto"]}
                                >

                                    <SelecProducto  placeholder="Producto"  allowClear/>
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "cantidad"]}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Missing first name",
                                        },
                                    ]}
                                >
                                    <Tooltip title="cantidad">
                                    <Input placeholder="Cantidad" />
                                    </Tooltip>
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "laslotet"]}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Missing lote",
                                        },
                                    ]}
                                >
                                    <Tooltip title="Lote">
                                    <Input placeholder="Lote" />
                                    </Tooltip>
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "vencimiento"]}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Missing vencimiento",
                                        },
                                    ]}
                                >
                                    <Tooltip title="vencimiento">
                                    <Input placeholder="vencimiento" />
                                    </Tooltip>
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "precio"]}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Missing precio",
                                        },
                                    ]}
                                >
                                    <Tooltip title="precio">
                                    <Input placeholder="Precio" />
                                    </Tooltip>
                                </Form.Item>
                                <MinusCircleOutlined
                                    onClick={() => remove(name)}
                                />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add field
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form.Item> */}
        <Form.Item
            wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
            }}
        >
            <Button type="primary" htmlType="submit" style={{backgroundColor:"#1677ff"}}>
                Enviar
            </Button>
        </Form.Item>
    </Form>
    )

}
