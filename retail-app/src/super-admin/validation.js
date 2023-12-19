function Validation(data){
    const error={};

        const name_pattern=/^[a-zA-Z]+$/
        const password_pattern=/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/
        const email_patten=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if(data.Username == ""){
            error.Username="Name is required"
        }
        else if(!name_pattern.test(data.Username)){
            error.Username="Name shouldn't include any number"
        }

        if(data.password == ""){
            error.password="Password is required"
        }
        else if(!password_pattern.test(data.password)){
            error.password="At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character"
        }

        if(data.email==""){
            data.email="Email is required"
        }
        else if(!email_patten.test(data.email)){
            error.email="Enter valid email"
        }
        return error;
}
export default Validation;