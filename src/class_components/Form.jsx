import React from "react";

export class Form extends React.Component {
    state = {
        count: 1,
        name: 'geek'
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
            <hr/>
            <input type={"text"} onChange={this.handleChangeName}/>
            <button>send form</button>
        </form>
    }
}