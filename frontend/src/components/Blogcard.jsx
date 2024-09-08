import React from "react";
import { Link } from "react-router-dom";

const Blogcard = (props) => {
  let blogdata = props.blogdata;

  const apiURL = "http://localhost:3000/";

  // console.log(blogdata);
  return (
    <div className="bg-white shadow-md overflow-hidden rounded-xl">
      <Link to={`/blogs/${blogdata.id}`}>
        <div className="flex flex-col w-full">
          <img src={apiURL + blogdata.image} alt="img" />
          {/* <div className="w-full h-[250px] bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${apiURL+blogdata.image})`}}></div> */}

          {/* <div
            className="w-full h-[25px]"
            style={{
              backgroundImage: `url(${apiURL + blogdata.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div> */}

          <div className="p-2">
            <h2 className="mt-1 text-xl text-left">{blogdata.title}</h2>
            <p className=' text-sm text-left opacity-70'>{blogdata.category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blogcard;
