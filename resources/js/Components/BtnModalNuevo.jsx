import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio,InputNumber  } from 'antd';
import * as Icon from '@ant-design/icons';
import FormNew from '@/Components/FormNueva'


const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Crear Nueva Formula"
      okText="Create"
      // cancelText="Cancel"
      // onCancel={onCancel}
      // onOk={() => {
      //   form
      //     .validateFields()
      //     .then((values) => {
      //       form.resetFields();
      //       onCreate(values);
      //     })
      //     .catch((info) => {
      //       console.log('Validate Failed:', info);
      //     });
      // }}
    >
      <FormNew />
    </Modal>
  );
};
const App = () => {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  const Style = {
    width: "fit-content",
    placeSelf:"flex-end",
    backgroundColor: "#1677ff",
};
  return (
    <div>
      <Button style={Style}
        type="primary" icon={<Icon.PlusOutlined />}
        onClick={() => {
          setOpen(true);
        }}
      >
        Nueva Factura
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
export default App;