import { useState } from 'react';
import './App.css';

const firstWork = () =>{
  console.log('처음작업');
  return['홍길동','삼길동']
}
cc
function App() {
  const [time, setTime] = useState(1);
  const [names, setNames] = useState(()=>{
    return firstWork();
  });
  const handleTime = () =>{
    let newTime;
    if(time>=12){
      newTime = 1;
    }else {
      newTime = time+1;
    }
    setTime(newTime);
  }
  
  const [input, setInput] = useState('');
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  const handleUpload = () => {
    console.log('두번쨰 작업');
    setNames((prevSate)=>{
      return[input, ...prevSate];
    });
  }

  return (
    <div>
      <span>현재 시각 : {time}시</span><br/>
      <button onClick = {handleTime}>Update</button>
      <br/><br/>
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>upload</button>
      {names.map((name,idx)=>{
        return <p key={idx}>{name}</p>
      })}
    </div>
  );
}

export default App;
