import React from "react"
import "./newsLetter.css"
console.log("done")
function NewsLetter()
{
    return(
    <>
    <div className=" ml-5">
    <div>
  <h1 className="text-xl font-extrabold">
    <span className="text-gradient-from-blue-300-to-blue-500">
      Stay updated  
    </span>
    <span>
      on product releases and news from our team.
      </span>
  </h1>
</div>

        <div className="flex items-center mt-3">
  <form className="flex items-center">
    <div>
      <input
        type="text"
        placeholder="Enter Your Email"
        className="bg-slate-200 rounded-md p-2 pr-32"
      />
    </div>
    <div>
      <input
        type="submit"
        className="bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-md ml-4 pl-7 pr-7 p-2 "
        value="Submit"
      />
    </div>
  </form>
</div>

        <div>
         <h1 className="text-xs">we value your privacy as much as you do. Your inbox is safe with us ; no spam only valuable updates.
         </h1>
        </div>
    </div>
    </>
    )
}
export default NewsLetter;