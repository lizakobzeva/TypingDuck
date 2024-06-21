import style from "./TypingText.module.css";

interface TypingTextProps {
  text: string;
  activeSymbolId: number;
  error: boolean;
}
const TypingText = ({ text, activeSymbolId, error }: TypingTextProps) => {
  return (
    <div>
      <p>
        {text
          .split("")
          .map((a, id) =>
            id == activeSymbolId ? (
              <span className={error ? style.ErrorSymbol : style.ActiveSymbol}>
                {a}
              </span>
            ) : (
              a
            )
          )}
      </p>
    </div>
  );
};

export default TypingText;
