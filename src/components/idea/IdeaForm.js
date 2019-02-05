import React, { Component } from "react"

export default class IdeaForm extends Component {
    // Set initial state
    state = {
        Name: "",
        idea: "",
        
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewIdea = evt => {
        evt.preventDefault()
            const idea = {
                name: this.state.name,
                idea: this.state.idea,
                userId: this.state.userId
            }

            this.props.addIdea(idea).then(() => this.props.history.push("/idea"))

    }

    render() {
        return (
            <React.Fragment>
                <form>
                  <label for="exampleText">Idea 1</label>
                    <input type="textarea" name="text" id="exampleText" />
                    </form>
                    <button type="submit" onClick={this.constructNewIdea} className="btn btn-primary">Add Idea</button>
                
            </React.Fragment>
        )
    }
}