import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../context/formContext";
import { useState } from "react";

const SingleUserDetails = () => {
    const {userRoll} = useParams()
    const {formState,handleAddData} = useForm()
    const [userName,setUserName] = useState("")
    const navigate = useNavigate()
    console.log(userRoll);

    const userData = formState.filter((data)=> data.roll === userRoll)
    console.log(formState);
    console.log(userData[0].roll);
    const handleUpdate =()=>{
        handleAddData(userName,userData[0].roll)
        navigate('/show')
    }
  return (
    <div className="max-w-4xl p-4 mx-auto space-y-4 text-center">
        <h2 className="text-2xl font-medium text-center">User Details</h2>
            {userData.map((item,index)=>(
                <div  key={index} className="flex flex-col items-center justify-center max-w-md gap-4 p-4 mx-auto border rounded-md">
                    <label className="flex flex-col justify-start w-full">
                        <span className="block text-left opacity-80">UserName:</span> 
                        <input type="text" placeholder={item.name} value={userName} className="p-1 text-black rounded-md cursor-pointer bg-stone-400 placeholder:text-black" 
                        onChange={(e)=>setUserName(e.target.value)}
                        />
                    
                    </label>
                    <label className="flex flex-col justify-start w-full">
                        <span className="block text-left opacity-80">UserRoll:</span> 
                        <input type="text" value={item.roll} className="p-1 text-black rounded-md cursor-not-allowed bg-stone-400" disabled/>
                    
                    </label>
                    
                    <button className="p-1 px-2 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleUpdate}>Update</button>
                </div>
            ))}
            <p className="capitalize "><span className="font-medium text-orange-400 underline underline-offset-4">CAUTION</span> : you can update username only</p>
    </div>
  )
}

export default SingleUserDetails