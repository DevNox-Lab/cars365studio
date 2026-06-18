import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-obsidian-deep px-4">
          <div className="w-full max-w-md rounded-2xl border border-border-highlight bg-surface-container-low p-8 text-center">
            <h1 className="mb-4 font-headline text-2xl font-bold text-on-surface">
              Something went wrong
            </h1>
            <p className="mb-6 text-sm text-on-surface-variant">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-xl bg-primary px-4 py-2 font-body text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
