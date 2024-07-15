"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <div className="bg-gray-900 flex text-white items-center h-screen justify-center flex-col">
        <h1 className="text-xl font-bold">Test app</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </main>
  );
}
