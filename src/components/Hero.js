import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="text-white body-font">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Real-Time & Historical
                    <br className="hidden lg:inline-block" />
                    World Weather Data API
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    Retrieve instant, accurate weather information for any location in <br/> the world in lightweight JSON format
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                      START USING THE API
                    </button>
                    <div className="friendly"> — It's free!</div>
                  </div>
                </div>
               
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;