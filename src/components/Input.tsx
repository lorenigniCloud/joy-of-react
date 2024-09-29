import { useState } from "react";

interface InputProps {
  handleSubmit: Function;
}

const Input = (props: InputProps) => {
  const { handleSubmit } = props;
  const [label, setLabel] = useState("");

  const onSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (label.length !== 5) return;
    console.log(label);
    handleSubmit(label);
    setLabel("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitting}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required={true}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value.toUpperCase())}
      />
    </form>
  );
};

export default Input;
