import './App.css';
import './index.css';
import {useRef, useState} from "react";
import {MessageList} from "./components/Message/MessageList";
// import {Form as ClassForm} from "./class_components/Form"
// import {Count as ClassCount} from "./class_components/Count";
// import {Form} from "./components/Form/Form";
// import {Count} from "./components/Count";
// import {Child} from "./components/Child";


export const App = () => {
    const [message, setMessage] = useState(
        {id: 0, name: '', text: ''}
    )
    const [messageList, setMessageList] = useState([])
    const sender = useRef()
    const senderText = useRef()

    const handleMessage = () => {
        setMessage({id: Date.now(), name: sender.current.value, text: senderText.current.value})
        console.log(message)
    }
    const handleMessageList = () => {
        setMessageList(messageList.push(message))
        sender.current.value = ''
        senderText.current.value = ''
        console.log(messageList)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className="App">
            <h2>HW lesson 2</h2>
            <MessageList messageList={messageList}/>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input type={"text"} ref={sender} onChange={handleMessage}/>
                <input type={"text"} ref={senderText} onChange={handleMessage}/>
                <button onClick={handleMessageList}>send</button>

            </form>


            {/*<hr/>*/}
            {/*<h2 style={{backgroundColor:'aliceblue'}}>Class Components</h2>*/}
            {/*<ClassCount count={10}/>*/}
            {/*<ClassForm/>*/}
            {/*<hr/>*/}
            {/*<h2>Func Components</h2>*/}
            {/*<Form/>*/}
            {/*<hr/>*/}
            {/*<Count name={'geek'}/>*/}
            {/*<hr/>*/}
            {/*<h3>Parent component</h3>*/}
            {/*<p>{count}</p>*/}
            {/*<input onChange={handleChangeName}/>*/}
            {/*<h3>Child component</h3>*/}
            {/*<Child name={name} handleChangeCount={setCount}/>*/}
        </div>
    );
}


