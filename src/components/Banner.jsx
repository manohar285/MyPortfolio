import bannerImage from "../assets/mypic.jpg";
import bannerBackground from "../assets/bannerImage.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const Banner = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Java Developer",
        "Full Satck Web Developer",
        "Backend Developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="main-container flex h-96">
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
        className="w-full flex justify-center items-center text-white"
      >
        {/*Text*/}

        <div className="w-2/3 ">
          <h3 className=" text-3xl font-semibold">Hi, I am </h3>
          <h1 className=" text-5xl font-semibold">Manohar Maheshwar</h1>
          <h2 className=" text-2xl">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
            FullStack developer & Passion for Building new Projects with new
            Challenges to solve with full functionality. Strong Javascript &
            React Js. There are three responses to a piece of design – yes, no,
            and WOW! Wow is the one to aim for.
          </p>
          <div className="icon-container mt-3 flex space-x-5">
            <a className=" hover:bg-slate-500 cursor-pointer h-10 w-10 rounded-full flex justify-center items-center bg-gray-700">
              <i class="fa-brands text-2xl fa-facebook"></i>
            </a>
            <a className=" hover:bg-slate-500 cursor-pointer h-10 w-10 rounded-full flex justify-center items-center bg-gray-700">
              <i class="fa-brands text-2xl fa-instagram"></i>
            </a>
            <a className=" hover:bg-slate-500 cursor-pointer h-10 w-10 rounded-full flex justify-center items-center bg-gray-700">
              <i class="fa-brands text-2xl fa-linkedin"></i>
            </a>
            <a className=" hover:bg-slate-500 cursor-pointer h-10 w-10 rounded-full flex justify-center items-center bg-gray-700">
              <i class="fa-solid text-2xl fa-envelope"></i>
            </a>
          </div>
          <br />
          <a
            href="/contact"
            className="px-3 py-2 bg-orange-500 rounded-full shadow"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        {/*Image*/}
        <img
          src={bannerImage}
          alt="MyImage"
          className="rounded-full my-2 h-80 w-80 shadow"
        />
        <h1>Hii manohar</h1>
      </div>
    </div>
  );
};
export default Banner;
