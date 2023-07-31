import axios from "axios"
import React,{useState,useEffect} from "react"
import { Button, Form, Input, Modal, Radio,Tooltip,Table } from 'antd';

const endPoint = "http://localhost:8000/api";

export default function EditFormula({ auth }) {
    const [formula, setFormula] = useState([]);
    useEffect(() => {
        getEditFormula();
    }, []);

    const getEditFormula = async () => {
        const response = await axios.get(`${endPoint}/formulas/{id}`);

        setFormula(response.data);
    };

    console.log(formula);

    const data = formula.map((item, index) => ({
        ...item,
        item: index.id,
        item: index.fk_cliente,
        item: index.fk_tipo_facturacion,
        item: index.observacion,
        item: index.id_usuario,
    }));
    

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
    return (
        <Form 
        {...layout}
        // name="nest-messages"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }}
        // validateMessages={validateMessages} 
        auth={auth}
    >
        <Form.Item
            name={["user", "identificacion"]}
            label="Identificacion"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input type="number" />
        </Form.Item>
        <Form.Item name={["user", "name"]} label="Nombre Cliente">
            <Input />
        </Form.Item>
        <Form.Item name={["user", "Eps"]} label="Eps">
            <Input />
        </Form.Item>
        <Form.Item name={["user", "fecha"]} label="Fecha Actual">
            <DatePicker />
        </Form.Item>
        <Form.Item
            name="TipoFact"
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
        <Form.Item name={["user", "observacion"]} label="Observacion">
            <Input.TextArea />
        </Form.Item>
        <Form.Item name={["user", "usuario"]} label="Usuario">
            <Input type="text" value={auth.user.user} disabled/>
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
                Submit
            </Button>
        </Form.Item>
    </Form>
    )

}

// export default EditFormula;