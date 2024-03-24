import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No script tags allowed!");
      setShowWarning(true);
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No special @ symbol allowed!");
      setShowWarning(true);
      newText = newText.replace("@", "");
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
      {showWarning ? <Warning warningText={warningText} /> : null}
    </>
  );
}
