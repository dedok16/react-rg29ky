import React from 'react';
import './style.css';

export default function App() {
  const num1 = 3;
	const num2 = 2;
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :) ???</p>	
      <div>
        result: {num1 ** num2}
      </div>
    </div>
  );
}
