import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logoutUser } from '../../store/slices/authSlice';

const navItems = [
  { label: 'Dashboard', to: '/admin/dashboard' },
  { label: 'Orders', to: '/admin/orders' },
];

export default function AdminLayout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-obsidian-deep text-on-surface">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-shrink-0 border-r border-border-highlight bg-surface-container-low md:flex md:flex-col">
          <div className="border-b border-border-highlight px-6 py-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Admin
            </p>
            <h1 className="mt-2 font-headline text-2xl font-bold uppercase tracking-wide text-on-surface">
              Cars365
            </h1>
          </div>

          <nav className="flex-1 space-y-2 px-4 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 font-body text-sm transition-colors ${
                    isActive
                      ? 'bg-primary/15 text-primary'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-border-highlight px-4 py-6">
            <p className="truncate px-4 text-sm text-on-surface-variant">
              {user?.name || 'Admin'}
            </p>
            <p className="truncate px-4 text-xs text-outline">
              {user?.email}
            </p>
            <button
              type="button"
              onClick={handleLogout}
              className="mt-4 w-full rounded-xl border border-border-highlight px-4 py-3 font-body text-sm text-on-surface transition-colors hover:border-primary hover:text-primary"
            >
              Logout
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="border-b border-border-highlight bg-surface-container-low px-6 py-4 md:hidden">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-headline text-lg font-bold uppercase tracking-wide">
                  Cars365 Admin
                </p>
                <p className="text-xs text-on-surface-variant">{user?.email}</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl border border-border-highlight px-3 py-2 text-xs text-on-surface"
              >
                Logout
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-xs ${
                      isActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-on-surface-variant'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </header>

          <main className="flex-1 px-4 py-8 md:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
