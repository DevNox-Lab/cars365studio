import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi';

const API_BASE = 'http://localhost:5000';
const LOGIN_ENDPOINT = `${API_BASE}/auth/login`;
const LOGOUT_ENDPOINT = `${API_BASE}/auth/logout`;
const COOKIE_NAME = 'adminData';
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24; // 1 day

const setCookie = (name, value, maxAge) => {
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; Secure; SameSite=Strict`;
};

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const isValidEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      const response = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message = data?.message || 'Invalid email or password.';
        setError(message);
        return;
      }

      const responseData = await response.json();
      const adminData = {
        email: responseData.email || email,
        role: responseData.role || 'admin',
        token: responseData.token || null,
        loggedIn: true,
        loginAt: new Date().toISOString(),
      };

      setCookie(COOKIE_NAME, JSON.stringify(adminData), COOKIE_MAX_AGE_SECONDS);
      navigate('/dashboard');
    } catch (fetchError) {
      console.error('Login error:', fetchError);
      setError('Unable to reach the login endpoint. Please try again later.');
    }
  };

  return (
    <div className="min-h-[100vh] px-4 pt-24 bg-obsidian-deep text-on-surface">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="ml-5 inline-flex items-center rounded-full border border-border-highlight bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant transition-colors duration-200 hover:border-primary hover:text-primary"
      >
        <FiArrowLeft className="mr-2 h-4 w-4" />
        Back
      </button>
      <div className="mx-auto w-full max-w-md rounded-3xl border border-border-highlight bg-surface-container p-10 shadow-xl">
        <div className="mb-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
            Admin login
          </p>
          <h1 className="mt-4 font-headline text-3xl font-bold text-on-surface">
            Sign in to Dashboard
          </h1>
          <p className="mt-3 text-sm text-on-surface-variant">
            Enter your admin credentials to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border-highlight bg-surface px-4 py-3 text-sm text-on-surface outline-none transition-colors duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-border-highlight bg-surface px-4 py-3 pr-12 text-sm text-on-surface outline-none transition-colors duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <FiEye className="h-5 w-5" />
                ) : (
                  <FiEyeOff className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="rounded-3xl bg-error-container px-4 py-3 text-sm text-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-primary px-5 py-3 text-sm font-bold uppercase tracking-widest text-on-primary transition-colors duration-200 hover:bg-primary-fixed"
          >
            Login
          </button>
        </form>
      </div>

      <footer className=" mt-28  px-0 pt-0  text-center text-sm text-on-surface-variant shadow-xl">
        <div className="border-t border-border-highlight pt-3">
          <span className="mb-0">
            Made with{' '}
            <span className="material-symbols-outlined text-primary text-sm">
              favorite
            </span>{' '}
            By{' '}
          </span>
          <a
            href="https://www.devnoxlab.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold text-primary hover:text-primary-fixed"
          >
            DevNox Lab
          </a>
        </div>
      </footer>
    </div>
  );
}
