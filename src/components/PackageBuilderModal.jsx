import { useRef, useEffect, useState } from 'react';
import { usePackageBuilderContext } from '../context/PackageBuilderContext';
import PackageBuilder from './PackageBuilder';

export default function PackageBuilderModal() {
  const { isPackageBuilderOpen, setIsPackageBuilderOpen } = usePackageBuilderContext();
  const [visible, setVisible] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (isPackageBuilderOpen) {
      document.body.style.overflow = 'hidden';
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      );
      return () => {
        cancelAnimationFrame(raf);
        document.body.style.overflow = '';
      };
    } else {
      setVisible(false);
      document.body.style.overflow = '';
    }
  }, [isPackageBuilderOpen]);

  if (!isPackageBuilderOpen) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[110]
        flex items-end md:items-center justify-center
        p-0 md:p-6
        transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
      role="dialog"
      aria-modal="true"
      onClick={() => setIsPackageBuilderOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal panel */}
      <div
        ref={panelRef}
        className={`
          relative z-10
          w-full max-w-6xl mx-auto
          bg-surface
          border border-border-highlight
          rounded-t-2xl md:rounded-xl
          flex flex-col
          max-h-[95vh]
          overflow-hidden
          transition-all duration-300 ease-out
          ${
            visible
              ? 'translate-y-0 md:scale-100 opacity-100'
              : 'translate-y-full md:translate-y-0 md:scale-95 opacity-0'
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsPackageBuilderOpen(false)}
          className="
            absolute top-4 right-4 z-20
            flex items-center justify-center w-10 h-10
            rounded-full bg-surface-container border border-border-highlight
            text-on-surface-variant hover:text-primary hover:border-primary
            transition-all duration-200
          "
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="overflow-y-auto">
          <PackageBuilder isModal={true} />
        </div>
      </div>
    </div>
  );
}
