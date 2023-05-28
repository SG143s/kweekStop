import './Login.css';

const Login = (props) => {
    return (
        <div className="login-page">
            <div className="login-header">
                <div className='login-header-container'>
                    <p className="header">Log in</p>
                    <div className="input-login">
                        <form>
                            <label><p>Username</p>
                                <input type="text" name="username" placeholder="username" />
                            </label>
                            <label><p>Password</p>
                                <input type="text" name="password" placeholder="at least 6 characters" />
                            </label>
                                <button className="login-button">Continue</button>
                        </form>
                    </div>
                    <div className="detail">
                        <p>By creating an account, you agree to Kweekstop’s <a>Conditions of Use </a> and <a>Privacy Notice.</a></p>
                    </div>
                    <div className="have-account">
<<<<<<< HEAD
                        <p>New Customer? <a href='http://localhost:3000/register'>Sign up</a></p>
=======
                        <p>New Customer? <a>Sign up</a></p>
>>>>>>> e653d0420d8024abda3e13e992abbc9ec873e8d1
                    </div>
                </div>
            </div>
            <div className="login-footer">
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

export default Login;