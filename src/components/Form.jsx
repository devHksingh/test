import { Link } from "react-router-dom";
import { useForm } from "../context/formContext";
import { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userRoll, setUserRoll] = useState("");
  const { handleAddData } = useForm();
  const addUserName = (e) => {
    setUserName(e.target.value);
  };
  const addUserRoll = (e) => {
    setUserRoll(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (userName && userRoll) {
      handleAddData(userName, userRoll);
      setUserName("");
      setUserRoll("");
      
    }
  };
  return (
    <div className="max-w-4xl p-4 mx-auto space-y-4 text-center">
      <h2 className="text-2xl font-medium text-center">User Form</h2>
      <form onSubmit={(e) => handleForm(e)} className="flex flex-col justify-center max-w-xl gap-6 p-4 mx-auto border rounded-md">
        <label>
          <span className="block font-medium text-left opacity-80">UserName</span>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-1 text-black border-none rounded outline-none placeholder:text-stone-800 bg-stone-400"
            value={userName}
            onChange={(e) => addUserName(e)}
          />
        </label>
        <label>
          <span className="block font-medium text-left opacity-80">UserRollNumber</span>
          <input
            type="number"
            placeholder="Enter your rollNumber"
            className="w-full p-1 text-black border-none rounded outline-none placeholder:text-stone-800 bg-stone-400"
            value={userRoll}
            onChange={(e) => addUserRoll(e)}
          />
        </label>
        <button className="block w-full p-1 px-2 mx-auto bg-blue-500 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      <p>
        To see user profile{" "}
        <Link
          to={"/show"}
          className="underline decoration-2 decoration-indigo-500 underline-offset-4"
        >
          Click Here
        </Link>
      </p>
      
    </div>
  );
};

export default Form;
