import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo-color-new.png";

const Layout = () => {
  const arr = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Politics", path: "/" },
    { text: "Technology", path: "/" },
  ];
  return (
    <>
      {/* <header></header> */}

      <div className="border-b">
        <div className="container px-5 py-5 flex justify-between">
          <Link to="/">
            <span className="font-extrabold text-2xl">BLOG VERSE</span>
          </Link>

          <div className="flex">
            <ul className="flex p-2 gap-2">
              {arr.map((x) => {
                return (
                  <li>
                    <Link
                      className="p-2 items-center justify-center flex"
                      to={`/?category=${x.text}`}
                    >
                      {x.text}
                    </Link>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="bg-slate-500 text-white px-2 py-1 rounded">
            <Link to="/createBlog">Create Blog</Link>
          </button>
        </div>
      </div>

      {/* <body></body> */}

      <div className="flex mx-auto px-5 md:px-20">
        <div className="mt-5 mb-5 min-h-[500px] w-full">
          <Outlet></Outlet>
        </div>
      </div>

      {/* <footer></footer> */}
      <div className="flex bg-slate-800">
        <div className="flex mx-auto px-20 py-20 items-center justify-center">
          <h3 className="text-gray-400">BLOGGER</h3>
        </div>
      </div>
    </>
  );
};

export default Layout;
