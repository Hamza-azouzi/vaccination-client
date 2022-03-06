import React from 'react';


const Login: React.FC = () => {
  
  return (
    <div className="w-full h-full">
      <div className="relative h-full flex flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-4xl w-96 h-96">
          <div className="card bg-cyan-500 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-orange-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full h-full rounded-3xl  px-10 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor=""
              className="block mt-6 mb-8 text-4xl text-gray-700 text-center font-semibold">
              Login
            </label>
            <form
              method="#"
              action="#"
              className="mt-2">


              <div className="mt-7">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  className="mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:outline-cyan-500"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"

                  className="mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:outline-orange-500"
                />
              </div>

              <div className="mt-7">
                <button className="bg-cyan-500 w-full py-3 rounded-xl text-white text-xl shadow-xl hover:shadow-inner hover:bg-orange-500 focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;