import React,{useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space,Select } from 'antd';




// const onFinish = (values) => {
//   console.log('Received values of form:', values);
// };
const App = () => (
  // <Form.Item
  //   name="dynamic_form_nest_item"
  //   onFinish={onFinish}
  //   style={{
  //     maxWidth: 600,
  //   }}
  //   autoComplete="off"
  // >
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
        <Form.Item 
        {...restField}
        name={[name,"producto"]} >
        <Select
          placeholder="Producto"
        //   onChange={onGenderChange}
          allowClear
        >
          <Select.Option value="1">EVENTO</Select.Option>
          <Select.Option value="2">CAPITACION</Select.Option>
        </Select>
            </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'cantidad']}
                rules={[
                  {
                    required: true,
                    message: 'Missing first name',
                  },
                ]}
              >
                <Input placeholder="Cantidad" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'laslotet']}
                rules={[
                  {
                    required: true,
                    message: 'Missing lote',
                  },
                ]}
              >
                <Input placeholder="Lote" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'vencimiento']}
                rules={[
                  {
                    required: true,
                    message: 'Missing vencimiento',
                  },
                ]}
              >
                <Input placeholder="vencimiento" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'precio']}
                rules={[
                  {
                    required: true,
                    message: 'Missing precio',
                  },
                ]}
              >
                <Input placeholder="Precio" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  // </Form.Item>
);
export default App;