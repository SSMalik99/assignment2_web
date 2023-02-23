import React from 'react';
import "../Style/About.css"
const About = () => {
    return <section>
        <div className=" bg-green-600 p-3 text-center">
        <div className='text-white'>
            <b>Note:</b> This timeline is created by using 
            <a href="https://www.w3schools.com/howto/howto_css_timeline.asp" target="_blank">w3schools</a>
        </div>
    </div>


    
    <div className="timeline mb-5">
        
        <div className="timeline_container left">
            
          <div className="content">
            <h2>History</h2>
            <p>   
                We start in January 2023 this website to learn more about the web development and to experiment on our own, by using google and other free website for learning. 
            </p>
          </div>
        </div>

        <div className="timeline_container right">
          <div className="content">
            <h2>What we are doing?</h2>
            <p>
                This is pretty forward for the time being we are learning web development to create great things in future.
                We are creating cross platform application, native applications and web application for the future.
            </p>
          </div>
        </div>

        <div className="timeline_container left">
            <div className="content">
              <h2>Motivation</h2>
              <p>
                The sudden increase in the digital world is the main motivation for us and we are following our passion to make things better which can be adjusted in future.
              </p>
            </div>
          </div>
          <div className="timeline_container right">
            <div className="content">
              <h2>Future</h2>
              <p>
                In the upcoming days you will find us in the great appliations which will be based on the real life problem by using AI and our knowledge of mobile applicaiton development.
              </p>
            </div>
          </div>
        
    </div>
    </section>
}
export default About