import { useFormik } from "formik";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { formValidation } from "../schemas";
const initialValues = {
  fname: "",
  lname: "",
  companyN: "",
  email: "",
  address: "",
  month: "",
  date: "",
  year: "",
  confirmPassword:"",
  password:"",
};
const Forms = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:formValidation,
    onSubmit: (values) => {
      console.log(values, "values");
    },
  });

  return (
    <>
      <div className="d-flex  justify-content-center align-items-center w-100  vh-100 ">
        <div className=" border">
          <Container className="p-5">
            <Row className="text-center pt-5">
              <h3 style={{color:"#21b573"}}>Your Event</h3>
            </Row>
            <Row className="text-center p-2" style={{ background: "" }}>
              <h5 className="p-3" style={{background:"#ebfaf2"}}>Online Registration</h5>
            </Row>
            <form onSubmit={handleSubmit} className="p-5">
              <Row className="justify-between">
                <Col>
                  <div>
                    <label htmlFor="fname">First name:</label>
                  </div>
                  <input
                    type="name"
                    id="fname"
                    name="fname"
                    value={values.fname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="first name"
                    autoComplete="off"
                  />
                  {<p className="text-danger">{errors.fname}</p>}
                </Col>
                <Col>
                  {" "}
                  <div>
                    <label htmlFor="fname">Last name:</label>
                  </div>
                  <input
                    type="name"
                    id="lname"
                    name="lname"
                    value={values.lname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="last name"
                    autoComplete="off"
                  />
                   {<p className="text-danger">{errors.lname}</p>}
                </Col>
              </Row>
              <Row className="justify-between">
                <Col>
                  <div>
                    <label htmlFor="password">password:</label>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="password"
                    autoComplete="off"
                  />
                  {<p className="text-danger">{errors.password}</p>}
                </Col>
                <Col>
                  {" "}
                  <div>
                    <label htmlFor="fname">confirm password:</label>
                  </div>
                  <input
                    type="password"
                    id="confirm password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="confirm password"
                    autoComplete="off"
                  />
                   {<p className="text-danger">{errors.confirmPassword}</p>}
                </Col>
              </Row>
              <Row>
                <div>
                  <label htmlFor="fname">company name:</label>
                </div>
                <input
                  type="text"
                  id="companyN"
                  name="companyN"
                  value={values.companyN}
                  onBlur={handleBlur}
                    onChange={handleChange}
                  placeholder="company name"
                  autoComplete="off"
                />
                 {<p className="text-danger">{errors.companyN}</p>}
              </Row>
              <Row>
                <div>
                  <label htmlFor="fname">Email:</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                    onChange={handleChange}
                  placeholder="email"
                  autoComplete="off"
                />
                   {<p className="text-danger">{errors.email}</p>}
              </Row>
              <Row>
                <div>
                  <label htmlFor="fname">Physical adderss:</label>
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={values.address}
                  onBlur={handleBlur}
                    onChange={handleChange}
                  placeholder="adderss"
                  autoComplete="off"
                />
                {<p className="text-danger">{errors.address}</p>}
              </Row>
              <Row className="justify-between">
              <div>Date of Birth</div>
                <Col>
                  <div>
                  
                  </div>
                  <input
                    type="month"
                    id="month"
                    name="month"
                    value={values.month}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="month"
                    autoComplete="off"
                  />
                  {<p className="text-danger">{errors.month}</p>}
                </Col>
                <Col>
                  {" "}
                  <div>
                  
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={values.date}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Day"
                    autoComplete="off"
                  />
                  {<p className="text-danger">{errors.date}</p>}
                </Col>
                <Col>
                  {" "}
                  <div>
                    
                  </div>
                  <input
                    type="number"
                    id="number"
                    name="year"
                    autoComplete="off"
                    value={values.year}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={"Year"}
                  />
                  {<p className="text-danger">{errors.day}</p>}
                </Col>
              </Row>
              <div className="p-5">
                {" "}
                <button type="submit" id="submit" name="submit">
                  submit
                </button>
              </div>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Forms;
