import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import axios from 'axios';

const endPoint = "http://localhost:8000/api";

const SelecProducto = ({onProductoSeleccionado}) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${endPoint}/productos`);
        setOptions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    onProductoSeleccionado(value);
  };

  return (
    <Select
      loading={loading}
      // defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={options.map((producto) => ({ value: producto.id_productos, label: producto.nombre }))}
    />
  );
};

export default SelecProducto;

