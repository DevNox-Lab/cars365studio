import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLimit, setPage } from '../../store/slices/ordersSlice';

export default function OrdersTableFooter() {
  const dispatch = useAppDispatch();
  const { page, limit, total, totalPages } = useAppSelector((state) => state.orders);

  const startItem = total === 0 ? 0 : (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  const pageNumbers = [];
  const maxVisible = 5;
  let startPage = Math.max(1, page - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  startPage = Math.max(1, endPage - maxVisible + 1);

  for (let i = startPage; i <= endPage; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="rounded-2xl border border-border-highlight bg-surface-container-low px-4 py-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-on-surface-variant">
            Showing{' '}
            <span className="font-medium text-on-surface">
              {startItem}-{endItem}
            </span>{' '}
            of <span className="font-medium text-on-surface">{total}</span>{' '}
            entries
          </p>

          <div className="flex items-center gap-2">
            <label htmlFor="rows-per-page" className="text-sm text-outline">
              Rows
            </label>
            <select
              id="rows-per-page"
              value={limit}
              onChange={(e) => dispatch(setLimit(Number(e.target.value)))}
              className="rounded-lg border border-border-highlight bg-surface-container px-3 py-2 text-sm text-on-surface focus:border-primary focus:outline-none"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => dispatch(setPage(page - 1))}
            disabled={page <= 1}
            className="inline-flex items-center gap-1 rounded-lg border border-border-highlight bg-surface-container px-3 py-2 text-sm text-on-surface transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-base">chevron_left</span>
            Previous
          </button>

          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => dispatch(setPage(pageNumber))}
              className={`min-w-10 rounded-lg border px-3 py-2 text-sm transition-colors ${
                pageNumber === page
                  ? 'border-primary bg-primary/15 text-primary'
                  : 'border-border-highlight bg-surface-container text-on-surface hover:border-primary hover:text-primary'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          <span className="px-2 text-sm text-on-surface-variant">
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            onClick={() => dispatch(setPage(page + 1))}
            disabled={page >= totalPages}
            className="inline-flex items-center gap-1 rounded-lg border border-border-highlight bg-surface-container px-3 py-2 text-sm text-on-surface transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
