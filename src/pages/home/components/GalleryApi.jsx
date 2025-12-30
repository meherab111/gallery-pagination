import axios from "axios";
import { useEffect, useState } from "react";
import GalleryDisplay from "../../../shared/Home/GalleryDisplay";

const GalleryApi = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [downloadImg, setDownloadImg] = useState(false);

  const apiCallFunc = async () => {
    try {
      const apiResponse = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );

      setData(apiResponse.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDownload = async (event, url, id) => {
    event.preventDefault();

    try {
      setDownloadImg(true);

      const response = await fetch(url);

      const imgBlob = await response.blob();

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(imgBlob);
      downloadLink.download = `PixGallery-${id}`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(downloadLink.href);

      setDownloadImg(false);
    } catch (error) {
      alert(error.message || "Image Downloading Failed");
    }
  };

  useEffect(() => {
    apiCallFunc();
  }, [page]);

  const forwardFunc = () => {
    if (page < 15) {
      setPage(page + 1);
      setData([]);
    }
  };

  const backwardFunc = () => {
    if (page > 1) {
      setPage(page - 1);
      setData([]);
    }
  };

  if (data.length === 0) {
    return (
      <div className="h-screen mx-auto flex justify-center items-center">
        <h1 className="font-poppins text-[36px] leading-tight">Loading ...</h1>
      </div>
    );
  }

  if (downloadImg) {
    return (
      <div className="h-screen mx-auto flex flex-col gap-[10px] justify-center items-center">
        <i
          className="fa-sharp fa-solid fa-download text-[46px] mt-4 cursor-pointer"
          title="Download"
        ></i>
         <h1 className="font-poppins text-[36px] leading-tight">Downloading...</h1>
      </div>
    );
  }

  return (
    <GalleryDisplay
      page={page}
      forwardFunc={forwardFunc}
      backwardFunc={backwardFunc}
      data={data}
      handleDownload={handleDownload}
    />
  );
};

export default GalleryApi;
