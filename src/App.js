import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);
  const [totalWord, setTotalWord] = useState(0);
  // to format json
  useEffect(() => {
    setTotalWord(input.split("").length);
  }, [totalWord, input]);
  const formatJSON = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(input), null, 4);
      setError(null);
      setOutput(formatted);
    } catch (err) {
      setError(err);
      setOutput(err.message);
    }
  };
  // to minify JSON
  const minifyFormat = () => {
    try {
      const minified = JSON.stringify(JSON.parse(input));
      setError(null);
      setOutput(minified);
    } catch (err) {
      setError(err);
      setOutput(err.message);
    }
  };
  // to clear both textarea
  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="h-[100vh] flex items-center flex-col justify-center bg-[#f2efef]">
      <div className="flex  flex-col md:flex-row items-center w-[90%] box-border">
        {/* First Textarea. textarea style is  implemented from index.css file  */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-area mb-2"
          name="input"
          id="input"
          placeholder="Enter JSON data"
        ></textarea>
        {/* Controls button. button styles are implemented from index.css file */}
        <div className="flex flex-col flex-[0.2] mx-10">
          <button onClick={formatJSON} type="button" className="control-button">
            Format
          </button>
          <button
            onClick={minifyFormat}
            type="button"
            className="control-button"
          >
            Minify
          </button>
          <button
            onClick={clearAll}
            type="button"
            className="control-button bg-red-500 hover:bg-red-800"
          >
            Clear
          </button>
          <strong className="mb-2 text-center">
            Total Character: <span>{totalWord}</span>
          </strong>
        </div>
        {/* Second Textarea. textarea style is implemented from index.css file  */}
        <textarea
          readOnly
          value={output}
          className={`text-area ${error && "text-red-600"}`}
          name="output"
          id="output"
          placeholder="Your formatted result is here"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
