import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = ({ activePage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitData = async (data) => {
    if (activePage === "fanSignup") {
      await fetch("http://wren.in:3200/api/sign-up/fan", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      await fetch("http://wren.in:3200/api/sign-up/talent", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <div className="form-group">
            <label htmlFor="firstName" className="label_text">
              First name <span>*</span>
            </label>
            <input
              id="firstName"
              className="form-control form-rounded"
              placeholder="First name"
              {...register("first_name", { required: true })}
            />
            <div className="error mt-2">
              {errors.first_name && <span>This field is required</span>}
            </div>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="larstName" className="label_text">
              Last name <span>*</span>
            </label>
            <input
              id="larstName"
              className="form-control form-rounded"
              placeholder="Last name"
              {...register("last_name", { required: true })}
            />
            <div className="error mt-2">
              {errors.last_name && <span>This field is required</span>}
            </div>
          </div>

          <div className="form-group mt-4">
            <label htmlFor="userName" className="label_text">
              User Name<span>*</span>
            </label>
            <input
              id="userName"
              className="form-control form-rounded"
              placeholder="User name"
              {...register("username", { required: true })}
            />
            <div className="error mt-2">
              {errors.username && <span>This field is required</span>}
            </div>
          </div>

          <div className="form-group mt-4">
            <label htmlFor="email" className="label_text">
              Email <span>*</span>
            </label>
            <input
              type="text"
              className="form-control form-rounded"
              placeholder="email"
              id="email"
              {...register("email", {
                required: true,
                pattern:
                  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
              })}
            />

            {errors.email && (
              <div className="error mt-2">
                <>
                  {errors.email.type == "required" && (
                    <span>This field is required</span>
                  )}
                  {errors.email.type == "pattern" && (
                    <span>Enter A valid Email Address</span>
                  )}
                </>
              </div>
            )}
          </div>

          <div className="form-group mt-4">
            <label htmlFor="password" className="label_text">
              Password <span>*</span>
            </label>
            <input
              type="password"
              id="password"
              className="form-control form-rounded"
              placeholder="password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              })}
            />
            {errors.password && (
              <div className="error mt-2">
                <>
                  {errors.password.type == "required" && (
                    <span>This field is required</span>
                  )}
                  {errors.password.type == "pattern" && (
                    <span>
                      Password Should be of Minimum eight characters, at least
                      one letter, one number and one special character:
                    </span>
                  )}
                </>
              </div>
            )}
          </div>

          <div className="form-group mt-3">
            {/* <div className="form-check"> */}
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              I agree to the{" "}
              <span className="term_condition">Terms And condition</span>
            </label>
            {/* </div> */}
          </div>

          <button type="submit" className="submit_btn">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
export default SignupForm;
