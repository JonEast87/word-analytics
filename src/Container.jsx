import Textarea from "./Textarea";
import Stats from "./Stats";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats numberOfCharacters={numberOfCharacters} />
    </main>
  );
}
