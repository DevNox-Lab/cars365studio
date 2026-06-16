import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COOKIE_NAME = 'adminData';

const getCookie = (name) => {
  const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
  const match = cookies.find((cookie) => cookie.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split('=')[1]) : null;
};

const removeCookie = (name) => {
  document.cookie = `${name}=; max-age=0; path=/; Secure; SameSite=Strict`;
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const stored = getCookie(COOKIE_NAME);
    if (!stored) {
      navigate('/login');
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      if (!parsed?.loggedIn) {
        navigate('/login');
        return;
      }
      setAdminData(parsed);
    } catch (error) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    removeCookie(COOKIE_NAME);
    navigate('/login');
  };

  if (!adminData) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 pt-24 pb-12 bg-obsidian-deep text-on-surface">
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-border-highlight bg-surface-container p-10 shadow-xl">
        <div className="mb-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
            Admin Dashboard
          </p>
          <h1 className="mt-4 font-headline text-3xl font-bold text-on-surface">
            Welcome back, {adminData.email}
          </h1>
          <p className="mt-2 max-w-xl mx-auto text-sm text-on-surface-variant">
            Your admin session is active. Use the dashboard to monitor site
            activity and manage content.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border-highlight bg-surface px-6 py-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              Session status
            </p>
            <p className="mt-3 text-lg font-semibold text-on-surface">
              Logged in
            </p>
            <p className="mt-1 text-sm text-on-surface-variant">
              Logged in at {new Date(adminData.loginAt).toLocaleString()}
            </p>
          </div>
          <div className="rounded-3xl border border-border-highlight bg-surface px-6 py-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              Account
            </p>
            <p className="mt-3 text-lg font-semibold text-on-surface">
              {adminData.email}
            </p>{' '}
            <p className="mt-1 text-sm text-on-surface-variant">
              Role: {adminData.role}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-widest text-on-primary transition-colors duration-200 hover:bg-primary-fixed"
          >
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
}
