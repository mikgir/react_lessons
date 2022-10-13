import React from "react";

export class Form extends React.Component {
    state = {
        count: 1,
        name: 'geek',
        arr: ['apple', 'melon', 'lemon']
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.name)
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            {this.state.arr.map((item, index)=>{
                return <div key={index}>{item}</div>
            })}
            <hr/>
            <input type={"text"} onChange={this.handleChangeName}/>
            <button>send form</button>
        </form>
    }
}