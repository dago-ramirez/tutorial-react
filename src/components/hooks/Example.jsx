import React, { useState, useEffect } from 'react'

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Click me
      </button>
    </div>
  );
}
