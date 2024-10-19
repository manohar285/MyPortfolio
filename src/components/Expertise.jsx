import bannerBackground from "../assets/bannerImage.svg";
const Expertise = () => {
  return (
    <>
      <div className=" ">
        <h1 className=" my-8 text-4xl font-bold underline text-center">
          My Expertise
        </h1>
        {/*Box section*/}
        <div className="box-container flex my-16">
          {/* Text container*/}
          <div
            style={{
              backgroundImage: `url(${bannerBackground})`,
              backgroundSize: "cover",
            }}
            className="flex justify-center rounded-r-lg"
          >
            <div className="w-2/3 text-center text-white space-y-4 p-5">
              <h1 className=" text-4xl font-bold ">I love this technologies</h1>
              <p>
                Creating dynamic user interfaces with ReactJS excites me, while
                building efficient backend systems with NodeJS fuels my passion
                for full-stack development, allowing me to deliver seamless and
                powerful web applications.
              </p>
              <button className=" text-2xl px-4 py-2 font-semibold bg-orange-500 rounded-full shadow">
                Hire Me
              </button>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            {/*Skills container*/}
            <div className=" flex justify-center h-fit w-2/3 flex-wrap space-x-3">
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                core java
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
              Hibernate
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                J2EE
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Springboot Framework
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Spring Security
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                React js
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                CSS3
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Next js
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Talwind CSS
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                EC2
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                AWS Cloud
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                MYSQL
              </p>
              <p className="bg-gray-300 w-fit  px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Deploying on Cloud
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
