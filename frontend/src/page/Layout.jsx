import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo.png";
import { FaHeart } from "react-icons/fa";

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

      <div className="border-b bg-blue-950">
        <div className="container px-5 py-5 flex justify-between">
          <Link to="/">
            <span className="font-extrabold text-2xl">
              <img src={logo} className="h-12 w-40" alt="" srcset="" />
            </span>
          </Link>

          <div className="flex">
            <ul className="flex p-2 gap-2 ">
              {arr.map((x) => {
                return (
                  <li>
                    <Link
                      className="p-2 items-center justify-center flex text-white  border-2 rounded-2xl mr-4 hover:bg-blue-900"
                      to={`/?category=${x.text}`}
                    >
                      {x.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className=" text-white px-2 py-1 rounded bg-blue-600  hover:bg-white hover:text-blue-900 hover:font-bold w-[160px]">
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

      <footer class="bg-slate-800  ">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <img src={logo} class="h-14 me-3" alt="Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline ">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className=" text-center flex justify-center gap-2">
            <span>Created by Jahanvi Gupta | </span>
            <span >
              <FaHeart  className=" text-xl text-red-600" />
            </span>
          </div>
        </div>
      </footer>

      {/* <div className="flex bg-slate-800">
        <div className="flex mx-auto px-20 py-20 items-center justify-center">
          <h3 className="text-gray-400">BLOGGER</h3>
        </div>
      </div> */}
    </>
  );
};

export default Layout;
