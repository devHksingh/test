import { Link } from "react-router-dom";
import { useForm } from "../context/formContext"


const FormDetails = () => {
  const {formState,handleRemoveData} = useForm()
  
  console.log(formState);
  
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h2 className="p-2 text-2xl font-semibold text-center">FormDetails</h2>
      <div className="flex items-center justify-center gap-4">
      {formState.map((item,index)=>(
        <div className="flex flex-col gap-4 p-4 border rounded-md" key={index}>
            <h4>User Name: {item.name}</h4>
            <h4>User roll: {item.roll}</h4>
            <div className="space-x-4">
              <button className="p-1 px-2 bg-red-500 rounded-md hover:bg-red-600" onClick={()=>handleRemoveData(item.name,item.roll)}>Delete</button>
              <Link className="p-1 px-2 rounded-md bg-sky-500 hover:bg-sky-600" to={`/${item.roll}`}>View</Link>
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default FormDetails