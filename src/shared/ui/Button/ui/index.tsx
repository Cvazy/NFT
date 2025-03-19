interface IButtonProps {
  className: string;
  text: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ className, text, type = "button" }: IButtonProps) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};
