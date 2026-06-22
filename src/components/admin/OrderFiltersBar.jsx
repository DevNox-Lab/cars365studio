import { useEffect, useRef, useState } from 'react';
import { MdFilterAltOff } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  resetFilters,
  setDateFrom,
  setDateTo,
  setFrequency,
  setSearch,
  setStatus,
} from '../../store/slices/ordersSlice';

export default function OrderFiltersBar() {
  const dispatch = useAppDispatch();
  const { search, status, dateFrom, dateTo, frequency } = useAppSelector(
    (state) => state.orders
  );

  // Local state for the search input so we can debounce it independently
  const [searchInput, setSearchInput] = useState(search);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const debounceTimer = useRef(null);

  // Sync local searchInput if the Redux store's search is reset externally (e.g. resetFilters)
  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // Debounce: dispatch setSearch only after 1 second of no typing
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      if (searchInput !== search) {
        dispatch(setSearch(searchInput));
      }
    }, 1000);
    return () => clearTimeout(debounceTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const handleReset = () => {
    setSearchInput('');
    dispatch(resetFilters());
    setMobileFiltersOpen(false);
  };

  // Count how many non-default filters are active (for badge)
  const activeFilterCount = [
    search !== '',
    status !== 'all',
    dateFrom !== '',
    dateTo !== '',
    frequency !== 'all',
  ].filter(Boolean).length;

  // Also count the live (un-debounced) search input
  const liveActiveCount = [
    searchInput !== '',
    status !== 'all',
    dateFrom !== '',
    dateTo !== '',
    frequency !== 'all',
  ].filter(Boolean).length;

  const inputClass =
    'rounded-lg border border-border-highlight bg-surface-container px-3 py-2.5 font-body text-sm text-on-surface placeholder:text-outline focus:border-primary focus:outline-none transition-all';

  const resetBtn = (extraClass = '') => (
    <button
      type="button"
      onClick={handleReset}
      title="Reset all filters"
      aria-label="Reset all filters"
      className={`inline-flex items-center gap-1.5 rounded-lg border border-border-highlight bg-surface-container px-3 py-2.5 text-xs font-semibold text-on-surface-variant transition-all hover:border-error/60 hover:bg-error/10 hover:text-error active:scale-95 ${extraClass}`}
    >
      <MdFilterAltOff className="text-base" />
      <span className="hidden sm:inline">Reset</span>
      {liveActiveCount > 0 && (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-content">
          {liveActiveCount}
        </span>
      )}
    </button>
  );

  return (
    <div className="rounded-2xl border border-border-highlight bg-surface-container-low p-4 sm:p-5">
      {/* Mobile Header with Search and Toggle */}
      <div className="mb-4 flex items-center justify-between gap-2 sm:mb-0 sm:hidden">
        <div className="relative flex-1">
          <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-outline">
            search
          </span>
          <input
            id="order-search-mobile"
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search orders..."
            className={`${inputClass} w-full pl-10 pr-10`}
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => setSearchInput('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-outline transition-colors hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-base leading-none">
                close
              </span>
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-border-highlight bg-surface-container px-3 py-2.5 text-on-surface transition-colors hover:bg-surface-container-high"
          aria-label="Toggle filters"
          aria-expanded={mobileFiltersOpen}
        >
          <span className="material-symbols-outlined text-base">tune</span>
          <span className="text-xs font-semibold uppercase">Filters</span>
          {liveActiveCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-content">
              {liveActiveCount}
            </span>
          )}
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden flex-col gap-4 sm:flex">
        {/* Row 1: Search Bar + Reset */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-outline">
              search
            </span>
            <input
              id="order-search-desktop"
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search orders by invoice/ID (e.g. INV-1234-ABCD), name, or phone"
              className={`${inputClass} w-full pl-10 pr-10`}
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => setSearchInput('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline transition-colors hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-base leading-none">
                  close
                </span>
              </button>
            )}
          </div>
          {resetBtn()}
        </div>

        {/* Row 2: Filter Controls */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:flex-nowrap">
            {/* Date Range */}
            <div className="flex items-center gap-2">
              <input
                id="filter-date-from"
                type="date"
                value={dateFrom}
                onChange={(e) => dispatch(setDateFrom(e.target.value))}
                className={inputClass}
                aria-label="Date from"
                title="Start date"
              />
              <span className="hidden text-on-surface-variant sm:inline">
                to
              </span>
              <span className="inline text-on-surface-variant sm:hidden">
                —
              </span>
              <input
                id="filter-date-to"
                type="date"
                value={dateTo}
                onChange={(e) => dispatch(setDateTo(e.target.value))}
                className={inputClass}
                aria-label="Date to"
                title="End date"
              />
            </div>

            {/* Frequency Dropdown */}
            <select
              id="filter-frequency"
              value={frequency}
              onChange={(e) => dispatch(setFrequency(e.target.value))}
              className={`${inputClass} min-w-[140px]`}
              aria-label="Frequency filter"
              title="Filter by frequency"
            >
              <option value="all">All Time</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            {/* Status Dropdown */}
            <select
              id="filter-status"
              value={status}
              onChange={(e) => dispatch(setStatus(e.target.value))}
              className={`${inputClass} min-w-[140px]`}
              aria-label="Status filter"
              title="Filter by status"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="complete">Complete</option>
              <option value="invoiced">Invoiced</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Filters — Collapsible */}
      {mobileFiltersOpen && (
        <div className="mt-4 space-y-3 border-t border-border-highlight/50 pt-4 sm:hidden">
          {/* Date Range Mobile */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase text-outline">
              Date Range
            </label>
            <div className="flex items-center gap-2">
              <input
                id="filter-date-from-mobile"
                type="date"
                value={dateFrom}
                onChange={(e) => dispatch(setDateFrom(e.target.value))}
                className={`${inputClass} flex-1`}
                aria-label="Date from"
              />
              <span className="text-on-surface-variant">—</span>
              <input
                id="filter-date-to-mobile"
                type="date"
                value={dateTo}
                onChange={(e) => dispatch(setDateTo(e.target.value))}
                className={`${inputClass} flex-1`}
                aria-label="Date to"
              />
            </div>
          </div>

          {/* Frequency Mobile */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase text-outline">
              Frequency
            </label>
            <select
              id="filter-frequency-mobile"
              value={frequency}
              onChange={(e) => dispatch(setFrequency(e.target.value))}
              className={`${inputClass} w-full`}
              aria-label="Frequency filter"
            >
              <option value="all">All Time</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          {/* Status Mobile */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase text-outline">
              Status
            </label>
            <select
              id="filter-status-mobile"
              value={status}
              onChange={(e) => dispatch(setStatus(e.target.value))}
              className={`${inputClass} w-full`}
              aria-label="Status filter"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="complete">Complete</option>
              <option value="invoiced">Invoiced</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex gap-2 pt-1">
            {resetBtn('flex-1 justify-center')}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="flex-1 rounded-lg border border-border-highlight px-3 py-2.5 text-xs font-semibold text-on-surface transition-colors hover:bg-surface-container-high"
            >
              Close Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
