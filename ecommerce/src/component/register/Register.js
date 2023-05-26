import './Register.css';

const Register = (props) => {
    return (
        <div className="register-page">
            <div className="register-header">
                <div className='register-header-container'>
                    <p className="header">Sign Up</p>
                    <div className="input-register">
                        <form>
                            <label><p>Your name</p>
                                <input type="text" name="username" placeholder="First and last name" />
                            </label>
                            <label><p>Mobile number or email </p>
                                <input type="text" name="username" placeholder="First and last name" />
                            </label>
                            <label><p>Password</p>
                                <input type="text" name="password" placeholder="At least 6 characters" />
                            </label>
                            <p className='password-notes'>Passwords must be at least 6 characters.</p>
                            <label><p>Re-enter password</p>
                                <input type="text" name="password" placeholder="At least 6 characters" />
                            </label>
                                <button className="register-button">Continue</button>
                        </form>
                    </div>
                    <div className="detail">
                        <p>By creating an account, you agree to Kweekstop’s <a>Conditions of Use </a> and <a>Privacy Notice.</a></p>
                    </div>
                    <div className="have-account">
                        <p>Already have an account? <a>Sign in</a></p>
                    </div>
                </div>
            </div>
            <div className="register-footer">
                <hr></hr>
                <div className="help">
                    <p>Conditions of Use</p>
                    <p>Privacy Notice</p>
                    <p>Help</p>
                </div>
                <div className="cr">
                    <p>© 2023 Hanna Faqih Nizma Dyandra Ariq Wawan </p>
                </div>
            </div>
        </div>
    )
};

export default Register;