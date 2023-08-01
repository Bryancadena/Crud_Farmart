import axios from "axios"
import React,{useState,useEffect} from "react"
import { Button, Form, Input,DatePicker,Select,Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const endPoint = "http://localhost:8000/api";

export default function EditFormula({ id }) {
    const [formula, setFormula] = useState([]);
    useEffect(() => {
        getEditFormula(id);
    }, []);

    const getEditFormula = async (id) => {
        const response = await axios.get(`${endPoint}/formula/${id}`);
        setFormula(response.data);
    };

    // const data = formula.map((item, index) => ({
    //     ...item,
    //     item: index.id,
    //     item: index.identificacion,
    //     item: index.nombres + ' ' + index.apellidos, 
    //     item: index.eps_cliente,
    //     item: index.created_at,
    //     item: index.fk_tipo_facturacion,
    //     item: index.observacion,
    //     item: index.name,

        
    // }));
    console.log(formula);

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

    // const handleChange=e=>{
    //     const {name, value}=e.target;
    //     setFormula({...formula,
    //     [name]: value});
    //     console.log(formula);
    //   }
    
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
        >
            <Input type="number"  value={formula && formula.identificacion} />
        </Form.Item>
        <Form.Item name={["user", "name"]} label="Nombre Cliente">
            <Input  initialValues={[formula.nombres]}/>
        </Form.Item>
        <Form.Item name={["user", "Eps"]} label="Eps">
            <Input  initialvalue="valor inicial"/>
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
