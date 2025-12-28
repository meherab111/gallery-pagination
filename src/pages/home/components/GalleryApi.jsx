import axios from "axios";
import { useState } from "react";


const GalleryApi = () => {
    const [data, setData] = useState([])
    
    const apiCallFunc = async () => {
        
        const apiResponse = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")

        setData(apiResponse.data)
        
    
        console.log(data);
        
    } 



  return (
    <div className="h-screen bg-gray-800">
      <button onClick={apiCallFunc} className="text-2xl text-black bg-white">Api call</button>
    </div>
  )
}

export default GalleryApi
