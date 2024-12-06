import React from "react";
import portfolio from "../assets/portfolio/Portfolio.png";
import netflix from "../assets/portfolio/netflix.jpg";
import todo from "../assets/portfolio/todolist.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src:netflix,
      demo :"https://main--subtle-basbousa-285352.netlify.app/",
      code :"https://github.com/saikrishnag7/netflix-gpt",
      title : "Netflix Clone"
    },
    {
      id: 2,
      src: todo,
      code : "https://github.com/saikrishnag7/todo-list",
      demo :"https://classy-frangollo-8a80a4.netlify.app/",
      title : "Todo App"

    },
    {
      id: 3,
      src: portfolio,
      demo :"/",
      code :"https://github.com/saikrishnag7/portfolio",
      title : "Portfolio"

    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,code,title,demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h1 className="font-bold text-white pt-4  justify-self-center">{title}</h1>
              <div className="flex items-center justify-center">
              <a href ={demo}>
                <button href ={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" rel="noreferrer" target='_blank'>
                  Demo
                </button>
                </a>
            
                <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" rel="noreferrer" target='_blank'>
                  Code
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
