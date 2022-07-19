import React from 'react'

const Login = () => {
    return (
            <div className="card w-25 m-5 ">
                <div className="card-body">
                    <h2 className="card-title m-3 text-center ">Login</h2>
                    <input className="m-2" type="text"  placeholder='User Name' />
                    <input className="m-2" type="password" placeholder='Password' /> <br />
                    <button className="btn btn-info m-2">Login</button>
                    <p className="m-2">New user?  <a href="/register">Create an account</a></p>
                </div>
        </div>
    )
}

export default Login;