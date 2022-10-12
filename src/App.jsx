import './App.css';
import {Form} from "./components/Form";
import {Form as ClassForm} from "./class_components/Form"
import {Count} from "./class_components/Count";


export const App = () => {
    return (
        <div className="App">
            <Form/>
            <hr/>
            <Count count={10}/>
            <ClassForm/>
        </div>
    );
}


