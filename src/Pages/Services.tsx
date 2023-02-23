import React from "react";

const Services = () => {
  return (
    <section>
      <div className="container bg-light p-3">
        <div className="text-center">
          <div className=" text-lg">Technologies we are dealing with</div>
        </div>
        <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="">
          <div className="flex justify-center">
            <div className="card" >
              <div className="d-flex justify-content-center">
                <div className="item_logo">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">React Native</h5>
                <p className="card-text">
                  This is a best Javascript library to create cross platform
                  application.
                </p>
              </div>

              <div className="card-body">
                <a
                  href="https://reactnative.dev/"
                  className="btn btn-sm btn-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="flex justify-center">
            <div className="card" >
              <div className="">
                <img
                  src="https://www.gstatic.com/devrel-devsite/prod/v8630d525d2c63b97010320bed1b0ce38685d514a45414a53dd4326ac0a263ebf/android/images/lockup.svg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Android</h5>
                <p className="card-text">
                  Android is the most famous to create andorid applications with
                  native approach.
                </p>
              </div>

              <div className="card-body">
                <a
                  href="https://developer.android.com/studio?gclid=CjwKCAiA2rOeBhAsEiwA2Pl7Q3tAkDTVbUV2wr8WPfK0xdFW4LxF1b1VYa1r9cLkSqqq10jFablQnhoC2bMQAvD_BwE&gclsrc=aw.ds"
                  className="btn btn-sm btn-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="flex justify-center">
            <div className="card">
              <div className="">
                <img
                  src="https://www.linkpicture.com/q/Swift-Logo.jpeg"
                  className="card-img-top"
                  alt="..."
                  style={
                    {
                        width:"36rem",
                        height:"15rem"
                    }
                  }
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Swift</h5>
                <p className="card-text">
                  Swift is used to creat native application for IOS platform.
                </p>
              </div>

              <div className="card-body">
                <a
                  href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html"
                  className="btn btn-sm btn-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="flex justify-center">
            <div className="card mt-3" >
              <div className="mt-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/260px-HTML5_logo_and_wordmark.svg.png"
                  className="card-img-top"
                  alt="..."
                  style={
                    {
                        
                        width: "20rem",
                        height: "15rem"

                    }
                  }
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">
                  HTML is the basic scelton for the Web development
                </p>
              </div>

              <div className="card-body">
                <a
                  href="https://en.wikipedia.org/wiki/HTML5"
                  className="btn btn-sm btn-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </section>
  );
};

export default Services;
