import { useState } from 'react';
import { validateEmail, validatePassword, validateName, passwordsMatch } from '../../utils/validation';

const AuthForm = ({ isSignUp, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ...(isSignUp && { name: '', confirmPassword: '' })
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    
    if (isSignUp && !validateName(formData.name)) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (isSignUp && !passwordsMatch(formData.password, formData.confirmPassword)) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      {isSignUp && (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-600 transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
      )}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-600 transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          required
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-600 transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          required
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>
      {isSignUp && (
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-600 transition ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>
      )}
      <button type="submit" className="px-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
    </form>
  );
};

export default AuthForm;
