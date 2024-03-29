import React, { useState, useEffect, useContext } from "react";
import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
    DatePicker,
    Space,
    Tooltip,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import SelecProducto from "@/Components/SelectProductos";

const endPoint = "http://localhost:8000/api";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

const App = ({ auth }) => {
    const [productoSeleccionado, setProductoSeleccionado] = useState("");

    const handleProductoSeleccionado = (value) => {
        setProductoSeleccionado(value);
    };

    const onFinish = async (values) => {
        values.productos[0].producto = productoSeleccionado;

        console.log(values);

        const response = await axios
            .post(`${endPoint}/formulas`, values)
            .then(function (response1) {
                console.log(response1);

                if (response1.ok) {
                    console.log(
                        "Datos del formulario enviados al servidor con éxito."
                    );
                } else {
                    console.error(
                        "Error al enviar los datos del formulario al servidor."
                    );
                }
            });
    };

    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
            validateMessages={validateMessages}
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
            <Form.Item
                name={["user", "usuario"]}
                label="Usuario"
                initialValue={[auth.user.id] + " - " + [auth.user.name]}
            >
                <Input type="text" disabled />
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
                                        value={productoSeleccionado}
                                    >
                                        <SelecProducto
                                            onProductoSeleccionado={
                                                handleProductoSeleccionado
                                            }
                                        />
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
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                }}
            >
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{ backgroundColor: "#1677ff" }}
                >
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    );
};
export default App;
