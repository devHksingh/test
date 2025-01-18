import { Link } from "react-router-dom";
import { useForm } from "../context/formContext"


const FormDetails = () => {
  const {formState,handleRemoveData} = useForm()
  
  console.log(formState);
  
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h2 className="p-2 text-2xl font-semibold text-center">FormDetails</h2>
      <div className="grid items-center justify-center gap-4 grid-col-1 md:grid-cols-3">
      {formState.map((item,index)=>(
        <div className="flex flex-col gap-4 p-4 border rounded-md" key={index}>
            <h4>User Name: {item.name}</h4>
            <h4>User age: {item.age}</h4>
            <h4>User email: {item.email}</h4>
            <div className="space-x-4">
              <button className="p-1 px-2 bg-red-500 rounded-md hover:bg-red-600" onClick={()=>{
                console.log(index)
                handleRemoveData(index)
                }}>Delete</button>
              <Link className="p-1 px-2 rounded-md bg-sky-500 hover:bg-sky-600" to={`/${index}`}>View</Link>
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default FormDetails