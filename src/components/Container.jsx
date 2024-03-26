import Textarea from "./Textarea";
import Stats from "./Stats";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  // Prop object
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
