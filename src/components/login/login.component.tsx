import React from 'react';

export interface LoginProps {
  authenticate: (provider: any) => void;
}

const Login = ({ authenticate }: LoginProps): JSX.Element => (
  <>
    <button className="btn btn-link" onClick={() => authenticate('Facebook')}>
      Login with Facebook
    </button>
    <button className="btn btn-link" onClick={() => authenticate('Twitter')}>
      Login with Twitter
    </button>
    <button className="btn btn-link" onClick={() => authenticate('Google')}>
      Login with Google
    </button>
  </>
);

export default Login;
