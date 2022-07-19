import React from 'react'

function Register() {
    return (
        <div className="card w-25 m-5 ">
            <div className="card-body">
                <h2 className="card-title m-3 text-center ">Register</h2>
                <input className="m-2" type="text" placeholder='First Name' />
                <input className="m-2" type="text" placeholder='Last Name' />
                <input className="m-2" type="number" placeholder='Mobile Number' />
                <input className="m-2" type="password" placeholder='Password' /> <br />
                <input className="m-2" type="password" placeholder='Confirm Password' /> <br />
                <button className="btn btn-info m-2">Register</button>
                <p className="m-2">User? <a href="/login">Login</a></p>
            </div>
        </div>

    )
}

export default Register;