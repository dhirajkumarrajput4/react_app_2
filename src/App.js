import './App.css';
import React, { useEffect, useState } from 'react';
import MyComponant from './componants/MyCompoant';
import Timer from './componants/Timer';

function App() {
  const [isVisible, setVisible] = useState(true);

  return (
    <div className='App'>
      {isVisible ? <MyComponant /> : <></>}
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
      <Timer />
    </div>
  );
}

export default App;
