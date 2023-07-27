import React from 'react';
import { Tabs } from 'antd';
import TableInput from '@/Components/TableInput'
import FormInput from '@/Components/FormInput'

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Formula`,
    children: <FormInput/>,
  },
  {
    key: '2',
    label: `Detalle Productos`,
    children: <TableInput/>,
  },

];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;