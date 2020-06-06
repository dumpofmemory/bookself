import React from 'react';
import './signin-page.component.scss';

export interface SignInPageProps {
  authenticate: (provider: any) => void;
}

const SignInPage = ({ authenticate }: SignInPageProps): JSX.Element => (
  // <div classNameName="signin-page">
  //   <div classNameName="social-icons">
  //     <button classNameName="btn btn-link" onClick={() => authenticate('Facebook')}>
  //       Login with Facebook
  //     </button>
  //     <button classNameName="btn btn-link" onClick={() => authenticate('Twitter')}>
  //       Login with Twitter
  //     </button>
  //     <button classNameName="btn btn-link" onClick={() => authenticate('Google')}>
  //       Login with Google
  //     </button>
  //   </div>
  // </div>
  <section className="SignInPage">
    <div className="content">
      <header>
        <h1>BookSelf</h1>
        <h6>Sign in with</h6>
      </header>
      <section>
        <div className="social-login">
          <button onClick={() => authenticate('Google')}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google"
              width="20"
            />
            <span>Google</span>
          </button>
          <button onClick={() => authenticate('Twitter')}>
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/twitter-logo-svg-vector.svg"
              alt="twitter"
              width="20"
            />
            <span>Twitter</span>
          </button>
        </div>
        <form action="" className="login-form">
          <div className="input-group">
            <input type="text" placeholder="Username or Email" id="username" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" id="password" />
          </div>
          <div className="input-group">
            <button>Login</button>
          </div>
        </form>
      </section>
      <footer>
        <a href="#" title="Forgot Password">
          Forgot Password
        </a>
      </footer>
    </div>
  </section>
);

export default SignInPage;
