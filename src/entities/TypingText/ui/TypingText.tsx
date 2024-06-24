import { useEffect, useState } from "react";
import Text from "../../../shared/ui/Text/ui/Text";
import { useTextStore } from "../../../featurs/GenerateText/model/TextStore";

const TypingText = () => {
  const [activeSymbolId, SetActiveSymbolId] = useState(0);
  const [errorSymbol, SetErrorSymbol] = useState(false);
  const text = useTextStore((state) => state.text);

  useEffect(() => {
    console.log("b");
    const keyPressHandler = (event: KeyboardEvent) => {
      if (event.key == "Shift") return;
      if (event.key == text[activeSymbolId]) {
        SetActiveSymbolId(activeSymbolId + 1);
        SetErrorSymbol(false);
        document.removeEventListener("keyup", keyPressHandler);
      } else {
        SetErrorSymbol(true);
      }
    };

    document.addEventListener("keyup", keyPressHandler);
  }, [activeSymbolId, errorSymbol, text]);
  return (
    <>
      <h1>TypingText</h1>
      <Text text={text} activeSymbolId={activeSymbolId} error={errorSymbol} />
    </>
  );
};

export default TypingText;
