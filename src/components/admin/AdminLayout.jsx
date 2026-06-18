import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logoutUser } from '../../store/slices/authSlice';

const navItems = [
  { label: 'Dashboard', to: '/admin/dashboard' },
  { label: 'Orders', to: '/admin/orders' },
];

export default function AdminLayout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragTranslate, setDragTranslate] = useState(0);
  const sidebarRef = useRef(null);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (sidebarOpen) {
      setDragTranslate(0);
    }
  }, [sidebarOpen]);

  const handleLogout = () => {
    dispatch(logoutUser());
    setSidebarOpen(false);
    navigate('/admin/login');
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setDragging(false);
    setDragTranslate(0);
    setDragStartX(0);
  };

  const handlePointerDown = (event) => {
    if (!sidebarOpen || !sidebarRef.current) return;
    setDragging(true);
    setDragStartX(event.clientX);
    setDragTranslate(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragging || !sidebarRef.current) return;
    const delta = event.clientX - dragStartX;
    setDragTranslate(delta < 0 ? Math.max(delta, -sidebarRef.current.offsetWidth) : 0);
  };

  const handlePointerEnd = (event) => {
    if (!dragging) return;
    const delta = event.clientX - dragStartX;
    setDragging(false);
    setDragStartX(0);

    if (delta <= -80) {
      setSidebarOpen(false);
      setDragTranslate(Math.max(delta, -sidebarRef.current.offsetWidth));
    } else {
      setDragTranslate(0);
    }
    event.currentTarget.releasePointerCapture(event.pointerId);
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

        <div className="md:hidden">
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setSidebarOpen(false)}
              role="button"
              tabIndex={0}
              aria-label="Close sidebar overlay"
            />
          )}
          <aside
            ref={sidebarRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border-highlight bg-surface-container-low transition-transform duration-300 ease-out md:hidden"
            style={{
              transform: sidebarOpen
                ? `translateX(${dragTranslate}px)`
                : 'translateX(-100%)',
            }}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start justify-between border-b border-border-highlight px-6 py-8 pr-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    Cars365Studio Admin
                  </p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    {user?.email || 'admin@cars365Studio.com'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="inline-flex h-11 w-11 items-start justify-end   text-on-surface transition-colors hover:border-primary hover:text-primary"
                  aria-label="Close sidebar"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <nav className="flex-1 space-y-2 px-4 py-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setSidebarOpen(false)}
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
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full rounded-xl border border-border-highlight px-4 py-3 font-body text-sm text-on-surface transition-colors hover:border-primary hover:text-primary"
                >
                  Logout
                </button>
              </div>
            </div>
          </aside>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="border-b border-border-highlight bg-surface-container-low px-6 py-4 md:hidden">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setSidebarOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-highlight text-on-surface transition-colors hover:border-primary hover:text-primary"
                aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={sidebarOpen}
              >
                <span className="material-symbols-outlined">
                  {sidebarOpen ? 'close' : 'menu'}
                </span>
              </button>

              <div>
                <p className="font-headline text-lg font-bold uppercase tracking-wide">
                  Cars365 Admin
                </p>
                {/* <p className="text-xs text-on-surface-variant">{user?.email}</p> */}
              </div>
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
