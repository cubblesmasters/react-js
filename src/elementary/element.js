import './element.sss';
import MessageDisplayer from './react-element'; // import the react component
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
      // Render the MessageDisplayer react component, set a prop based on the model of the /* @echo elementName */ component
      ReactDOM.render(<MessageDisplayer message={this.model.number}/>, this.querySelector('#reactRoot'));
    }
  });
}());
