import * as yup from "yup" ;
export const formValidation = yup.object({
    fname:yup.string().min(3).max(25).required("plz enter your first name"),
    lname:yup.string().min(3).max(25).required("plz enter your last name"),
    address:yup.string().min(3).required("plz enter your address"),
    companyN:yup.string().required("plz enter your company name"),
    email:yup.string().email().required("plz enter your email"),
    month:yup.string().required("plz enter month"),
    date:yup.date().required("plz enter date"),
    year:yup.number().required("plz enter year"),
    password:yup.string().min(4).max(7).required("plz enter password"),
    confirmPassword:yup.string().required().oneOf([yup.ref("password"),null],"password must match"),

    


});