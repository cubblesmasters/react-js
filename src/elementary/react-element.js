import React from 'react';

// ReactRangeInput react compoent
class ReactRangeInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.updateNumber = this.updateNumber.bind(this);
    }
    
    handleChange (event) {
        this.setState({value: event.target.value});
        this.props.afterChangeCallback(event.target.value);
    }

    updateNumber (value) {
        this.setState({value: value});
    }

    render () {
        return (
        <div className="/* @echo webpackageName */_container">
            <label htmlFor="slotNumber">Slot 'number'</label>
            <input
                type="range"
                id="slotNumber"
                value={this.state.value}
                onChange={this.handleChange}/>
        </div>
        );
    }
}

export default ReactRangeInput;