import { useState } from "react";
import type { ChangeEvent } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<String[]>([]);

  const handleGetText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleGetList = () => {
    setList([...list, text]);
    setText("");
  };

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleGetText} />
      <button onClick={handleGetList}>追加</button>
      <ul>
        {list.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
