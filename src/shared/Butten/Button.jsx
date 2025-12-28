const Button = (props) => {
  const { arrow, func, pageCount } = props;

  const leftArrow = arrow.includes("fa-arrow-left");

  const isDisabled = leftArrow ? pageCount <= 1 : pageCount >= 15;

  const arrowBtnClass = `flex justify-center items-center bg-light-green h-[50px] md:h-[80px] 2xl:h-[100px] w-[80px] 2xl:w-[100px] rounded-full ${
    isDisabled
      ? "active:none cursor-not-allowed"
      : "active:scale-95 cursor-pointer"
  }`;

  return (
    <button className={arrowBtnClass} onClick={func}>
      <i
        className={`fa-sharp fa-solid ${arrow} text-[26px] xl:text-[34px]`}
      ></i>
    </button>
  );
};

export default Button;
