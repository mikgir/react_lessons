import './App.css';
import './index.css';
import {Form as ClassForm} from "./class_components/Form"
import {Count as ClassCount} from "./class_components/Count";
import {Form} from "./components/Form/Form";
import {Count} from "./components/Count";
import {Child} from "./components/Child";
import {useState} from "react";
import {Message} from "./components/Message/Message";


export const App = () => {
    const [name, setName]= useState('geek')
    const [count, setCount]= useState(0)
    const [text, setText]=useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, minima.')

    const handleChangeName = (event) => {
      setName(event.target.value)
    }
    return (
        <div className="App">
            <h2>HW lesson 1</h2>
            <Message name={name} text={text}/>
            <hr/>
            <h2 style={{backgroundColor:'aliceblue'}}>Class Components</h2>
            <ClassCount count={10}/>
            <ClassForm/>
            <hr/>
            <h2>Func Components</h2>
            <Form/>
            <hr/>
            <Count name={'geek'}/>
            <hr/>
            <h3>Parent component</h3>
            <p>{count}</p>
            <input onChange={handleChangeName}/>
            <h3>Child component</h3>
            <Child name={name} handleChangeCount={setCount}/>
        </div>
    );
}


