import React from 'react';
import Card from 'antd/es/card';
import 'antd/es/card/style/css';
import logo from './logo.png';

export default () => {
  return (
    <Card hoverable style={{ textAlign: 'center', margin: 40 }}>
      <div> Hello Snowpack !!!~~</div>
      <img src={logo} />
    </Card>
  );
};
