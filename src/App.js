function App() {
  return (
    <div className="h-[100vh] flex items-center flex-col justify-center bg-[#f2efef]">
      <div className="flex items-center w-[90%] box-border">
        {/* First Textarea. textarea style is implemented from index.css file  */}
        <textarea
          className="text-area"
          name=""
          id=""
          placeholder="Enter JSON data"
        ></textarea>
        {/* Controls button. button styles are implemented from index.css file */}
        <div className="flex flex-col flex-[0.2] mx-10">
          <button type="button" className="control-button">
            Format
          </button>
          <button type="button" className="control-button">
            Minify
          </button>
          <button
            type="button"
            className="control-button bg-red-500 hover:bg-red-800"
          >
            Clear
          </button>
        </div>
        {/* Second Textarea. textarea style is implemented from index.css file  */}
        <textarea
          className="text-area"
          name=""
          id=""
          placeholder="Your formatted result is here"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
