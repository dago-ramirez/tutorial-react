import React from 'react'

export default function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        alert('The link was clicked.');
      }
    
      return (
        <a href="/" onClick={handleClick}>
          Click me
          <br />
        </a>
      );
}
