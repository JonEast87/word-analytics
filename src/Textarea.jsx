import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (event) => {
    let newText = event.target.value;

    if (newText.includes("<script>")) {
      setShowWarning(true);
      newText = newText.replace("<script>", "");
    }

    setText(newText);
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleChange}
        className="textarea"
        placeholder="Enter your text here..."
        spellCheck="false"
      />
      {showWarning ? <Warning /> : null}
    </>
  );
}
