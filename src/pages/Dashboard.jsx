import React, { useMemo, useState, useEffect } from 'react';
import {
  Search,
  Plus,
  User,
  MoreVertical,
  Calendar,
  ArrowUp,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Home,
} from 'lucide-react';
import PackageBuilder from '../components/PackageBuilder';

/*
  Single-file Dashboard.jsx
  - All subcomponents are defined below and used inside the exported `Dashboard`.
  - Tailwind CSS classes are used for styling (dark premium theme).
  - Mock data is hardcoded to populate stats and table.
*/

// ---------------------- Mock Data ----------------------
const ORDERS = [
  {
    id: 'ORD-1001',
    date: '2026-06-14',
    status: 'Completed',
    user: {
      name: 'Sam Turner',
      contact: '+44 7700 900123',
      address: 'Jumeirah 2, Dubai',
    },
    car: {
      make: 'Porsche',
      model: '911 Carrera',
      variant: 'S',
      body: 'Coupe',
      color: 'Jet Black',
    },
    services: ['Exterior Detail', 'Ceramic Coating', 'Wheel Polish'],
    amount: 845.0,
    notes: 'Customer requested ceramic finish',
    bay: 'In Bay',
  },
  {
    id: 'ORD-1002',
    date: '2026-06-15',
    status: 'Pending',
    user: {
      name: 'Nadia Ali',
      contact: '+971 55 123 4567',
      address: 'Business Bay, Dubai',
    },
    car: {
      make: 'Range Rover',
      model: 'Velar',
      variant: 'P400',
      body: 'SUV',
      color: 'Satin Sand',
    },
    services: ['Interior Detail', 'Engine Bay Clean'],
    amount: 420.0,
    notes: 'Check leather condition',
    bay: 'Waiting',
  },
  {
    id: 'ORD-1003',
    date: '2026-06-16',
    status: 'Cancelled',
    user: {
      name: 'Aisha Khan',
      contact: '+44 7911 123456',
      address: 'Marina, Dubai',
    },
    car: {
      make: 'Mercedes-AMG',
      model: 'C63',
      variant: 'S',
      body: 'Sedan',
      color: 'Designo Magno',
    },
    services: ['Paint Correction'],
    amount: 0.0,
    notes: 'Client cancelled - reschedule possible',
    bay: 'Offsite',
  },
  {
    id: 'ORD-1004',
    date: '2026-06-16',
    status: 'In Progress',
    user: {
      name: 'Liam O\'Neil',
      contact: '+971 50 555 0101',
      address: 'Al Barsha, Dubai',
    },
    car: {
      make: 'BMW',
      model: 'M3',
      variant: 'Competition',
      body: 'Sedan',
      color: 'Alpine White',
    },
    services: ['Full Detail', 'Glass Coat'],
    amount: 650.0,
    notes: 'Apply extra glass coat layer',
    bay: 'In Bay',
  },
];

// ---------------------- Helpers ----------------------
// Format as AED
const formatCurrency = (value) =>
  'AED ' + value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const statusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-400';
    case 'Pending':
      return 'bg-yellow-400';
    case 'Cancelled':
      return 'bg-red-400';
    case 'In Progress':
      return 'bg-yellow-400';
    default:
      return 'bg-gray-400';
  }
};

// ---------------------- Subcomponents ----------------------
function Header({ onNew, page, totalPages, setPage }) {
  const [breadcrumbOpen, setBreadcrumbOpen] = useState(false);
  const breadcrumbRef = React.useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (breadcrumbRef.current && !breadcrumbRef.current.contains(e.target)) {
        setBreadcrumbOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <header className="flex items-center justify-between gap-6 bg-transparent py-2 mt-2">
      <div className="flex items-center gap-4">
        <div className="text-primary font-extrabold text-xl tracking-widest">365 STUDIO</div>
        
        {/* Interactive Breadcrumb Dropdown */}
        <div className="relative" ref={breadcrumbRef}>
          <button
            onClick={() => setBreadcrumbOpen((s) => !s)}
            className="inline-flex items-center gap-2 rounded px-3 py-1 bg-transparent hover:bg-surface focus:outline-none text-sm text-on-surface-variant"
            aria-expanded={breadcrumbOpen}
          >
            <span>Dashboard / Page {page}</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {breadcrumbOpen && (
            <div className="absolute mt-2 left-0 z-50 w-40 bg-gray-800 text-white rounded shadow-lg">
              <ul>
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const p = idx + 1;
                  return (
                    <li key={p}>
                      <button
                        onClick={() => {
                          setPage(p);
                          setBreadcrumbOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          p === page ? 'bg-gray-700' : 'hover:bg-gray-700'
                        }`}
                      >
                        Page {p}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onNew}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary hover:bg-primary/20"
        >
          <Plus className="h-4 w-4" />
          <span className="text-sm font-semibold">New Order</span>
        </button>

        <div className="flex items-center gap-3 rounded-full bg-surface px-3 py-2">
          <div className="rounded-full bg-surface-container p-2">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold">Alex</div>
            <div className="text-xs text-on-surface-variant">Studio Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatsGrid({ orders }) {
  const totals = useMemo(() => {
    const total = orders.length;
    const completed = orders.filter((o) => o.status === 'Completed').length;
    const pending = orders.filter((o) => o.status === 'Pending').length + orders.filter((o) => o.status === 'In Progress').length;
    const revenue = orders.reduce((s, o) => s + o.amount, 0);
    const pendingAmount = orders.filter((o) => o.status === 'Pending').reduce((s, o) => s + o.amount, 0);
    return { total, completed, pending, revenue, pendingAmount };
  }, [orders]);

  const cards = [
    { title: 'Total Orders', value: totals.total },
    { title: 'Completed Orders', value: totals.completed },
    { title: 'Pending Orders', value: totals.pending },
    { title: 'Total Revenue', value: formatCurrency(totals.revenue), extra: <span className="text-green-400 text-sm flex items-center gap-1"><ArrowUp className="h-3 w-3"/> 4.7%</span> },
    { title: 'Pending Amount', value: formatCurrency(totals.pendingAmount) },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((c) => (
        <div key={c.title} className="rounded-xl bg-surface p-4 shadow-sm">
          <p className="text-xs text-on-surface-variant uppercase tracking-wider">{c.title}</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <div className="text-2xl font-bold text-on-surface">{c.value}</div>
            {c.extra && <div>{c.extra}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

function ControlPanel({ search, setSearch, from, setFrom, to, setTo, activeOnsite, timeframe, setTimeframe, statusFilter, setStatusFilter }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
      <div className="">
        <div className="relative w-64">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"><Search className="h-4 w-4" /></span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search orders..."
              className="w-full rounded-lg bg-surface pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant"
            />
          </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-surface rounded-lg px-3 py-2">
          <Calendar className="h-4 w-4 text-on-surface-variant" />
          <input type="date" value={from} onChange={(e)=>setFrom(e.target.value)} className="bg-transparent text-sm text-on-surface outline-none" />
          <span className="text-on-surface-variant mx-1">—</span>
          <input type="date" value={to} onChange={(e)=>setTo(e.target.value)} className="bg-transparent text-sm text-on-surface outline-none" />
        </div>

        <div className="relative">
          <select value={timeframe} onChange={e=>setTimeframe(e.target.value)} className="rounded-lg bg-surface px-3 py-2 text-sm text-on-surface">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>

        <div className="relative">
          <select value={statusFilter} onChange={e=>setStatusFilter(e.target.value)} className="rounded-lg bg-surface px-3 py-2 text-sm text-on-surface">
            <option value="">All Statuses</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>In Progress</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      <div className="ml-auto">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-2 text-sm text-primary">
          Active On-site: <span className="ml-2 font-semibold">{activeOnsite}</span>
        </span>
      </div>
    </div>
  );
}

function StatusDot({ status }) {
  return <span className={`inline-block h-3 w-3 rounded-full ${statusColor(status)}`}></span>;
}

// ---------------------- Sidebar Component ----------------------
function Sidebar({ open, setOpen, onNavigate }) {
  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: Home },
    // { key: 'orders', label: 'Orders', icon: Search },
    // { key: 'customers', label: 'Customers', icon: User },
    // { key: 'settings', label: 'Settings', icon: Menu },
  ];

  return (
    <aside
      className={`relative transition-all duration-200 ${open ? 'w-64' : 'w-16'} bg-surface-container rounded-lg p-3`}
      aria-expanded={open}
    >
      {/* Floating toggle on the right edge */}
      <button
        aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-surface shadow border border-border-highlight"
      >
        {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>

      <div className="flex flex-col gap-2 mt-6">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <button
              key={it.key}
              onClick={() => onNavigate?.(it.key)}
              className="group relative flex items-center gap-3 w-full rounded px-2 py-2 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="flex h-8 w-8 items-center justify-center text-on-surface">
                <Icon className="h-5 w-5" />
              </div>

              {/* Label shown only when expanded */}
              {open && <span className="text-on-surface">{it.label}</span>}

              {/* Tooltip shown when collapsed */}
              {!open && (
                <div className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                  <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg whitespace-nowrap">
                    {it.label}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
}


function OrdersTable({ orders, onDelete, onEdit, page, setPage, totalPages }) {
  // no sticky total row per requirements
  return (
    <div className="mt-6 rounded-xl bg-surface-container p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left text-on-surface-variant text-xs border-b border-border-highlight">
              <th className="py-3 px-2">Date / Order ID</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2">User Details</th>
              <th className="py-3 px-2">Car Details</th>
              <th className="py-3 px-2">Order Details</th>
              <th className="py-3 px-2">Notes</th>
              <th className="py-3 px-2 text-right">Amount</th>
              <th className="py-3 px-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-border-highlight align-top">
                <td className="py-4 px-2">
                  <div className="text-sm text-on-surface font-semibold">{o.date}</div>
                  <div className="text-xs text-on-surface-variant">{o.id}</div>
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2">
                    <StatusDot status={o.status} />
                    <span className="text-sm text-on-surface">{o.status}</span>
                  </div>
                </td>
                <td className="py-4 px-2 text-sm text-on-surface">
                  <div className="font-semibold">{o.user.name}</div>
                  <div className="text-xs text-on-surface-variant">{o.user.contact}</div>
                  <div className="text-xs text-on-surface-variant">{o.user.address}</div>
                </td>
                <td className="py-4 px-2 text-sm text-on-surface">
                  <div className="font-semibold">{o.car.make} {o.car.model}</div>
                  <div className="text-xs text-on-surface-variant">Variant: {o.car.variant}</div>
                  <div className="text-xs text-on-surface-variant">{o.car.body} · {o.car.color}</div>
                </td>
                <td className="py-4 px-2 text-sm text-on-surface">
                  <ul className="list-disc ml-4 text-xs text-on-surface">
                    {o.services.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 px-2 text-sm text-on-surface">{o.notes}</td>
                <td className="py-4 px-2 text-right text-green-400 font-semibold">{formatCurrency(o.amount)}</td>
                <td className="py-4 px-2 text-center text-on-surface-variant">
                  <div className="relative inline-block">
                    <button className="p-2 rounded hover:bg-surface" onClick={() => onEdit(o)}>
                      <MoreVertical className="h-5 w-5 text-on-surface-variant" />
                    </button>
                    {/* For simplicity the dropdown is triggered by Edit action; real implementation can be expanded */}
                    <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-surface shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                      {/* placeholder - actions handled via button callbacks */}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-on-surface-variant">Showing {orders.length} entries</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 rounded bg-surface text-on-surface-variant hover:bg-surface-container"
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <div className="text-sm text-on-surface">Page {page} of {totalPages}</div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1 rounded bg-surface text-on-surface-variant hover:bg-surface-container"
            disabled={page === totalPages}
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------- Main Export ----------------------
export default function Dashboard() {
  // app state
  const [orders, setOrders] = useState(ORDERS);
  const [search, setSearch] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [timeframe, setTimeframe] = useState('Daily');
  const [statusFilter, setStatusFilter] = useState('');

  // pagination
  const perPage = 10;
  const [page, setPage] = useState(1);

  // modal state
  const [showModal, setShowModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  // sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Derived filtered list
  const filtered = useMemo(() => {
    return orders.filter((o) => {
      const low = search.toLowerCase();
      if (search && !(
        o.id.toLowerCase().includes(low) ||
        o.user.name.toLowerCase().includes(low) ||
        o.car.make.toLowerCase().includes(low) ||
        o.car.model.toLowerCase().includes(low)
      )) return false;

      if (from && o.date < from) return false;
      if (to && o.date > to) return false;
      if (statusFilter && o.status.toLowerCase() !== statusFilter.toLowerCase()) return false;
      return true;
    });
  }, [orders, search, from, to, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page]);

  const activeOnsite = orders.filter(o => o.bay === 'In Bay').length;

  // handlers
  const handleDelete = (order) => {
    setOrders((prev) => prev.filter((p) => p.id !== order.id));
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
    setShowModal(true);
  };

  const handleNew = () => {
    setEditingOrder(null);
    setShowModal(true);
  };

  const handleSave = (savedData) => {
    // savedData should contain id to distinguish
    if (!savedData) return setShowModal(false);
    setOrders((prev) => {
      const exists = prev.find((p) => p.id === savedData.id);
      if (exists) {
        return prev.map((p) => (p.id === savedData.id ? savedData : p));
      }
      return [savedData, ...prev];
    });
    setShowModal(false);
  };

  // breadcrumb uses page
  return (
    <div className="min-h-screen pt-6 bg-obsidian-deep text-on-surface">
      <div className="mx-auto max-w-7xl flex gap-6">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} onNavigate={(key) => { if (key === 'dashboard') setPage(1); }} />

        <main className="flex-1">
          <Header onNew={handleNew} page={page} totalPages={totalPages} setPage={setPage} />

          <section className="mt-6">
            <StatsGrid orders={orders} />
          </section>

          <section className="mt-6">
            <ControlPanel
              search={search}
              setSearch={setSearch}
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
              activeOnsite={activeOnsite}
              timeframe={timeframe}
              setTimeframe={setTimeframe}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
          </section>

          <section className="mt-6">
            <OrdersTable orders={paginated} onDelete={handleDelete} onEdit={(o)=>handleEdit(o)} page={page} setPage={setPage} totalPages={totalPages} />
          </section>
        </main>
      </div>

      {/* Modal for PackageBuilder */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-surface rounded-lg max-w-3xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{editingOrder ? 'Edit Order' : 'New Order'}</h3>
              <button onClick={()=>setShowModal(false)} className="text-on-surface-variant"><X className="h-5 w-5"/></button>
            </div>
            <PackageBuilder initialData={editingOrder} onClose={()=>setShowModal(false)} onSave={handleSave} />
          </div>
        </div>
      )}
    </div>
  );
}
