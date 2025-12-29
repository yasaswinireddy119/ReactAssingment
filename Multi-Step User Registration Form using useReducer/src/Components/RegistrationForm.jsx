import { useReducer } from "react";


const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  isSubmitted: false,
};


function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function RegistrationForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { step, formData, isSubmitted } = state;

  /* ---------------- HANDLER ---------------- */
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };
  if (step === 1) {
    return (
      <div>
        <h3>Step 1: Personal Details</h3>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />

        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
          Next
        </button>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div>
        <h3>Step 2: Account Details</h3>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />

        <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
          Back
        </button>

        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
          Next
        </button>
      </div>
    );
  }
  if (step === 3 && !isSubmitted) {
    return (
      <div>
        <h3>Step 3: Review & Submit</h3>

        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Username: {formData.username}</p>
        <p>Password: {formData.password}</p>

        <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
          Back
        </button>

        <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
          Submit
        </button>
      </div>
    );
  }
  if (isSubmitted) {
    return (
      <div>
        <h2>Form Submitted Successfully 🎉</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }
}

export default RegistrationForm;

