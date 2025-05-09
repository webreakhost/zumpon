import React from 'react'

const Contactinfo = () => {
  return (
    <section className="contact-section">
    <div className="row gutter-lg pb-3">
        <div className="col-lg-6 mb-8">
            <h4 className="title mb-3">People usually ask these</h4>
            <div className="accordion accordion-bg accordion-gutter-md accordion-border">
                <div className="card">
                    <div className="card-header">
                        <a href="#collapse1" className="collapse">How can I cancel my order?</a>
                    </div>
                    <div id="collapse1" className="card-body expanded">
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid 
                            idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler 
                            isque felis. Vel pretium.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <a href="#collapse2" className="expand">Why is my registration delayed?</a>
                    </div>
                    <div id="collapse2" className="card-body collapsed">
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid 
                            idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler 
                            isque felis. Vel pretium.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <a href="#collapse3" className="expand">What do I need to buy products?</a>
                    </div>
                    <div id="collapse3" className="card-body collapsed">
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid 
                            idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler 
                            isque felis. Vel pretium.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <a href="#collapse4" className="expand">How can I track an order?</a>
                    </div>
                    <div id="collapse4" className="card-body collapsed">
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid 
                            idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler 
                            isque felis. Vel pretium.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <a href="#collapse5" className="expand">How can I get money back?</a>
                    </div>
                    <div id="collapse5" className="card-body collapsed">
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in
                            metus vulp utate eu sceler isque felis. Vel pretium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-8">
            <h4 className="title mb-3">Send Us a Message</h4>
            <form className="form contact-us-form" action="#" method="post">
                <div className="form-group">
                    <label for="username">Your Name</label>
                    <input type="text" id="username" name="username"
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="email_1">Your Email</label>
                    <input type="email" id="email_1" name="email_1"
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" cols="30" rows="5"
                        className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-dark btn-rounded">Send Now</button>
            </form>
        </div>
    </div>
</section>
  )
}

export default Contactinfo
