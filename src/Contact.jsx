import React, { useState } from 'react'

const Contact = () => {

    const [intialvalue, setValue] = useState({
        name: '',
        phone: '',
        msg: "",
        email: ""
    });

    const InputValue = (event) => {

        const { name, value } = event.target;
        setValue((preValue) => {
            return {
                ...preValue,
                [name]: value,

            }

        })

    }

    const formsubmit = (event) => {
      //  event.preventDefault();

    }

    return (
        <>

            <div className="row justify-content-center my-5">
                <div className="col-6">
                    <h1 className='text-center'>Contact Us</h1>
                    <form onSubmit={formsubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" name='name'  onChange={InputValue} placeholder="Enter Your name" className="form-control" id="name" aria-describedby="nameHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phone" className="form-label">Phone</label>
                            <input type="text" name='Phone' onChange={InputValue}  placeholder='Ener your Phone number' className="form-control" id="Phone"  />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type="email" name='Email'  onChange={InputValue}     placeholder='Enter your email' className="form-control" id="Email" aria-describedby="EmailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Msg" className="form-label">Message</label>
                            <textarea name="Msg"  onChange={InputValue} id="Msg" cols="30" rows="5" className='form-control'></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit form</button>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Contact;