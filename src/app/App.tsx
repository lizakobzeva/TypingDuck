import { useEffect, useState } from "react";
import TypingText from "../shared/ui/TypingText";

function App() {
  const [activeSymbolId, SetActiveSymbolId] = useState(0);
  const [error, SetError] = useState(false);
  const text = "adsfha df dka dbkf e djbf odhf ebj dosfhd fdds";
  useEffect(() => {
    const keyPressHandler = (event: KeyboardEvent) => {
      console.log("d");
      if (event.key == text[activeSymbolId]) {
        SetActiveSymbolId(activeSymbolId + 1);
        SetError(false);
        document.removeEventListener("keypress", keyPressHandler);
      } else {
        SetError(true);
      }
    };

    document.addEventListener("keypress", keyPressHandler);
  });
  return (
    <>
      <h1>Vite + React</h1>
      <TypingText text={text} activeSymbolId={activeSymbolId} error={error} />
    </>
  );
}

export default App;
