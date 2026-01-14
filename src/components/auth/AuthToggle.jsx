const AuthToggle = ({ isSignUp, onToggle }) => {
  return (
    <div className="text-center mt-6">
      <p className="text-gray-600 text-sm">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <button onClick={onToggle} className="ml-2 text-indigo-600 font-semibold underline hover:text-indigo-700">
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default AuthToggle;
