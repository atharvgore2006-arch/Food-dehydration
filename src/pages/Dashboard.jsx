import React from 'react';
import { Package, FileText, User, LogOut, Download, Clock, CheckCircle, ChevronRight, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './pages.css';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const handleLogoutClick = () => { onLogout(); navigate('/login'); };

  const orders = [
    { id: 'ORD-8829', product: 'Premium Onion Powder',      quantity: '1000 kg', status: 'Processing', date: 'Oct 24, 2023', amount: '$4,500' },
    { id: 'ORD-8828', product: 'Dehydrated Garlic Flakes',  quantity: '500 kg',  status: 'Shipped',    date: 'Oct 10, 2023', amount: '$2,800' },
    { id: 'ORD-8790', product: 'Ginger Powder',             quantity: '200 kg',  status: 'Delivered',  date: 'Sep 15, 2023', amount: '$1,900' },
  ];

  const getStatusClass = (s) => s === 'Processing' ? 'status--orange' : s === 'Shipped' ? 'status--blue' : 'status--green';

  return (
    <div className="dashboard">
      <div className="container">

        {/* Header */}
        <div className="db-header card">
          <div className="db-header__user">
            <div className="db-header__avatar">
              <span>{user?.name?.charAt(0).toUpperCase() || 'U'}</span>
            </div>
            <div>
              <h1 className="db-header__name">Welcome back, {user?.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : 'User'}!</h1>
              <p className="db-header__email">{user?.email || 'admin@virendraplant.com'}</p>
            </div>
          </div>
          <button onClick={handleLogoutClick} className="db-logout-btn">
            <LogOut size={18} style={{ marginRight: 8 }} /> Sign Out
          </button>
        </div>

        {/* Main grid */}
        <div className="db-grid">

          <div className="db-main">
            {/* Orders table */}
            <div className="card db-orders-card">
              <div className="db-orders-card__header">
                <div>
                  <h2 className="db-section-title">Recent Bulk Orders</h2>
                  <p className="db-section-sub">Track your active shipments and history</p>
                </div>
                <button className="db-view-all">View full history <ChevronRight size={18} /></button>
              </div>
              <div className="db-table-wrap">
                <table className="db-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Details</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o) => (
                      <tr key={o.id} className="db-table__row">
                        <td><span className="db-order-id">{o.id}</span><span className="db-order-date">{o.date}</span></td>
                        <td><span className="db-order-product">{o.product}</span><span className="db-order-qty">{o.quantity}</span></td>
                        <td>
                          <span className={`db-status ${getStatusClass(o.status)}`}>
                            {o.status === 'Processing' && <Clock size={12} style={{ marginRight: 4 }} />}
                            {o.status === 'Shipped'    && <Truck size={12} style={{ marginRight: 4 }} />}
                            {o.status === 'Delivered'  && <CheckCircle size={12} style={{ marginRight: 4 }} />}
                            {o.status}
                          </span>
                        </td>
                        <td className="db-order-amount">{o.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Invoices */}
            <div className="db-invoices">
              <div className="db-invoices__bg"><FileText size={192} /></div>
              <h2 className="db-section-title" style={{ color: '#fff' }}>Invoices &amp; Documentation</h2>
              <p className="db-invoices__desc">Download your tax invoices, quality certificates, and lab reports for recent batches.</p>
              <div className="db-docs">
                {[{ name: 'Invoice_ORD_8828.pdf', date: 'Oct 11, 2023' }, { name: 'Quality_Cert_Batch_992.pdf', date: 'Oct 09, 2023' }].map((d, i) => (
                  <div key={i} className="db-doc">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FileText size={18} style={{ color: 'var(--green-300)', marginRight: 12 }} />
                      <div>
                        <p className="db-doc__name">{d.name}</p>
                        <p className="db-doc__date">{d.date}</p>
                      </div>
                    </div>
                    <Download size={18} className="db-doc__dl" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="db-sidebar">
            <div className="db-stats">
              <div className="card db-stat-card">
                <Package size={32} style={{ color: 'var(--green-500)', marginBottom: 16 }} />
                <h3 className="db-stat-num">12</h3>
                <p className="db-stat-label">Total Orders</p>
              </div>
              <div className="card db-stat-card">
                <Truck size={32} style={{ color: '#3b82f6', marginBottom: 16 }} />
                <h3 className="db-stat-num">1</h3>
                <p className="db-stat-label">In Transit</p>
              </div>
            </div>

            <div className="card db-profile">
              <h2 className="db-section-title" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <User size={22} style={{ color: 'var(--green-600)' }} /> Account Details
              </h2>
              {[
                { label: 'Company Name',    val: 'Global Spices Ltd' },
                { label: 'Primary Contact', val: user?.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : 'Admin Contact' },
              ].map(({ label, val }) => (
                <div key={label} style={{ marginBottom: 20 }}>
                  <label className="db-profile__label">{label}</label>
                  <p className="db-profile__val">{val}</p>
                </div>
              ))}
              <div style={{ marginBottom: 20 }}>
                <label className="db-profile__label">Billing Address</label>
                <p className="db-profile__val" style={{ lineHeight: 1.6 }}>124 Trade Center Blvd,<br />Commercial District,<br />Mumbai, Maharashtra 400001</p>
              </div>
              <button className="db-edit-btn">Edit Profile</button>
            </div>

            <div className="db-support">
              <h3 className="db-support__title">Need Help?</h3>
              <p className="db-support__desc">Our support team is available 24/7 for export documentation and tracking queries.</p>
              <button className="db-support__btn">Contact Account Manager</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
