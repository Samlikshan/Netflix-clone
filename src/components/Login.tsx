import React, { useContext, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

  const { login } = useContext(AuthContext); // Get the login function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state

  const navigate = useNavigate()

  const goToSignUp = () => {
    navigate('/register')
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Start loading state

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set the user in context
      if (login) {
        login({ email: user.email, uid: user.uid });
      }

      navigate('/')

      console.log('User signed in:', user);
    } catch (err: any) {
      setError('Invalid email or password. Please try again.');
      console.error(err.message);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <>
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/signupBg.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Login Form */}
        <div className="relative z-10 bg-black bg-opacity-80 p-8 rounded-md w-96 text-white">
          {/* Netflix Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix Logo"
            className="w-32 mb-6"
          />

          <h2 className="text-3xl font-bold mb-6">Sign In</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email or mobile number"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gray-500"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gray-500"
              required
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded font-bold disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            {/* OR Button */}
            <div className="text-center">
              <span className="text-gray-400">OR</span>
            </div>
            <button
              type="button"
              className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded text-white"
            >
              Use a sign-in code
            </button>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
          </form>

          {/* Footer */}
          <div className="text-gray-400 text-sm mt-6">
            New to Netflix?{' '}
            <a onClick={goToSignUp} className="text-white hover:underline font-semibold">
              Sign up now.
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
