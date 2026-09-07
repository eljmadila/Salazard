'use client'
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {

  const handleClick = ():void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed flex items-center bottom-4 right-4 p-2 0">
      <button 
        onClick={handleClick} 
        aria-label="Back to top"
        className="cursor-pointer bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <FaArrowUp />
      </button>
    </div>
  )
}

export default BackToTop