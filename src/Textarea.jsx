import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No script tags allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No special @ symbol allowed!");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
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
      <Warning warningText={warningText} />
    </>
  );
}
