import React from "react";

const GalleryDisplay = () => {
  return (
    <section className="h-screen container mx-auto px-2.5">
        
    {/* upper part */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-light-green h-25 w-25 rounded-full cursor-pointer">
            <i className="fa-sharp fa-solid fa-arrow-left text-[34px]"></i>
        </div>
        <div className="flex justify-center h-40 w-208 bg-light-red rounded-b-[70px] mx-22.5">
          <p className="font-poppins text-[96px]">Image Gallery</p>
        </div>
        <div className="flex justify-center items-center bg-light-green h-25 w-25 rounded-full cursor-pointer">
          <i className="fa-sharp fa-solid fa-arrow-right text-[34px]"></i>
        </div>
      </div>

    {/* lower part */}
      <div className="py-9.5 grid grid-cols-4 place-items-center gap-y-9.5">
            <div className="h-95 w-77.5 bg-light-purple flex flex-col justify-between items-center rounded-[50px] shadow-md">
                <div>
                    <img src="https://picsum.photos/id/102/4320/3240" alt="images" className="h-auto w-70 object-cover rounded-[40px] mt-4" />
                </div>
                <div className="w-full flex justify-between px-4 mb-14">
                    <div>
                        <h1 className="font-poppins text-[36px]">Ben Moore</h1>
                        <h2 className="font-poppins text-[24px] text-light-gray">Author</h2>
                    </div>
                    <div>
                        <a href="102-4320x3240.jpg" download={"102-4320x3240.jpg"}><i className="fa-sharp fa-solid fa-download text-[26px] mt-4" title="Download"></i></a>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default GalleryDisplay;
