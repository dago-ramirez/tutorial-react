import React from 'react'

export default function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
        <div>
            <h1 className="text-2xl font-bold">Number List:</h1>
            <ul>{listItems}</ul>
        </div>
    );
  }
