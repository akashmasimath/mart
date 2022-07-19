import React from 'react'

const Contact = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Contact</h1>
                    <hr /> <br />
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div> <br />
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div> <br />
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form> <br />
                    <div className="d-flex justify-content-center fs-3">
                        <i className="fa fa-facebook-official m-2" aria-hidden="true"></i>
                        <i className="fa fa-instagram m-2" aria-hidden="true"></i>
                        <i className="fa fa-twitter m-2" aria-hidden="true"></i>
                        <i className="fa fa-github m-2" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
