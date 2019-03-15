import './element.sss';
import ReactRangeInput from './react-element'; // import the react component
import React from 'react';
import ReactDOM from 'react-dom';

(function () {
  'use strict'; 

  // Call CubxPolymer Factory Method for registiering /* @echo elementName */ Cubbles Component
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
      this.numberInput = this.querySelector('#slotNumber');
      this.numberInput.addEventListener('change', function(event) {
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
      this._renderReactComponent();
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'slotName' has changed ...
     */
    modelNumberChanged: function (newValue) {
      if (this.ready) {
        this.reactComponent.updateNumber(newValue);
      }
    },

    updateNumberInput: function (number) {
      if (this.ready) {
        this.numberInput.value = number;
      }
    },

    _renderReactComponent: function () {
      // Render the MessageDisplayer react component, set a prop based on the model of the /* @echo elementName */ component
      ReactDOM.render(
        <ReactRangeInput ref={(reactComponent) => {this.reactComponent = reactComponent}}  afterChangeCallback={this.updateNumberInput.bind(this)}/>,
        this.querySelector('#reactRoot')
      );
    }
  });
}());
