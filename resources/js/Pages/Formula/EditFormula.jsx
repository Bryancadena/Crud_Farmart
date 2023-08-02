import axios from "axios"
import React,{useState,useEffect} from "react"
import { Button, Form, Input,DatePicker,Select,Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

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
        
                setFormula(response.data);
            } else {
                console.error('La respuesta no contiene un arreglo válido.');
            }
        } catch (error) {
            console.error('Error al obtener los datos de la fórmula:', error);
        }
    };

    const onFinish = async (values) => {
        console.log(values);
              
            const response = await axios.put(`${endPoint}/formulas/${id}`,values).then(function (response1) {
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
      console.log(formula);
      const data = formula && formula.map((item, index) => ({
        ...item,
        item: index.id,
        item: index.fk_cliente,
        item: index.fk_tipo_facturacion,
        item: index.observacion,
        item: index.id_usuario,
    }));

    return (
        <Form 
        {...layout}
        // name="nest-messages"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }} 
        // validateMessages={validateMessages} 
        // auth={auth}
    >
        <Form.Item
            name={["user", "identificacion"]}
            label="Identificacion"
            rules={[
                {
                    required: true,
                },
            ]} 
            initialValue={[formula.identificacion]}
           
        >
            <Input  value={formula.identificacion} onChange={handleChange}
          className="formula"/>
        </Form.Item>
        <Form.Item name={["user", "nombres"]} label="Nombre Cliente" initialValue={formula.id}>
            <Input type="text"/>
        </Form.Item>
        <Form.Item name={["user", "eps_cliente"]} label="Eps">
            <Input type="text"/>
        </Form.Item>
        <Form.Item name={["user", "created_at"]} label="Fecha Actual">
            <DatePicker />
        </Form.Item>
        <Form.Item
            name="fk_tipo_facturacion"
            label="Tipo Facturacion"
            rules={[{ required: true }]} 
        >
            <Select
                placeholder="Seleccione Tipo Facturacion"
                //   onChange={onGenderChange}
                allowClear
            >
                <Select.Option value="1">EVENTO</Select.Option>
                <Select.Option value="2">CAPITACION</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item name={["user", "observacion"]} label="Observacion" >
            <Input.TextArea />
        </Form.Item>
        <Form.Item name={["user", "name"]} label="Usuario" >
            <Input type="text" disabled/>
        </Form.Item>
        <Form.Item name={["user", "productos"]} label="Productos">
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
                                    <Select
                                        placeholder="Producto"
                                        //   onChange={onGenderChange}
                                        allowClear
                                    >
                                        <Select.Option value="1">
                                            EVENTO
                                        </Select.Option>
                                        <Select.Option value="2">
                                            CAPITACION
                                        </Select.Option>
                                    </Select>
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
                                    <Input placeholder="Cantidad" />
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
                                    <Input placeholder="Lote" />
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
                                    <Input placeholder="vencimiento" />
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
                                    <Input placeholder="Precio" />
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
        </Form.Item>
        <Form.Item
            wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
            }}
        >
            <Button type="primary" htmlType="submit">
                Enviar
            </Button>
        </Form.Item>
    </Form>
    )

}
