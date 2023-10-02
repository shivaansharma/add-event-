import {FcGoogle} from 'react-icons/fc'

function Login() {
    return (
      <>
        <div>
          <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center">
              <div>
                <div>
                  <h1 className="font-extrabold">
                    Log in to dive deep <br /> into a realm of<br />learning.
                  </h1>
                </div>
                <div className="mt-10">
                  <img src="src/assets/Rectangle 159.png" alt="image not avilable" />
                </div>
              </div>
            </div>
            <div className="bg-slate-200 h-3/4 w-1 mt-16"></div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <div className="flex items-center flex-row justify-center">
                 <span className="text-4xl mr-4">👋</span>
                <div>
               
                  <span className="font-extralight">Hello, Champion</span> <br />
                  <span className="font-bold">Welcome to Coderscrux</span>
                  <hr className="mt-4 border-cyan-300 w-full border-b-4" />
                </div>
              </div>
              <div className="flex flex-col items-center mt-4 w-full">
                <button className="mx-2 bg-gradient-to-r from-cyan-300 to-green-400 rounded-md p-1 w-4/5">CREATE AN ACCOUNT</button>
                <button className="mx-2 mt-4 rounded-md p-1 w-4/5 border-2 border-black">LOGIN</button>
                <span className="mt-4">or</span>
                <button className="mx-2 mt-4 flex justify-center items-center space-x-2 font-light rounded-sm border border-black p-1 w-4/5">
                    <span className=' mr-2'> <FcGoogle /> </span> CONTINUE WITH GOOGLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Login;
  