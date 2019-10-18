import React from 'react';

export interface LoginProps {
  authenticate: (provider: any) => void;
}

const Login = ({ authenticate }: LoginProps): JSX.Element => (
  <>
    <button className="btn btn-link" onClick={() => authenticate('Facebook')}>
      Login with facebook
    </button>
    <button className="btn btn-link" onClick={() => authenticate('Twitter')}>
      Login with twiiter
    </button>
  </>
);

export default Login;
