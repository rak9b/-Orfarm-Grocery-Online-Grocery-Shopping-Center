import React from "react";
import BlogCard from "./BlogCard";
import Image from "next/image";

const page = () => {
  const ourBlog = [
    {
      image: "/blog-1.jpg",
      title: "But I must explain to you how all this mistaken idea",
      paragraph:
        "Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales",
      readMore: "Read More",
      date: "May 3, 2021",
      tips: "Tips & Tricks",
      food: "food, store",
    },
    {
      image: "/blog-2.jpg",
      title: "The Problem With Typefaces on the Web",
      paragraph:
        "Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales",
      readMore: "Read More",
      date: "May 3, 2021",
      tips: "Grocery",
      food: "envato, fresh",
    },
    {
      image: "/blog-3.jpg",
      title: "English Breakfast Tea With Tasty Donut Desserts",
      paragraph:
        "Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales",
      readMore: "Read More",
      date: "May 2, 2021",
      tips: "Grocery",
      food: "food, organic",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-7 my-4 md:my-12">
        <div className="col-span-5">
          <div>
            {ourBlog.map((item, idx) => (
              <BlogCard item={item} key={idx} />
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-800"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className=" w-full py-[10px] pl-10 text-sm rounded-sm focus:outline-none bg-[#f3f4f7]"
                />
              </div>
            </fieldset>
          </div>
          <div>
            <h2 className="mt-8 mb-4">Popular Posts</h2>
            <div className=" border-2">
              <div className="p-2 space-y-6">
                {ourBlog.map((item, idx) => (
                  <div className="" key={idx}>
                    <div className="flex items-center gap-4">
                      <div>
                        <Image
                          src={item.image}
                          alt="postImage"
                          className=" rounded-full h-[60px]"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div>
                        <h2>{item.title.slice(0, 45)}</h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
