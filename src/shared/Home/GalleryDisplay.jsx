import Button from "../Butten/Button";

const GalleryDisplay = (props) => {
  const { page, forwardFunc, backwardFunc, data, handleDownload } = props;

  return (
    <section className="h-full container mx-auto px-[10px]">
      <div
        className={
          "max-md:hidden flex justify-center items-center fixed bg-light-green top-[20px] right-[20px] h-[50px] md:h-[80px] 2xl:h-[100px] w-[80px] 2xl:w-[100px] rounded-full"
        }
      >
        <h1 className="font-poppins text-[32px] lg:text-[48px] font-semibold leading-tight">
          {page}
        </h1>
      </div>

      {/* upper part */}
      {/* desktop view */}
      <div className="hidden 2xl:flex justify-center items-center">
        <Button arrow={"fa-arrow-left"} func={backwardFunc} pageCount={page} />
        <div className="flex justify-center h-[110px] lg:h-[160px] w-[600px] 2xl:w-[720px] bg-light-red rounded-b-[70px] mx-[90px]">
          <h1 className="font-poppins text-[clamp(34px,5vw,96px)]">
            PiksGallery
          </h1>
        </div>
        <Button arrow={"fa-arrow-right"} func={forwardFunc} pageCount={page} />
      </div>

      {/* mobile view */}
      <div className="flex flex-col justify-center items-center 2xl:hidden">
        <div className="flex justify-center h-[60px] sm:h-[90px] md:h-[110px] w-full sm:w-[600px] lg:w-[700px] bg-light-red rounded-b-[70px] mx-[90px]">
          <h1 className="font-poppins text-[clamp(34px,5vw,96px)]">
            PiksGallery
          </h1>
        </div>
        <div className="flex gap-[20px] mt-[10px]">
          <Button
            arrow={"fa-arrow-left"}
            func={backwardFunc}
            pageCount={page}
          />
          <Button
            arrow={"fa-arrow-right"}
            func={forwardFunc}
            pageCount={page}
          />
        </div>
      </div>

      {/* lower part */}
      <div className="py-[26px] md:py-[38px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-[26px] md:gap-y-[38px]">
        {data.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="h-[300px] md:h-[380px] w-[240px] md:w-[310px] bg-light-purple flex flex-col justify-between items-center rounded-[50px] shadow-md gap-5"
            >
              <div>
                <img
                  src={elem.download_url}
                  alt="images"
                  loading="eager"
                  height="210"
                  width="280"
                  className="h-[170px] md:h-[210px] w-[220px] md:w-[280px] object-cover rounded-[40px] mt-[10px]"
                />
              </div>
              <div className="w-full flex justify-between px-4 mb-[50px]">
                <div>
                  <h1 className="font-poppins text-[24px] md:text-[36px] leading-8 lg:leading-10">
                    {elem.author}
                  </h1>
                  <h2 className="font-poppins text-[14px] md:text-[24px] text-light-gray">
                    Author
                  </h2>
                </div>
                <div>
                  <button
                    onClick={(event) => {
                      handleDownload(event, elem.download_url, elem.id);
                    }}
                  >
                    <i
                      className="fa-sharp fa-solid fa-download text-[20px] md:text-[26px] mt-4 cursor-pointer"
                      title="Download"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GalleryDisplay;
