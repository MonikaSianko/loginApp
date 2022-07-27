import React from 'react';
import './App.css';
import { FormLogin } from './components/FormLogin';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className='Container'>
      <nav>Hello Candidate!</nav>
      <div className='Form-Wrapper'>
        <FormLogin />
      </div>
    </div>
  );
};

export default App;
