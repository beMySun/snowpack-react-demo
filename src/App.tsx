import React from 'react';
import logo from './logo.png';
import './index.less';

const App = () => {
  React.useEffect(() => {
    console.log(import.meta);
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: 40 }}>
      <img src={logo} />
    </div>
  );
};

export default App;
