import React from 'react';
import logo from './logo.png';
import './index.less';

const App = () => {
  React.useEffect(() => {
    console.log(import.meta);
  }, []);

  return (
    <div className="logo">
      <img src={logo} />
    </div>
  );
};

export default App;
