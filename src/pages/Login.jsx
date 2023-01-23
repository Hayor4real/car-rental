import { useForm } from "react-hook-form";
// import { Button, Form, Row, Col } from "reactstrap";

import "../../src/styles/login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmit = (data) => {
    console.log(data);
    alert("login Sucessful");

    window.location.replace("/");
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col mt-4 col-md-8 offset-md-2">
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
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
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="exampleInputEmail1"
                  {...register("email", {
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email?.type === "pattern" && (
                  <div className="invalid-feedback">email is not valid</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
