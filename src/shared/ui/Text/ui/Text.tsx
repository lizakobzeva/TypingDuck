import style from "./Text.module.css";

interface TextProps {
  text: string;
  activeSymbolId: number;
  error: boolean;
}
const Text = ({ text, activeSymbolId, error }: TextProps) => {
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

export default Text;
