import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './pages.css';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sendLoginEmail = async (userEmail) => {
    try {
      const response = await fetch('/.netlify/functions/login-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      });
      
      if (response.ok) {
        console.log('Login email sent successfully via Netlify function');
      } else {
        console.error('Failed to send login email');
      }
    } catch (error) {
      console.error('Error calling login email function:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Please fill in all fields'); return; }
    if (!email.includes('@')) { setError('Please enter a valid email address'); return; }
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => { 
      onLogin(email);
      sendLoginEmail(email); // Send the login email
      navigate('/dashboard'); 
      setIsLoading(false); 
    }, 1000);
  };

  return (
    <div className="login-page page-enter">
      <div className="login-page__bg hero-bg" aria-hidden="true" />
      <div className="login-page__overlay" />

      <div className="login-header">
        <div className="login-icon">
          <ShieldCheck size={40} color="#fff" />
        </div>
        <h1 className="login-title">Client Portal</h1>
        <p className="login-subtitle">Sign in to track orders and manage invoices</p>
      </div>

      <div className="login-card-wrap">
        <div className="login-card">
          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="login-error fade-in">
                <p>{error}</p>
              </div>
            )}

            <div className="login-form__group">
              <label htmlFor="email" className="form-label">Email address</label>
              <div className="login-input-wrap">
                <div className="login-input-icon"><Mail size={18} color="var(--earth-400)" /></div>
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-input login-input" placeholder="admin@virendraplant.com" />
              </div>
            </div>

            <div className="login-form__group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="login-input-wrap">
                <div className="login-input-icon"><Lock size={18} color="var(--earth-400)" /></div>
                <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="form-input login-input" placeholder="••••••••" />
              </div>
            </div>

            <div className="login-form__remember">
              <label className="login-remember-label">
                <input id="remember-me" name="remember-me" type="checkbox" className="login-checkbox" />
                Remember me
              </label>
              <a href="#" className="login-forgot">Forgot password?</a>
            </div>

            <button type="submit" disabled={isLoading} className={`btn-green${isLoading ? ' btn-green--loading' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              {isLoading ? 'Signing in…' : (<>Sign in to Portal <ArrowRight size={18} /></>)}
            </button>
          </form>

          <div className="login-footer">
            <p>Not a client yet?{' '}
              <a href="/contact" className="login-footer__link">Contact Sales</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
