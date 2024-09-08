import React, { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";
import { getBlogs } from "../api/Api";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [blog, setBlog] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('category'));

  useEffect(() => {
    async function getData() {
      const allBlogs = await getBlogs();
      setBlog(allBlogs.msg);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      let category = searchParams.get('category');
      const allBlogs = await getBlogs(category);
      setBlog(allBlogs.msg);
    }
    getData();
  }, [searchParams]);

  const arr = [
    {
      title: "it is worth investing in",
      image: "https://picsum.photos/200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quidem.",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title: "it is worth investing in",
      image: "https://picsum.photos/200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quidem.",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title: "it is worth investing in",
      image: "https://picsum.photos/200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quidem.",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title: "it is worth investing in",
      image: "https://picsum.photos/200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quidem.",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title: "it is worth investing in",
      image: "https://picsum.photos/200",
      description: "liufged fuewu ifcgew fbekjbf",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title: "it is worth investing in",
      image: "https://picsum.photos/200",
      description: "liufged fuewu ifcgew fbekjbf",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title: "it is worth investing in",
      image: "https://picsum.photos/200",
      description: "liufged fuewu ifcgew fbekjbf",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title: "it is worth investing in",
      image: "https://picsum.photos/200",
      description: "liufged fuewu ifcgew fbekjbf",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title: "it is worth investing in",
      image: "https://picsum.photos/200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quidem.",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
  ];
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {blog &&
          blog.map((x) => {
            return <Blogcard blogdata={x}></Blogcard>;
          })}
      </div>
    </div>
  );
};

export default Home;
