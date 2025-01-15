import { createContext, useContext, useReducer } from "react";

const formReducer = (formState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "add": {
      console.log(payload);
      const existingData = formState.find((data) => data.roll === payload.roll);
      if (existingData) {
        return formState.map((data) =>
          data.roll === payload.roll
            ? { name: payload.name, roll: payload.roll }
            : data
        );
      } else {
        console.log("else",payload);
        return [...formState, { name: payload.name, roll: payload.roll }];
      }
    }
    case "remove": {
      return formState.filter((data) => data.roll !== payload.roll);
    }
    default:
      return formState;
  }
};

const FormContext = createContext();

// eslint-disable-next-line react/prop-types
export const FormProvider = ({ children }) => {
  const [formState, dispatch] = useReducer(formReducer, []);

  const handleAddData = (name, roll) => {
    dispatch({ type: "add", payload: { name, roll } });
  };
  const handleRemoveData = (name, roll) => {
    dispatch({ type: "remove", payload: { name, roll } });
  };

  return (
    <FormContext.Provider
      value={{ formState, handleAddData, handleRemoveData }}
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
