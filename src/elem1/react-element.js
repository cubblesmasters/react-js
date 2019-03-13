import React from 'react';

// MessageDisplayer react compoent
class MessageDisplayer extends React.Component {
    render () {
        return (
        <div className="/* @echo webpackageName */_msg_div">
            Current value: <span className="/* @echo webpackageName */_msg">{this.props.message}</span>
        </div>
        );
    }
}

export default MessageDisplayer;