import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio,Tooltip,Table } from 'antd';
import ShowFormulaDetalle from '@/Pages/Formula/ShowDetalle';
import * as Icon from '@ant-design/icons';

const CollectionCreateForm = ({ open, onCreate, onCancel,id }) => {
  return (
    <Modal
      open={open}
      title="Detalle Formula"
    //   okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
 
    >
      <ShowFormulaDetalle id={id}/>
    </Modal>
  );
};
const App = (id) => {

  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values,id);
    setOpen(false);
  };
  return (
    <div><Tooltip title="Detalle">
      <Button shape="circle" icon={<Icon.EyeOutlined/>}
        onClick={() => {
          setOpen(true);
        }}/>
        </Tooltip>
      <CollectionCreateForm
        id={id.id}
        open={open}
        // onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
export default App;