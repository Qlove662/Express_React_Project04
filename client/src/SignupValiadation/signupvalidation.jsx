function validation (values) {
    let errors = {}
    const email_pattern = /^[^\s@]=@[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/

    if (values.name ==="") {
        errors.name = "Name is required"
    }
    else {
        errors.name = ""
    }
    if (values.email ==="") {
        errors.email = "Email is required"
    } 
    else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid Email"
    }
    else {
        errors.email = ""
    }
    
    if(values.password ==="") {
        errors.password = "Password is required"
    }
    else if (!password_pattern.test(values.password)) {
        errors.password = "Password didn't match"
    }
    else {
        errors.password = ""
    }
    return errors;
}

export default validation;