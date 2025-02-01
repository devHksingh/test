import { createContext, useContext, useReducer } from "react";

const formReducer = (formState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "add": {
      console.log("add form context", payload);
      const existingData = formState.find((data) => data.id === payload.id);
      if (existingData) {
        // return formState.map((data) =>
        //   data.roll === payload.roll
        //     ? { name: payload.name, roll: payload.roll }
        //     : data
        // );
        return formState.map((data) =>
          data.id === payload.id
            ? {
                name: payload.name,
                age: payload.age,
                email: payload.email,
                id: payload.id,
              }
            : data
        );
      } else {
        console.log("else", payload);
        // return [...formState, { name: payload.name, roll: payload.roll }];
        return [
          ...formState,
          {
            name: payload.name,
            age: payload.age,
            email: payload.email,
            id: payload.id,
          },
        ];
      }
      // return [
      //   ...formState,
      //   {
      //     name: payload.name,
      //     age: payload.age,
      //     email: payload.email,
      //     id: payload.id,
      //   },
      // ];
    }
    case "remove": {
      // return formState.filter((data) => data.roll !== payload.roll);
      // const index = payload.index;
      // return formState.splice(index, 1);
      const index = payload.index;

      // Use filter to create a new array without mutating the original state
      return formState.filter((_, i) => i !== index);
    }
    case "update": {
      // const index = payload.id;
      console.log("update payload :", payload);
      // formState.splice(index, 1);
      // return [
      //   ...formState,
      //   { name: payload.name, age: payload.age, email: payload.email },
      // ];
      // return formState.map((item, i) =>
      //   i === index
      //     ? { name: payload.name, age: payload.age, email: payload.email }
      //     : item
      // );
      const newArr = formState.filter((data) => data.id !== payload.id);
      return [
        newArr,
        { name: payload.name, age: payload.age, email: payload.email },
      ];
    }
    default:
      return formState;
  }
};

const FormContext = createContext();

// eslint-disable-next-line react/prop-types
export const FormProvider = ({ children }) => {
  const [formState, dispatch] = useReducer(formReducer, []);

  const handleAddData = (name, age, email, id) => {
    dispatch({ type: "add", payload: { name, age, email, id } });
  };
  const handleRemoveData = (index) => {
    dispatch({ type: "remove", payload: { index } });
  };
  const handleUpdateData = (id, name, age, email) => {
    dispatch({ type: "update", payload: { name, age, email, id } });
  };

  return (
    <FormContext.Provider
      value={{ formState, handleAddData, handleRemoveData, handleUpdateData }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
