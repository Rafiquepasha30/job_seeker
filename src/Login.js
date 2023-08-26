import React from 'react'
import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const handleSubmit = (event) =>{
        event.preventDefault();
        const errors = validate();
        setErrors(errors);
        if(Object.keys(errors).length===0){
            alert('done')
        }

    } 

    const validate =()=>{
        const error ={};
        
        if(!email){
            error.email = 'Email is Required';

        }else if(/\S+@\S+\.\S+/.test(email)){
            error.email = 'email not matched';
            
        }else{error.email = '';}

        if(!password){
            error.password = 'password is Required';

        }else if(password.length < 8){
            error.password = 'password not matched';
            
        }else{error.password = '';}

        return error;
    }
  return (
    <div className='container'>
        <din className='form-container'>
            <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter a Name'/>
                {errors.email && <div className='error'>{errors.email}</div>}
            </div>            
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter a Password' />
                {errors.password && <div className='error'>{errors.password}</div>
}
            </div>
            <button>Login</button>

          </form>
          <a href='/SingUp'>SingUp</a>
        </din>
      
    </div>
  )
}

export default Login
