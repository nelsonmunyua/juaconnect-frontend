import { useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthToggle from '../components/auth/AuthToggle';
import { authService } from '../services/authService';

const LandingPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError('');
    
    try {
      const data = isSignUp 
        ? await authService.signUp({ name: formData.name, email: formData.email, password: formData.password })
        : await authService.signIn({ email: formData.email, password: formData.password });
      
      localStorage.setItem('token', data.token);
      console.log('Success:', data);
    } catch (err) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400">
      <div className="w-full max-w-md p-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl">
          <h1 className="text-center text-indigo-600 text-4xl font-bold mb-2">JuaConnect</h1>
          <h2 className="text-center text-gray-800 text-2xl font-semibold mb-8">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}
          <AuthForm isSignUp={isSignUp} onSubmit={handleSubmit} />
          {loading && <p className="text-center text-gray-600 mt-4">Loading...</p>}
          <AuthToggle isSignUp={isSignUp} onToggle={() => setIsSignUp(!isSignUp)} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
