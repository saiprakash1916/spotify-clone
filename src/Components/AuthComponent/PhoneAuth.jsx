import React, { Component, Fragment } from 'react';
import firbase from '../../firebase';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
class PhoneAuth extends Component {
    state = {
        phone: "",
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        try {
            e.preventDefault();
            let captchaVerifier = new firbase.auth.RecaptchaVerifier("recaptcha-container");
            firbase.auth().signInWithPhoneNumber(this.state.phone, captchaVerifier)
                .then(confirmationResult => {
                let otp = window.prompt('please enter valid otp');
                confirmationResult.confirm(otp).then(result => {
                    toast.success(`Successfully ${this.state.phone}logged in`)
                    this.props.history.push("/");
                    console.log(result.user)
                })
            }).catch(err=>{toast.error(err.message)})
        } catch (err) { };
    }
    render() { 
        return (
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4>Enter phone number</h4>
                            <form onSubmit={this.handleSubmit}>
                             <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter your Mobile number" name="phone" value={ this.state.phone} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="checkdata"/> Remember me
                             </div>
                            <div id="recaptcha-container"></div>
                            <div className="form-group">
                                <button className="btn btn-success btn-block">Next</button>
                            </div>
                            </form>
                    </article>
                </section>
                
            </Fragment>
         );
    }
}
 
export default withRouter(PhoneAuth);