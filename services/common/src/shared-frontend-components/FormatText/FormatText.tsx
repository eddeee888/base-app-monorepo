import { FunctionComponent } from "react";

export interface FormatTextProps {
  content: string;
}

const FormatText: FunctionComponent<FormatTextProps> = ({ content }) => {
  const lines = content.split("\n");

  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </>
  );
};

export default FormatText;
