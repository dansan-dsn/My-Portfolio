import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMessage } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center place-items-center min-h-screen mx-2">
        <form className="w-full xs:w-auto" action="/" method="post">
          <h2 className="text-end text-stone-500 text-4xl my-3">Contact Us</h2>
          <label className="input input-bordered flex items-center gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-slate-400"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              name="email"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4  text-slate-400"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="phone"
              className="grow"
              placeholder="Phone"
              name="phone"
              required
            />
          </label>
          <label className="input input-bordered flex items-center mt-5 gap-2">
            <MdDriveFileRenameOutline />
            <input
              type="text"
              className="grow"
              placeholder="Name"
              name="name"
              required
            />
          </label>
          <textarea
            className="textarea textarea-bordered my-5 w-full row-"
            name="message"
            placeholder="Message..."
          ></textarea>
          <label className="form-control w-full max-w-xs grow">
            <select className="select select-bordered">
              <option disabled selected>
                Category of concern
              </option>
              <option>Graphics Design</option>
              <option>Web programming</option>
              <option>Database Management</option>
              <option>Database Programming</option>
              <option>Embedded Programming</option>
            </select>
          </label>
          <div className="flex justify-end">
            <button
              className="btn btn-outline btn-success rounded-full px-10 mt-5"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
