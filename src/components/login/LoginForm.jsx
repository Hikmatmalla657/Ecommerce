import React, { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

function LoginForm({ mode = 'login' }) {

    const { isLoggedIn, login, setEmail, setPassword, email, password, fullName, setFullName } = useAuth();
    const { darkMode } = useTheme();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignup, setIsSignup] = useState(mode === 'signup');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      setIsSignup(mode === 'signup');
    }, [mode]);

    if (isLoggedIn) {
      return <Navigate to="/" replace />;
    }

    function onSubmit(event) {
        event.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        if (isSignup) {
            if (!fullName) {
                setError('Please enter your full name.');
                return;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match.');
                return;
            }
        }

        login();
        navigate('/');

        setEmail('');
        setPassword('');
        setFullName('');
        setConfirmPassword('');
    }

    function setEmailFn(event) {
        setEmail(event.target.value);
    }

    function setPasswordFn(event) {
        setPassword(event.target.value);
    }
    function setFullNameFn(event) {
        setFullName(event.target.value);
    }
    function setConfirmPasswordFn(event) {
        setConfirmPassword(event.target.value);
    }

  return (
   <div className={`min-h-screen flex items-center justify-center p-4 ${darkMode ? 'bg-slate-950' : 'bg-linear-to-br from-purple-600 via-pink-500 to-orange-400'}`}>
     <form onSubmit={onSubmit} className={`max-w-md w-full backdrop-blur-sm p-10 rounded-2xl shadow-2xl space-y-6 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white/95'}`}> 

     <div className="text-center mb-8">
       <h2 className="text-4xl font-extrabold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">{isSignup ? 'Create your account' : 'Welcome Back'}</h2>
       <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>{isSignup ? 'Sign up to start shopping.' : 'Login to continue your journey'}</p>
     </div>

     {isSignup && (
       <div>
         <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>Full Name</label>
         <input type='text' placeholder='John Doe' onChange={setFullNameFn} value={fullName} className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${darkMode ? 'border-slate-700 bg-slate-800 text-white placeholder-slate-400' : 'border-gray-200 bg-white text-gray-900 placeholder-gray-500'}`} />
       </div>
     )}

     <div>
       <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>Email</label>
       <input type='email' placeholder='abc@gmail.com' onChange={setEmailFn} value={email} className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${darkMode ? 'border-slate-700 bg-slate-800 text-white placeholder-slate-400' : 'border-gray-200 bg-white text-gray-900 placeholder-gray-500'}`} />
     </div>
     
     <div>
       <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>Password</label>
       <input type='password' placeholder='Enter your password' onChange={setPasswordFn} value={password} className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${darkMode ? 'border-slate-700 bg-slate-800 text-white placeholder-slate-400' : 'border-gray-200 bg-white text-gray-900 placeholder-gray-500'}`} />
     </div>
     {isSignup && (
       <div>
         <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-200' : 'text-gray-700'}`}>Confirm Password</label>
         <input type='password' placeholder='Confirm your password' onChange={setConfirmPasswordFn} value={confirmPassword} className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${darkMode ? 'border-slate-700 bg-slate-800 text-white placeholder-slate-400' : 'border-gray-200 bg-white text-gray-900 placeholder-gray-500'}`} />
       </div>
     )}

     {error && <div className={`text-sm font-medium ${darkMode ? 'text-rose-300' : 'text-red-600'}`}>{error}</div>}

     <button type='submit' className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">{isSignup ? 'Sign Up Now' : 'Login Now'}</button>

      <div className={`text-center ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
        {isSignup ? 'Already have an account?' : 'New here?'}{' '}
        <button
          type="button"
          onClick={() => {
            navigate(isSignup ? '/login' : '/signup');
            setError('');
            setConfirmPassword('');
          }}
          className="font-semibold text-indigo-500 hover:text-indigo-600"
        >
          {isSignup ? 'Login' : 'Create one'}
        </button>
      </div>
     </form>
   </div>
  )
}

export default LoginForm
