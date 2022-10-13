import './App.css';
import {Form} from "./components/Form";
import {Form as ClassForm} from "./class_components/Form"
import {Count as ClassCount} from "./class_components/Count";
import {Count} from "./components/Count";
import {Child} from "./components/Child";
import {useState} from "react";


export const App = () => {
    const [name, setName]= useState('geek')
    const [count, setCount]= useState(0)

    const handleChangeName = (event) => {
      setName(event.target.value)
    }
    return (
        <div className="App">
            <Form/>
            <hr/>
            <ClassCount count={10}/>
            <ClassForm/>
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


