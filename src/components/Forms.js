import { Formik ,Form ,Field} from "formik";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { formValidation } from "../schemas";

// const initialValues = {
//   fname: "",
//   lname: "",
//   companyN: "",
//   email: "",
//   address: "",
//   month: "",
//   date: "",
//   year: "",
//   confirmPassword:"",
//   password:"",
// };
const Forms = () => {
//   const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
//     initialValues: initialValues,
//     validationSchema:formValidation,
//     onSubmit: (values) => {
//       console.log(values, "values");
//     },
//   });

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
            <Formik initialValues={{
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
       }}
       validationSchema={formValidation}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
        <Form  className="p-5">
              <Row className="justify-between">
                <Col>
                  <div>
                    <label htmlFor="fname">First name:</label>
                  </div>
                  
                  <Field
                    type="name"
                    id="fname"
                    name="fname"
                    
                    
                    placeholder="first name"
                 
                  />
                      {errors.fname && touched.fname ? (
             <p className="text-danger">{errors.fname}</p>
           ) : null}
                </Col>
                <Col>
                  {" "}
                  <div>
                    <label htmlFor="fname">Last name:</label>
                  </div>
                  <Field
                    type="name"
                    id="lname"
                    name="lname"
                    placeholder="last name"
                   
                  />
                   {errors.lname && touched.lname ? (
             <p className="text-danger">{errors.lname}</p>
           ) : null}
                </Col>
              </Row>
              <Row className="justify-between">
                <Col>
                  <div>
                    <label htmlFor="password">password:</label>
                  </div>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                 
                  />
                   {errors.password && touched.password? (
             <p className="text-danger">{errors.password}</p>
           ) : null}
                </Col>
                <Col>
                  {" "}
                  <div>
                    <label htmlFor="fname">confirm password:</label>
                  </div>
                  <Field
                    type="password"
                    id="confirm password"
                    name="confirmPassword"
                    placeholder="confirm password"
                
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
             <p className="text-danger">{errors.confirmPassword}</p>
             ) : null}
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
                  placeholder="company name"
                 
                />
                   {errors.companyN&& touched.companyN ? (
             <p className="text-danger">{errors.companyN}</p>
             ) : null}
              </Row>
              <Row>
                <div>
                  <label htmlFor="fname">Email:</label>
                </div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
               
                />
                   {errors.email&& touched.email ? (
             <p className="text-danger">{errors.email}</p>
             ) : null}
              </Row>
              <Row>
                <div>
                  <label htmlFor="fname">Physical adderss:</label>
                </div>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  placeholder="adderss"
                
                />
                  {errors.address&& touched.address? (
             <p className="text-danger">{errors.address}</p>
             ) : null}
              </Row>
              <Row className="justify-between">
              <div>Date of Birth</div>
                <Col>
                  <div>
                  
                  </div>
                  <Field
                    type="month"
                    id="month"
                    name="month"
                    placeholder="month"
                    
                  />
                  {errors.month&& touched.month? (
             <p className="text-danger">{errors.month}</p>
             ) : null}
                </Col>
               
                <Col>
                  {" "}
                  <div>
                  
                  </div>
                  <Field
                    type="date"
                    id="date"
                    name="date"
                    placeholder="Day"
                   
                  />
                   {errors.date&& touched.date? (
             <p className="text-danger">{errors.date}</p>
             ) : null}
                </Col>
                <Col>
                  {" "}
                  <div>
                    
                  </div>
                  <input
                    type="number"
                    id="number"
                    name="year"
                    placeholder={"Year"}
                  />
                    {errors.year&& touched.year? (
             <p className="text-danger">{errors.year}</p>
             ) : null}
                </Col>
              </Row>
              <div className="p-5">
                {" "}
                <button type="submit" id="submit" name="submit">
                  submit
                </button>
              </div>
            </Form>
       )}
            </Formik>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Forms;
