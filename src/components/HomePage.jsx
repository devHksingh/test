import {useEffect,useState} from 'react'

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgUrl=[
    "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1733317239304-a6bf462a2596?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682310056521-cc7357fc72cf?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]
  useEffect(()=>{
    const timer = setInterval(() => {
      handleNext()
    }, 3000);
    return ()=> clearInterval(timer)
  },[currentIndex])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrl.length);
  };

  const handlePrev =()=>{
    setCurrentIndex((prevIndex)=>prevIndex===0? imgUrl.length-1: prevIndex-1)
  }
  
  return (
    <div className="relative max-w-4xl p-4 mx-auto carousel-container">
      
      <div className="relative carousel-image-container">
        <img
          src={imgUrl[currentIndex]}
          alt={`Slide number ${currentIndex + 1}`}
          className="w-full h-auto transition-all duration-200 rounded-lg "
        />
        <div className="absolute left-0 right-0 flex justify-center gap-2 bottom-2">
          
          {imgUrl.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-200 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      
      <button
        onClick={handlePrev}
        className="absolute top-[50%] left-4 transform -translate-y-1/2 text-xl bg-gray-800 bg-opacity-60 hover:bg-gray-600 rounded-full p-2 shadow-md ml-1"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[50%] right-4 transform -translate-y-1/2 text-xl bg-gray-800 bg-opacity-60 hover:bg-gray-600 rounded-full p-2 shadow-md mr-1"
      >
        &#10095;
      </button>
    </div>
  )
}

export default HomePage