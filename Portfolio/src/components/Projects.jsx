import React from "react";
import todo from "../assets/todo.png"
import ecom from "../assets/ecom.jpg"

const Projects = () => {
  return (
    <section className=" flex flex-col">
      <div className="mx-auto mb-6 text-xl font-extrabold border-b-2 border-emerald-300 pb-1 w-1/4">
        <h1>projects</h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center pb-16">
        <div
          className="w-60 roundedtext-white
       bg-emerald-500 overflow-hidden shadow-md
       shadow-emerald-300 cursor-pointer
       flex flex-col transform transition duration-700 ease-in-out
       hover:-translate-y-2 hover:shadow-xl"
        >
          <div>
            <img className="w-full h-42 " src={todo} alt="" />
          </div>
          <div className=" mx-2 py-2 flex flex-col">
            <h2 className="mx-auto font-bold">todo app</h2>
            <p className="text-xs">
              a todo app that allow users to add, edit, and delete completed
              todo items from the list
            </p>
          </div>
        </div>
        <div
          className=" w-60 rounded text-white
       bg-emerald-500 overflow-hidden shadow-md
       shadow-emerald-300
       flex flex-col transform transition duration-700 ease-in-out
       hover:-translate-y-2 hover:shadow-xl"
        >
          <div>
            <img className="w-full h-42 " src={ecom} alt="" />
          </div>
          <div className=" mx-2 py-2 flex flex-col">
            <h2 className="mx-auto font-bold">Easy store</h2>
            <p className="text-xs">
            a simple ecommerce website, with basic ecommerce functionalities{" "}
            </p>
          </div>
        </div>
        <div
          className="w-60 rounded text-white
       bg-emerald-500 overflow-hidden shadow-md
       shadow-emerald-300
       flex flex-col transform transition duration-700 ease-in-out
       hover:-translate-y-2 hover:shadow-xl"
        >
          <div>
            <img className="w-full h-42 " src={todo} alt="" />
          </div>
          <div className=" mx-2 py-2 flex flex-col">
            <h2 className="mx-auto font-bold">todo app</h2>
            <p className="text-xs">
              a todo app that allow users to add, edit, and delete completed
              todo items from the list
            </p>
          </div>
        </div>
        <div
          className="w-60 rounded text-white
       bg-emerald-500 overflow-hidden shadow-md
       shadow-emerald-300
       flex flex-col transform transition duration-700 ease-in-out
       hover:-translate-y-2 hover:shadow-xl"
        >
          <div>
            <img className="w-full h-42 " src={ecom} alt="" />
          </div>
          <div className=" mx-2 py-2 flex flex-col">
            <h2 className="mx-auto font-bold">Easy store</h2>
            <p className="text-xs">
              a simple ecommerce website, with basic ecommerce functionalities{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
