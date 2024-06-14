import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-home-image">
      <Navbar />
      <div>
        <section className="grid gap-2 place-content-evenly leading-8 text-white mt-[100px] mb-[200px]">
          <h4 className="text-amber-500 text-sm">Hello I'm</h4>
          <h2 className="text-2xl">Dansan Ankunda</h2>
          <h2 className="text-2xl">Coder</h2>
          <p className=" text-slate-600 text-sm">
            I have done different projects and have come up as a success
          </p>
          <div className="leading-8 my-4">
            <button
              type="submit"
              className="rounded-full bg-emerald-500 px-4 mr-5"
            >
              Hire me
            </button>
            <span>
              <Link
                to="/potfolio"
                className="bg-transparent hover:bg-emerald-400 hover:text-white rounded-full border border-emerald-400 px-4 py-1 text-green-400"
              >
                See my Work
              </Link>
            </span>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
