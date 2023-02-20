import './SignupScreen.scss';

const SignupScreen = () => {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignupScreen;
