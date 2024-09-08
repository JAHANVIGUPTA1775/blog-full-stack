import React, { useEffect, useState } from "react";
import { getBlogbyid } from "../api/Api";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import dateFormat from "dateformat";
const now = new Date();

const Blogdata = () => {
  const apiURL = "http://localhost:3000/";

  let { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function getData() {
      const allBlogs = await getBlogbyid(id);
      console.log(allBlogs);
      setBlog(allBlogs.msg[0]);
    }
    getData();
  }, []);

  return (
    <div className="flex justify-center items-center">
      {blog && (
        <div className="flex flex-col w-[50%] overflow-hidden">
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <div className="mt-4 mb-4">
            <small>
              {dateFormat(blog.createdon, "dddd, mmmm dS, yyyy, h:MM TT")}
            </small>
          </div>

          <img className=" rounded-md" src={apiURL + blog.image} alt="img" />
          <div>
            <h2 className=" text-2xl mt-2 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            {parse(blog.post)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogdata;
