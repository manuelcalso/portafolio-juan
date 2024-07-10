import React from "react";
import "../../src/index.css";

const CodeBlock = ({ code }) => {
  return (
    <pre className="bg-gray-200 text-black font-bold rounded px-auto">
      <code className="code-text">{code}</code>
    </pre>
  );
};

export default CodeBlock;
