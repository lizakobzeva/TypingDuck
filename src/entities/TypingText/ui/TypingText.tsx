import { useEffect, useState } from "react";
import Text from "../../../shared/ui/Text/ui/Text";
import { useTextStore } from "../../../featurs/GenerateText/model/TextStore";
import { GetTextFetch } from "../../../featurs/GenerateText/model/GetText";

const TypingText = () => {
  const [activeSymbolId, SetActiveSymbolId] = useState(0);
  const [error, SetError] = useState(false);
  const text = useTextStore((state) => state.text);
  GetTextFetch();
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
  }, [activeSymbolId, text]);
  return (
    <>
      <Text text={text} activeSymbolId={activeSymbolId} error={error} />
    </>
  );
};

export default TypingText;
