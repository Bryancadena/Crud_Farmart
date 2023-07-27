import React, {useState, useEffect} from 'react';
import { Button, Form, Input, InputNumber,Select,DatePicker  } from 'antd';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const App = () => (
    
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'identificacion']}
      label="Identificacion"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'name']}
      label="Nombre Cliente"
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'Eps']}
      label="Eps"
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'fecha']}
      label="Fecha Actual"><DatePicker />
    </Form.Item>
    <Form.Item name="TipoFact" label="Tipo Facturacion" rules={[{ required: true }]}>
        <Select
          placeholder="Seleccione Tipo Facturacion"
        //   onChange={onGenderChange}
          allowClear
        >
          <Select.Option value="1">EVENTO</Select.Option>
          <Select.Option value="2">CAPITACION</Select.Option>
        </Select>
      </Form.Item>
    <Form.Item name={['user', 'observacion']} label="Observacion">
      <Input.TextArea />
    </Form.Item>
    <Form.Item name={['user', 'usuario']} label="Usuario">
      <Input />
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
);
export default App;