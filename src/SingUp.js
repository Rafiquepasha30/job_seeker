import React from 'react'
import './SingUp.css'

const SingUp = () => {
  return (
    <div className='container'>
        <div className='form-container'>
            <h2>SingUp</h2>
            <form>
               <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter Your Name'></input>
               </div>

               <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='text' placeholder='Enter Email'></input>
               </div>

               <div className='form-group'>
                <label htmlFor='name'>Phone </label>
                <input type='text' placeholder='Enter Your Number'></input>
               </div>
               <button>SingUp</button>
            </form>

        </div>
      
    </div>
  )
}

export default SingUp
