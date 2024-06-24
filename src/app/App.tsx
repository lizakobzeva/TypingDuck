import TypingText from "../entities/TypingText";
import { useEffect, useState } from "react";
import { useTextStore } from "../featurs/GenerateText/model/TextStore";

function App() {
  const [start, setStart] = useState(false);
  const isLoading = useTextStore((state) => state.isLoading);
  const fetchText = useTextStore((state) => state.fetchText);
  useEffect(() => {
    if (fetchText) fetchText();
  }, [start]);
  return (
    <>
      <h1>TypingDuck</h1>
      <button onClick={() => setStart(!start)}>Start</button>
      {isLoading ? <p>Loading...</p> : <TypingText />}
    </>
  );
}

export default App;
