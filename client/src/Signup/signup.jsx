import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from '../SignupValiadation/signupvalidation'
import axios from 'axios'
function Signup() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const handleSubmit =(event) => {
        event.preventDefault()
        //setErrors(validation(values));
        console.log (values)
        //if(errors.name === "" && errors.email === "" && errors.password === ""){
            console.log ("here")
            axios.post('http://localhost:3002/signup',values)
            .then(res => {
                navigate('/');
        }
    )
            .catch(err => console.log(err));
        //}

    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-success vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-up</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="test" placeholder='Enter Name' name='name'
                        onChange= {handleInput} className='form-control rounded-0'/>
                        {errors.name && <p className='text-danger'>{errors.name}</p>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                        onChange= {handleInput} className='form-control rounded-0'/>
                        {errors.email && <p className='text-danger'>{errors.email}</p>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange= {handleInput} className='form-control rounded-0'/>
                        {errors.password && <p className='text-danger'>{errors.password}</p>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Signup</button>
                    <p>You agree to the terms in the policy.</p>
                    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup