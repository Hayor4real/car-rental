import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const formSubmit = (data) => {
    console.log(data);

    alert("Registration Sucessful");

    window.location.replace("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-4 col-md-8 offset-md-2">
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="exampleInputEmail1"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <div className="invalid-feedback">Firstname is required</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="exampleInputEmail1"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <div className="invalid-feedback">Last Names is required</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="exampleInputEmail1"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <div className="invalid-feedback">username is required</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Age
              </label>
              <input
                type="number"
                className={`form-control ${errors.age ? "is-invalid" : ""}`}
                id="exampleInputEmail1"
                {...register("age", { min: 18, max: 60, valueAsNumber: true })}
              />
              {errors.age?.type === "min" && (
                <div className="invalid-feedback">minimum age is 18</div>
              )}
              {errors.age?.type === "max" && (
                <div className="invalid-feedback">maximum age is 60</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="exampleInputEmail1"
                {...register("email", {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email?.type === "pattern" && (
                <div className="invalid-feedback">
                  Not a valid email address
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="exampleInputEmail1"
                {...register("password", { minLength: 5, maxLength: 20 })}
              />
              {errors.password?.type === "minLength" && (
                <div className="invalid-feedback">
                  The password minimum is five characters
                </div>
              )}
              {errors.password?.type === "maxLength" && (
                <div className="invalid-feedback">
                  The password maximum is twenty characters
                </div>
              )}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
