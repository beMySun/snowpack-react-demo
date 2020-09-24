import React from 'react';
import Card from 'antd/es/card';
import 'antd/es/card/style/css';
import { isString } from 'lodash-es';
import logo from './logo.png';
import styles from './App.module.css';

class Store {
  public title: string = '';
  public desc: string = '';
  constructor({ title, desc }: { title?: string; desc?: string }) {
    this.title = isString(title) ? title : 'Hello World!';
    this.desc = isString(desc) ? desc : '';
  }
}

const store = new Store({
  desc: 'snowpack 初尝试，学习和实践；',
});

export default () => {
  return (
    <Card hoverable style={{ textAlign: 'center', margin: 40 }}>
      <div className={styles.title}>{store.title}</div>
      <div className={styles.desc}>{store.desc}</div>
      <img className={styles.img} src={logo} />
    </Card>
  );
};
