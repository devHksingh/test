import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../context/formContext";
import { useState } from "react";

const SingleUserDetails = () => {
  const { id } = useParams();
  const { formState, handleUpdateData } = useForm();
  //   const [userName, setUserName] = useState(`${formState.at(index).name}`);
  //   const [userAge, setUserAge] = useState(`${formState.at(index).age}`);
  //   const [userEmail, setUserEmail] = useState(`${formState.at(index).email}`);
  const [userName, setUserName] = useState(`${formState[0].name}`);
  const [userAge, setUserAge] = useState(`${formState[0].age}`);
  const [userEmail, setUserEmail] = useState(`${formState[0].email}`);
  const navigate = useNavigate();
  //   console.log(index);
  const userId = Number(id);
  console.log("userId", userId);
  console.log("------Single User Details formState------ ", formState);

  // const userData = formState.filter((data)=> data.roll === userRoll)
  const userData = formState.filter((data) => data.id === userId);
  //   const userData = formState.at(index);
  console.log("Single User Details ", formState);
  console.log("Single User Details userData:", userData);
  const handleUpdate = () => {
    // handleAddData(userName,userData[0].roll)
    // navigate('/show')
    console.log(userName);
    const id = userData.id;
    console.log("id:", userData.id);
    const name = userName || userData[0].name;
    const age = userAge || userData[0].age;
    const email = userEmail || userData[0].email;
    console.log(
      "Single User Details update function",
      name,
      age,
      email,
      userData.id
    );
    // handleUpdateData(index, name, age, email);
    handleUpdateData(name, age, email, id);
    navigate("/show");
  };
  const handleCancel = () => {
    navigate("/show");
  };
  return (
    <div className="max-w-4xl p-4 mx-auto space-y-4 text-center">
      <h2 className="text-2xl font-medium text-center">User Details</h2>
      {userData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center max-w-md gap-4 p-4 mx-auto border rounded-md"
        >
          <label className="flex flex-col justify-start w-full">
            <span className="block text-left opacity-80">UserName:</span>
            <input
              type="text"
              placeholder={item.name}
              value={userName}
              className="p-1 text-black rounded-md cursor-pointer bg-stone-400 placeholder:text-black"
              onChange={(e) => {
                console.log((e.target.value))
              }}
            />
          </label>
          <label className="flex flex-col justify-start w-full">
            <span className="block text-left opacity-80">UserAge:</span>
            <input
              type="text"
              value={item.age}
              className="p-1 text-black rounded-md cursor-pointer bg-stone-400"
              onChange={(e) => setUserAge(e.target.value)}
            />
          </label>
          <label className="flex flex-col justify-start w-full">
            <span className="block text-left opacity-80">UserEmail:</span>
            <input
              type="text"
              value={item.email}
              className="p-1 text-black rounded-md cursor-pointer bg-stone-400"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>

          {/* <button className="p-1 px-2 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleUpdate}>Update</button> */}
          <div className="flex gap-4">
            <button
              className="p-1 px-2 bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="p-1 px-2 rounded-md bg-rose-500 hover:bg-rose-600"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      ))}
      {/* <div className="flex flex-col items-center justify-center max-w-md gap-4 p-4 mx-auto border rounded-md">
        <label className="flex flex-col justify-start w-full">
          <span className="block text-left opacity-80">UserName:</span>
          <input
            type="text"
            placeholder={userData.name}
            value={userName}
            className="p-1 text-black rounded-md cursor-pointer bg-stone-400 placeholder:text-black"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label className="flex flex-col justify-start w-full">
          <span className="block text-left opacity-80">UserAge:</span>
          <input
            type="text"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
            className="p-1 text-black rounded-md cursor-pointer bg-stone-400"
          />
        </label>
        <label className="flex flex-col justify-start w-full">
          <span className="block text-left opacity-80">UserEmail:</span>
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="p-1 text-black rounded-md cursor-pointer bg-stone-400"
          />
        </label>

        <div className="flex gap-4">
          <button
            className="p-1 px-2 bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="p-1 px-2 rounded-md bg-rose-500 hover:bg-rose-600"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div> */}

      <p className="capitalize ">
        <span className="font-medium text-orange-400 underline underline-offset-4">
          CAUTION
        </span>{" "}
        : Once updated you can not get back old value
      </p>
    </div>
    // <></>
  );
};

export default SingleUserDetails;
