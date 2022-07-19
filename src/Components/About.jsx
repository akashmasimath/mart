import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className="display-6 fw-bolder text-center">About Us</h1>
                            <hr />
                            <div className=" text-center">
                                <h2>How does e-commerce work</h2> <br />
                                <p>
                                    E-commerce is powered by the internet, where customers can access an online store to browse through, and place orders for products or <br />
                                    services via their own devices. <br /> <br />

                                    As the order is placed, the customer's web browser will communicate back and forth with the server hosting the online store website. <br />
                                    Data pertaining to the order will then be relayed to a central computer known as the order manager -- then forwarded to databases that manage <br />
                                    inventory levels, a merchant system that manages payment information (using applications such as PayPal), and a bank computer -- before circling <br />
                                    back to the order manager. This is to make sure that store inventory and customer funds are sufficient for the order to be processed.  <br />
                                    After the order is validated, the order manager will notify the store's web server, which will then display a message notifying the <br />
                                    customer that their order has been successfully processed. The order manager will then send order data to the warehouse or fulfillment <br />
                                    department, in order for the product or service to be successfully dispatched to the customer. At this point tangible and/or digital <br />
                                    products may be shipped to a customer, or access to a service may be granted.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
