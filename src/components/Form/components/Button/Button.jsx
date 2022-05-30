export const Button = ({ label, disabled = false, click = () => null }) => {
  return (
    <button disabled={disabled} onClick={click}>
      {label}
    </button>
  );
};
