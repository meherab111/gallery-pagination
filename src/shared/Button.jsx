const Button = (props) => {
  const { className, arrow, func } = props;
  return (
    <button className={className} onClick={func}>
      <i
        className={`fa-sharp fa-solid ${arrow} text-[26px] xl:text-[34px]`}
      ></i>
    </button>
  );
};

export default Button;
