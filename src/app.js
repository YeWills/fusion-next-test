import '@alifd/next/dist/next.css';
// import '@alifd/theme-3892/dist/next.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';
import Button from './button';
import Table from './table';
import Icon from './icon';
import MenuButton from './menu-button';

const { Item } = MenuButton;

const dataSource = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
        result.push({
            title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
            id: 100306660940 + i,
            time: 2000 + i
        });
    }
    return result;
};
const render = (value, index, record) => {
    return <a href="javascript:;">Remove({record.id})</a>;
};
const onChange = (...args) => {
    console.log(args);
};
const selectItem = id => {
    console.log(id);
};



const App = ()=>{
  const [ show, setShow] = useState(false)
  return <div>
    {
      show ? <Button type="normal">Normal</Button>
      :'999'
    }
  <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
  <Button type="secondary">Secondary</Button>
  <br /><br />
  <Button type="normal" onClick={t=> setShow(!show)} text>Normal</Button> &nbsp;&nbsp;
  <Button type="primary" text>Primary</Button> &nbsp;&nbsp;
  <Button type="secondary" text>Secondary</Button>
  <br /><br />
  <Button type="normal" warning>Normal</Button> &nbsp;&nbsp;
  <Button type="primary" warning>Primary</Button> &nbsp;&nbsp;
</div>
}

ReactDOM.render(<Table
  dataSource={dataSource()}
  rowSelection={{
      onChange: onChange,
      getProps: (record, index) => {
          console.log(record, index);

          return  index === 2 ? {
              disabled: true,
              children: index
          } : {
              children: index
          };
      },
      columnProps: () => {
          return {
              lock: 'left',
              width: 90,
              align: 'center'
          };
      },
      titleProps: () => {
          return {
              // remove the select all button
              // style: {display: 'none'},
              disabled: true,
              children:
              <MenuButton text onItemClick={selectItem} menuProps={{
                  isSelectIconRight: true
              }} >
                  <Item key="odd">odd</Item>
                  <Item key="even">even</Item>
              </MenuButton>
          };
      }
  }}>
  <Table.Column title="Id" dataIndex="id" width={200}/>
  <Table.Column title="Title" dataIndex="title.name" width={200}/>
  <Table.Column title="Time" dataIndex="time" width={200}/>
  <Table.Column cell={render} width={200}/>
</Table>, window.document.getElementById('root'));
