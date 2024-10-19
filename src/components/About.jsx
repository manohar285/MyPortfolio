import { useState } from "react";
import bannerImage from "../assets/mypic.jpg";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Full satck web developer & Java developer",
    desc1: `FullStack developer & Passion for Building new Projects with newChallenges to solve with full functionality.`,
    actionButton: {
      title: "Read more...",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 py-16 h-full">
        <h1 className="text-4xl pb-16 font-bold underline text-center">
          About me
        </h1>
        <div className="about-container flex items-center">
          {/*Image cotainer*/}
          <div className="w-full flex justify-center">
            <img
              src={data.image}
              alt="manohar maheshwar"
              srcset=""
              className="w-fit rounded-full h-64 w-64 "
            />
          </div>
          {/*Text cotainer*/}
          <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-4xl font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <button className="px-3 py-2 bg-orange-500 rounded-full shadow">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
