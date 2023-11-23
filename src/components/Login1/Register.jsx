import React, { useState } from "react";

export default function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Username.";
            break;
          }
          if (!isValidEmail(value)) {
            stateObj[name] = "Email is invalid";
            break;
          }

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }

        // case "checkbox":
        //   console.log(value);
        //   break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  function togglePasswordVisibility(e) {
    e.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  }

  const validatePasswordCondition = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password);
  };

  const handleCheckBox = (e) => {
    // e.target.value = false;
    // console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      {/* <video
        className="videoTag absolute top-0 left-0 w-[100vw] h-[100vh] object-cover z-[-999]"
        autoPlay
        loop
        muted
      >
        <source src={sample} type="video/mp4" />
      </video> */}
      <section className="bg-gradient-to-r to-transparent">
        <div className="flex mt-[-40px] flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-[3rem] font-semibold text-white mr-[10px]"
          >
            <img
              className="w-[150px] h-[150px] "
              src="https://media.giphy.com/media/gsngDxUt8J1hDWVm5d/giphy.gif"
              alt="logo"
            />
            Register
            <img
              className="w-[150px] h-[150px] "
              src="https://media.giphy.com/media/gsngDxUt8J1hDWVm5d/giphy.gif"
              alt="logo"
            />
          </a>

          <div className="w-full blur-[3px] backdrop-sepia-0 drop-shadow-xl bg-white sm:filter-none z-[1] rounded-[20px]  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-black font-bold  md:text-2xl ">
                Create and account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[1.2rem]  text-black text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" outline-none backdrop-sepia-0 bg-white/20 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.email && (
                    <span className="err absolute text-red-500">
                      {error.email}
                    </span>
                  )}
                </div>

                <div className="relative  mx-auto mt-20 mb-40">
                  <label
                    htmlFor="password"
                    className="block text-[1.2rem] mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="••••••••"
                    className=" outline-none backdrop-sepia-0 bg-white/20 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="password"
                    value={input.password}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 top-[20px] text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                  {error.password == "" ? (
                    <p className="absolute err text-blue-600 text-[14px]">
                      At least 6 characters including 1 number
                    </p>
                  ) : (
                    <p className="absolute err text-red-500">
                      {error.password}
                    </p>
                  )}
                </div>
                <div className="relative mx-auto mt-[10px]">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-[1.2rem] text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="••••••••"
                    className=" outline-none backdrop-sepia-0 bg-white/20 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="confirmPassword"
                    onChange={onInputChange}
                    onBlur={validateInput}
                    value={input.confirmPassword}
                  />

                  <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 top-[20px] text-gray-600"
                    onClick={togglePasswordVisibility}
                  ></button>
                  {error.confirmPassword && (
                    <span className="err absolute text-red-500 w-[500px] bottom-[-20px] left-[0px]">
                      {error.confirmPassword}
                    </span>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      nane="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                      // value={true}
                      onChange={handleCheckBox}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
