import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { uploadFile, createBlog } from "../api/Api";

const CreateBlog = () => {
  

  const blankBlog={
    "title": "",
    "image": "",
    "post":"<p><br></p>",
    "category":""
  }

  const [newblog, setNewblog]= useState(blankBlog);

  const handleUpload=async (e)=>{
    const uploadedFile= await uploadFile(e.target.files[0]);
    if(uploadedFile.path){
      setNewblog({...newblog, image: uploadedFile.path});
    }
  }

  const handleSubmit = async () => {
    let createdBlog = await createBlog(newblog);
    if(createdBlog.desc == 1){
        setNewblog(blankBlog);
        alert("Blog added successfully !");
    }
}

  const arr = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Politics", path: "/" },
    { text: "Technology", path: "/" },
  ];
  return (
    <>
      <div className=" w-full items-center justify-center">
        <div className=" bg-slate-200 w-[60%] p-5 rounded-xl">
          <h1 className=" text-2xl mx-auto">Create Blog Post</h1>
          <div className="flex flex-col">
            {/* <small>{JSON.stringify(newblog)}</small> */}
            <label htmlFor="" className="ml-1 text-gray-500" >
              Title
            </label>
            <input type="text" className="h-6 my-2 p-2" value={newblog.title} onChange={e=>{setNewblog({...newblog, title: e.target.value})}}/>
            <label htmlFor="" className="ml-1 text-gray-500" >
              Category
            </label>
            <select name="" id="" className="my-2 p-2" value={newblog.category} onChange={e=>{setNewblog({...newblog,category:e.target.value})}}>
              <option value="" default disabled>Selected option</option> 
              {arr.map((x) => {
                return <option value={x.text}>{x.text}</option>;
              })}
            </select>
            <label htmlFor="" className="ml-1 text-gray-500">
              Image
            </label>
            <input  onChange={e=>{handleUpload(e)}} type="file" name="" id="" className="ml-1 my-2" />
            <label htmlFor="" className="ml-1 text-gray-500">
              Post
            </label>
            <ReactQuill
              theme="snow" value={newblog.post} onChange={e=>{setNewblog({...newblog, post:e})}} 
              
              className=" bg-white rounded mt-2 mb-2"
            />
            <button onClick={()=> handleSubmit()} className=" bg-slate-500 text-white w-[100px] rounded-sm">
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
