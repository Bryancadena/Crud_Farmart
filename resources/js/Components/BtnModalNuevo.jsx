import React, { useState,createContext } from 'react';
import { Button, Form, Input, Modal, Radio,InputNumber  } from 'antd';
import * as Icon from '@ant-design/icons';
import FormNew from '@/Components/FormNueva'


const CollectionCreateForm = ({ open, onCreate, onCancel,auth}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open} 
      title="Crear Nueva Formula"
      footer={null}
      onCancel={onCancel}
    >
      <FormNew auth={auth}/>
    </Modal>
  );
};
const App = ({auth}) => {
console.log(auth);
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
      <Button style={Style}  auth={auth}
        type="primary" icon={<Icon.PlusOutlined />}
        onClick={() => {
          setOpen(true);
        }}
      >
        Nueva Factura
      </Button>
      <CollectionCreateForm
        open={open} auth={auth}
        footer={null}
        //  onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
export default App;