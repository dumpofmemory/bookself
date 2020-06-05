import React from 'react';

export interface SignInPageProps {
  authenticate: (provider: any) => void;
}

const SignInPage = ({ authenticate }: SignInPageProps): JSX.Element => (
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

export default SignInPage;
