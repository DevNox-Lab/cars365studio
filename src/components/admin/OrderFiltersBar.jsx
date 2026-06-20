import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setDateFrom,
  setDateTo,
  setFrequency,
  setSearch,
  setStatus,
} from '../../store/slices/ordersSlice';

export default function OrderFiltersBar() {
  const dispatch = useAppDispatch();
  const { search, status, dateFrom, dateTo, frequency, stats } = useAppSelector(
    (state) => state.orders
  );
  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== search) {
        dispatch(setSearch(searchInput));
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [dispatch, searchInput, search]);

  const inputClass =
    'rounded-xl border border-border-highlight bg-surface-container px-3 py-2.5 font-body text-sm text-on-surface placeholder:text-outline focus:border-primary focus:outline-none';

  return (
    <div className="rounded-2xl border border-border-highlight bg-surface-container-low p-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative min-w-[220px] flex-1">
          <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-outline">
            search
          </span>
          <input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search orders..."
            className={`${inputClass} w-full pl-10`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => dispatch(setDateFrom(e.target.value))}
            className={inputClass}
            aria-label="Date from"
          />
          <span className="text-sm text-outline">—</span>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => dispatch(setDateTo(e.target.value))}
            className={inputClass}
            aria-label="Date to"
          />

          <select
            value={frequency}
            onChange={(e) => dispatch(setFrequency(e.target.value))}
            className={inputClass}
            aria-label="Frequency"
          >
            <option value="all">All Time</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <select
            value={status}
            onChange={(e) => dispatch(setStatus(e.target.value))}
            className={inputClass}
            aria-label="Status filter"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="complete">Complete</option>
            <option value="invoiced">Invoiced</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
            Active On-site: {stats.activeOnSite ?? 0}
          </span>
        </div>
      </div>
    </div>
  );
}
