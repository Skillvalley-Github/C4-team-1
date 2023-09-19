import Intro from "./Intro"



function LandingIntro(){

    return(
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
              <div className="max-w-md">

              <div className="flex justify-center items-center"><img src="src\assets\images\logo-red.svg" className="w-4/5" alt="fusionsync-logo" /></div>

                <div className="text-center my-12"><img src="src\assets\images\intro.png" alt="Dashwind Admin Template" className="w-48 inline-block"></img></div>
              
              {/* Importing pointers component */}
              <Intro />
              
              </div>

            </div>
          </div>
    )
      
  }
  
  export default LandingIntro