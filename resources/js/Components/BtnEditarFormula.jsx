import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio,Tooltip,Table } from 'antd';
import EditFormula from '@/Pages/Formula/EditFormula';
import * as Icon from '@ant-design/icons';

const CollectionCreateForm = ({ open, onCreate, onCancel,id }) => {
  return (
    <Modal
      open={open}
      title="Editar Formula"
    //   okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
 
    >
      <EditFormula id={id}/>
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
    <div><Tooltip title="Editar">
      <Button shape="circle" icon={<Icon.EditOutlined/>}
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