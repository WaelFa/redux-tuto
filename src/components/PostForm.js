import React, { Component } from 'react'

export default class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: "",
            body:""
        }
    }
  onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    
    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form>
                    <div>
                        <label >Tilte : </label><br />
                        <input type="text" name='title' onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label >Body : </label><br />
                        <input type="text" name='body' onChange={this.onChange} value={this.state.body}/>
                    </div>
                </form>
                <br />
                <button type="submit">Submit</button>
            </div>
        )
    }
}
