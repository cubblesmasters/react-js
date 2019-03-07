import './element.sss'
import React from 'react';
import ReactDOM from 'react-dom';

(function () {
  'use strict';

  class MessageDisplayer extends React.Component {
    render () {
      return (
        <div className="/* @echo webpackageName */_msg_div">
          Current value: <span className="/* @echo webpackageName */_msg">{this.props.message}</span>
        </div>
      );
    }
  }

  // Call CubxPolymer Factory Method for registiering <react-todo-list> Cubbles Component
  CubxComponent({
    is: '/* @echo elementName */',

    /**
     * Manipulate an element’s local DOM when the element is created. {{artifactId}}
     */
    created: function () {

    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      let input = this.querySelector('#slotNumber');
      input.addEventListener('change', function(event) {
        this.setNumber(event.target.value);
      }.bind(this));
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    connected: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is dettached to the document.
     */
    disconnected: function () {
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this.ready = true;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'slotName' has changed ...
     */
    modelNumberChanged: function (newValue) {
      if (this.ready) {
        this._render();
      }
    },

    _render: function () {
      ReactDOM.render(<MessageDisplayer message={this.model.number}/>, this.querySelector('#reactRoot'));
    }
  });
}());
