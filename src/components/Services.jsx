const Services = () => {
  return (
    <>
      <div className="main-container p-14">
        <h1 className="text-5xl font-bold underline text-center">
          My Services
        </h1>
        <div className="services-container flex space-x-5 px-10 mt-12">
          <div className="service1 cursor-pointer hover:bg-gray-100 text-center bg-slate-200 space-y-3 shadow-lg rounded-xl space-y-4 p-10">
            <i class="fa-brands fa-node-js text-5xl"></i>
            <h1 className="text-3xl">Frontend Development</h1>
            <p>
              Leveraging years of web development expertise, we create
              customized, high-performance websites using cutting-edge
              technologies like ReactJS and NodeJS, designed to elevate your
              online presence and drive growth.
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow">
              Check
            </button>
          </div>
          <div className="service2 cursor-pointer hover:bg-gray-100 text-center space-y-3 bg-slate-200 shadow-lg rounded-xl p-10">
            <div className="flex items-center justify-center space-x-10">
              <i class="fa-brands fa-node text-5xl"></i>
              <i class="fa-brands fa-java text-5xl"></i>
              <i class="fa-solid fa-database text-4xl"></i>
            </div>
            <h1 className="text-3xl">Backend Development</h1>
            <p>
              Offering robust backend development services in Java, utilizing
              various databases like MySQL, MongoDB, and PostgreSQL to build
              secure, scalable, and high-performance server-side solutions that
              power your applications efficiently.
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
