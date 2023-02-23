import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section>
        <div className="bg-white rounded p-2 text-center min-h-full py-11">
            <div>
            This is the home page of #NeverBowDown designed by Saravjeet To learn
            More about Web designing and development.
            </div>

            <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="rounded max-w-full bg-slate-500 overflow-hidden bg-repeat-x shadow-lg bg-[url('https://www.linkpicture.com/q/Kalita-Ivan-Sergejewitsch-Monochrome-Tools-Wallpapers-HD.jpeg')]">
                
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">Explore Oure Tools</div>
                    <div className=" justify-center flex">
                        <p className="text-base text-black bg-slate-50 rounded-lg w-fit p-2 ">
                            You can explore our tools on our tools page.
                        </p>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2 mb-3">
                    <NavLink
                    to={"/tools"}
                    className="mx-3 bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-300 hover:text-black"
                    >
                    {" Our Tools "}
                    </NavLink>
                </div>
            </div>


            <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="rounded max-w-full bg-slate-500 overflow-hidden bg-cover shadow-lg bg-[url('https://www.linkpicture.com/q/aboutUs.webp')]">
                
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">Learn More About Us</div>
                    <div className=" justify-center flex">
                        <p className="text-base text-black bg-slate-50 rounded-lg w-fit p-2 ">
                            You can Learn More about Us.
                        </p>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2 mb-3">
                    <NavLink
                    to={"/about"}
                    className="mx-3 bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-300 hover:text-black"
                    >
                    {" About Us "}
                    </NavLink>
                </div>
            </div>


            <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="rounded max-w-full bg-slate-500 overflow-hidden bg-cover bg-no-repeat shadow-lg bg-[url('https://www.linkpicture.com/q/services.jpeg')]">
                
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">Find Out Our more services</div>
                    <div className=" justify-center flex">
                        <p className="text-base text-black bg-slate-50 rounded-lg w-fit p-2 ">
                            Find our Services whcih can help your Ideas to grow.
                        </p>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2 mb-3">
                    <NavLink
                    to={"/about"}
                    className="mx-3 bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-300 hover:text-black"
                    >
                    {" About Us "}
                    </NavLink>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Home;
