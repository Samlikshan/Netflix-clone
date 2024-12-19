import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState('');

  const navigate = useNavigate()
  const goToLogIn = () => {
    navigate('/login')
  }


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (password != confirmPassword) {
        setError('Password deosn`t match')
        return
      }
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (err) {
      setError(err.message);
      console.log(err.message)
    }
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/signupBg.jpg')", // Replace with background collage
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Sign Up Form */}
      <div className="relative z-10 bg-black bg-opacity-80 p-8 rounded-md w-96 text-white">
        {/* Netflix Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" // Replace with Netflix logo
          alt="Netflix Logo"
          className="w-32 mb-6"
        />

        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gray-500"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gray-500"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded font-bold"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="text-gray-400 text-sm mt-6">
          Already have an account?{' '}
          <a onClick={goToLogIn} className="text-white hover:underline font-semibold">
            Sign In
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
  );
};

export default SignUp;
