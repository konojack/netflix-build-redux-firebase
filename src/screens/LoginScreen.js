import React, { useState } from 'react';
import './LoginScreen.scss';
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    setSignIn(true);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="./netflix-logo.png"
          alt="logo"
          className="loginScreen__logo"
        />
        <button className="loginScreen__button" onClick={handleSignin}>
          Sign In
        </button>

        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button className="loginScreen__getStarted">GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
