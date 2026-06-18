import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { checkAuth } from '../../store/slices/authSlice';

export default function ProtectedRoute() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, token, checkAuthLoading } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // If already authenticated, no need to check again
    if (isAuthenticated) {
      return;
    }

    // If we have a token but not authenticated, verify it
    if (token && !isAuthenticated) {
      dispatch(checkAuth());
    }
  }, [dispatch, isAuthenticated, token]);

  if (checkAuthLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-obsidian-deep">
        <div className="text-center">
          <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-on-surface">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !token) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
