import React, { useState } from 'react';

export const Admin = () => {
    const [loading,setloading]=useState(false)
    const[imgURL,setimgURL]=useState("");
    const handleFileUpload=async(event)=>{
        const file=event.target.files[0]
        if(!file) return;
        setloading(true)
        const data=new FormData();
        data.append("file",file)
        data.append("upload_preset","RestAdmin")
        data.append("cloud_name","dnfbik3if")

       const res= await fetch("https://api.cloudinary.com/v1_1/dnfbik3if/image/upload",{
            method:"POST",
            body:data
        })
        const uploadImageURL=await res.json()
        console.log(uploadImageURL.url)
        setimgURL(uploadImageURL.url)
        setloading(false)

    }
  return (
    <div>
<h1>Image Upload</h1>
<div className='flex flex-col gap-4'>
    <label>Input image</label>
    <div>
    {loading ? "Uploading" :<div>Done</div>}
    <input type="file" accept="*"  onChange={handleFileUpload}/>
    </div>
    <div><img src={imgURL} className='cover'></img></div>
</div>



    </div>
  )
}
