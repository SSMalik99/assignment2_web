import React from 'react';
import { NavLink } from 'react-router-dom';


const Tools = () => {
    return <section>
    <div className="bg-white rounded p-2 text-center min-h-full py-11">
      <div>
        Our Tools are up-to-date and you can find those tools helpful in your regular life.
      </div>

      <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div>
        <div className="text-lg text-black font-bold">Our Latest Tool</div>
      </div>
      <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className=" flex justify-between mx-11">
        {/* Task Tool */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://cdn.pixabay.com/photo/2015/05/31/15/08/blank-792125_640.jpg"
            alt="Manage Your Tasks"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Manage Your Notes</div>
            <p className="text-gray-700 text-base">
              You can Manage Your Notes with our given Note Management Tool.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 mb-3">
              <NavLink
                  to={"/notes"} 
                  className="mx-3 bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-300 hover:text-black"> 
                  {" NoteKept "}
              </NavLink> 
          </div>
        </div>


        {/* Weather Tool */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="WeatherView"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">WeatherView</div>
            <p className="text-gray-700 text-base">
              Get Weather Detail on the finger tips with our latest tool WeatherView.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 mb-3">
              <NavLink
                  to={"/weather"} 
                  className="mx-3 bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-300 hover:text-black"> 
                  {" WeatherView "}
              </NavLink> 
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Tools