import './App.css';
import ParentContainer from './components/ParentContainer';
import Display from './components/Display';
import Button from './components/Button';
import React,{ useState } from 'react';


export default function App() {
  const [data,setData]=useState('');
  function handleClick(val){
    if(val==='='){
      setData(eval(data));
    }else if(val==='C'){
      setData("");
    }else if(val==='X'){
      let res = data+'';
      setData(res.slice(0,-1));
    }else{
      setData(data+val);
    }
  }
  return (
    <ParentContainer>
      <Display data={data}></Display>
      <Button btnClick={handleClick}></Button>
    </ParentContainer>
  );
}
