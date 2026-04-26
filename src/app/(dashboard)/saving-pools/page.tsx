"use client";

import React, { useState } from 'react';
import { 
  Users, UserPlus, PiggyBank, Plane, Calendar, Target,
  IndianRupee, X, CheckCircle2, Plus 
} from 'lucide-react';
import styles from './page.module.css';

const MOCK_POOLS = [
  { id: 1, name: "Umrah Pool 2026", type: "Umrah", members: 450, max: 500, target: "₹ 1,00,000", total: "₹ 2,45,00,000", contrib: "₹ 5,000", freq: "Monthly", next: "15 May 2025", status: "Filling", progress: 60 },
  { id: 2, name: "Hajj Group A", type: "Hajj", members: 120, max: 120, target: "₹ 4,50,000", total: "₹ 4,80,00,000", contrib: "₹ 15,000", freq: "Monthly", next: "01 Jun 2025", status: "Active", progress: 85 },
  { id: 3, name: "Ramadan Ziyarat", type: "Ziyarat", members: 85, max: 100, target: "₹ 60,000", total: "₹ 34,00,000", contrib: "₹ 2,000", freq: "Weekly", next: "10 Apr 2025", status: "Filling", progress: 40 },
];

export default function SavingPools() {
  const [pools] = useState(MOCK_POOLS);
  const [selectedPool, setSelectedPool] = useState<typeof MOCK_POOLS[0] | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className="page-title">Saving Pools</h1>
          <p className="muted-text">Monitor community pilgrimage saving pools</p>
        </div>
        <button className="btn-primary" onClick={() => setIsCreateOpen(true)}>
          <Plus size={16} style={{ marginRight: '8px' }} /> Create New Pool
        </button>
      </div>

      <div className={styles.statsRow}>
        <div className={`${styles.statCard} ${styles.borderGreen}`}>
          <div className={styles.statIcon}><Users size={20} className="success-text" /></div>
          <div>
            <div className={styles.statLabel}>Total Active Pools</div>
            <div className={styles.statValue}>6</div>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.borderGold}`}>
          <div className={styles.statIcon}><UserPlus size={20} className="gold-text" /></div>
          <div>
            <div className={styles.statLabel}>Total Pool Members</div>
            <div className={styles.statValue}>1,240</div>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.borderGold}`}>
          <div className={styles.statIcon}><PiggyBank size={20} className="gold-text" /></div>
          <div>
            <div className={styles.statLabel}>Total Pool Savings</div>
            <div className={styles.statValue}>₹7,59,00,000</div>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.borderGreen}`}>
          <div className={styles.statIcon}><Plane size={20} className="success-text" /></div>
          <div>
            <div className={styles.statLabel}>Travelers Selected This Month</div>
            <div className={styles.statValue}>12</div>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {pools.map(pool => (
          <div key={pool.id} className={styles.poolCard}>
            <div className={styles.poolTop}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className={`${styles.typePill} ${styles[pool.type.toLowerCase()]}`}>{pool.type} Pool</span>
                <span className={`${styles.statusBadge} ${styles[pool.status.toLowerCase()]}`}>{pool.status}</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-white)', marginTop: '12px' }}>{pool.name}</h3>
            </div>
            
            <div className={styles.poolBody}>
              <div className={styles.infoRow}>
                <Users size={16} className="gold-text" />
                <span style={{ fontWeight: 600 }}>{pool.members} / {pool.max} Members</span>
              </div>
              <div className={styles.miniBar}>
                <div className={styles.miniBarFill} style={{ width: `${(pool.members/pool.max)*100}%`, background: pool.members === pool.max ? 'var(--color-success)' : 'var(--color-gold)' }} />
              </div>

              <div className={styles.infoRow} style={{ marginTop: '16px' }}>
                <Target size={16} className="gold-text" />
                <span className="muted-text">Pool Target: {pool.target} per member</span>
              </div>

              <div className={styles.infoRow}>
                <IndianRupee size={16} className="gold-text" />
                <span>Total: <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)' }}>{pool.total}</span></span>
              </div>

              <div className={styles.infoRow}>
                <Calendar size={16} className="gold-text" />
                <span className="muted-text">{pool.contrib} / {pool.freq}</span>
              </div>

              <div className={styles.nextRow}>
                <div style={{ color: 'var(--color-warning)', fontWeight: 600, fontSize: '13px' }}>Next traveler selection: {pool.next}</div>
              </div>

              <div className={styles.progressSection}>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFillGrad} style={{ width: `${pool.progress}%` }} />
                </div>
                <span className="gold-text" style={{ fontSize: '13px', fontWeight: 700 }}>{pool.progress}%</span>
              </div>
            </div>

            <div className={styles.poolFooter}>
              <button className="btn-outline-gold" style={{ flex: 1 }} onClick={() => setSelectedPool(pool)}>View Members</button>
              <button className="btn-primary" style={{ flex: 1 }} disabled={pool.status === 'Filling'}>Select Travelers</button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Drawer */}
      {selectedPool && (
        <>
          <div className={styles.overlay} onClick={() => setSelectedPool(null)} />
          <div className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-white)' }}>{selectedPool.name}</h2>
                <span className={`${styles.typePill} ${styles[selectedPool.type.toLowerCase()]}`} style={{ marginTop: '8px', display: 'inline-block' }}>{selectedPool.type} Pool</span>
              </div>
              <button className={styles.closeBtn} onClick={() => setSelectedPool(null)}><X size={24} /></button>
            </div>

            <div className={styles.tabs}>
              {['overview', 'members', 'transactions', 'travelers'].map(tab => (
                <button 
                  key={tab} 
                  className={`${styles.tabBtn} ${activeTab === tab ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className={styles.drawerContent}>
              {activeTab === 'overview' && (
                <div className={styles.tabPane}>
                  <div className={styles.drawerGrid}>
                    <div className={styles.detailCell}>
                      <div className={styles.cellLabel}>MEMBERS</div>
                      <div className={styles.cellValueWhite}>{selectedPool.members} / {selectedPool.max}</div>
                    </div>
                    <div className={styles.detailCell}>
                      <div className={styles.cellLabel}>TARGET PER MEMBER</div>
                      <div className={styles.cellValueWhite}>{selectedPool.target}</div>
                    </div>
                    <div className={styles.detailCell}>
                      <div className={styles.cellLabel}>COLLECTED</div>
                      <div className={styles.cellValueGold}>{selectedPool.total}</div>
                    </div>
                    <div className={styles.detailCell}>
                      <div className={styles.cellLabel}>REMAINING</div>
                      <div className={styles.cellValueWhite}>₹ 1,55,00,000</div>
                    </div>
                  </div>

                  <div className={styles.fundingBarSection}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span className="muted-text" style={{ fontSize: '13px', fontWeight: 600 }}>Overall Funding Progress</span>
                      <span className="gold-text" style={{ fontSize: '14px', fontWeight: 700 }}>{selectedPool.progress}% Funded</span>
                    </div>
                    <div className={styles.progressTrack} style={{ height: '12px' }}>
                      <div className={styles.progressFillGrad} style={{ width: `${selectedPool.progress}%` }} />
                    </div>
                  </div>

                  <div className="card">
                    <h4 className="muted-text" style={{ fontSize: '13px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 600 }}>Pool Timeline</h4>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div className={styles.timelineDotGreen} />
                        <div style={{ fontSize: '12px', fontWeight: 600, marginTop: '8px' }}>Started</div>
                        <div className="muted-text" style={{ fontSize: '11px' }}>Jan 2024</div>
                      </div>
                      <div style={{ flex: 1, height: '2px', background: 'rgba(255,255,255,0.1)', margin: '0 12px' }} />
                      <div style={{ textAlign: 'center' }}>
                        <div className={styles.timelineDotGold} />
                        <div style={{ fontSize: '12px', fontWeight: 600, marginTop: '8px', color: 'var(--color-gold)' }}>Current</div>
                      </div>
                      <div style={{ flex: 1, height: '2px', background: 'rgba(255,255,255,0.1)', margin: '0 12px' }} />
                      <div style={{ textAlign: 'center' }}>
                        <div className={styles.timelineDotFuture} />
                        <div style={{ fontSize: '12px', fontWeight: 600, marginTop: '8px' }}>Target</div>
                        <div className="muted-text" style={{ fontSize: '11px' }}>Dec 2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'travelers' && (
                <div className={styles.tabPane}>
                  <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-gold)' }}>
                    <h4 style={{ color: 'var(--color-white)', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Eligible Members (Target Reached)</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'var(--bg-inner)', borderRadius: '12px' }}>
                      <div className={styles.avatarMini} style={{ background: 'rgba(201, 168, 76, 0.1)', color: 'var(--color-gold)' }}>I</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600 }}>Ibrahim Ali <span style={{ fontSize: '10px', background: 'rgba(46, 204, 113, 0.15)', color: 'var(--color-success)', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px' }}>100% Complete</span></div>
                        <div style={{ fontSize: '12px', color: 'var(--color-gold)' }}>₹1,00,000 saved • Joined 12 Jan 2024</div>
                      </div>
                      <button className="btn-outline-gold" style={{ height: '32px', fontSize: '12px', padding: '0 12px', color: 'var(--color-success)', borderColor: 'var(--color-success)' }}>Select as Traveler</button>
                    </div>
                  </div>

                  <div className="card" style={{ background: 'rgba(46, 204, 113, 0.05)', border: '1px solid rgba(46, 204, 113, 0.2)', marginTop: '16px' }}>
                    <h4 style={{ color: 'var(--color-success)', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Selected Travelers</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'var(--bg-inner)', borderRadius: '12px' }}>
                      <div className={styles.avatarMini}>Y</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600 }}>Yusuf Pathan</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-success)' }}>Selected on 12 Apr 2024</div>
                      </div>
                      <button className="btn-primary" style={{ height: '32px', fontSize: '12px', padding: '0 12px' }}>Assign to Package</button>
                    </div>
                  </div>

                  <div style={{ background: '#223D2C', border: '1px solid var(--border-gold)', borderRadius: '12px', padding: '16px', marginTop: '16px' }}>
                    <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Selection criteria: <span style={{ color: 'var(--color-white)', fontWeight: 600 }}>Saving completion → Join date (first-come-first-served)</span></div>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--color-gold)', fontSize: '13px', fontWeight: 600, marginTop: '8px', cursor: 'pointer' }}>Edit criteria</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Create Pool Drawer */}
      {isCreateOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsCreateOpen(false)} />
          <div className={styles.drawer} style={{ width: '480px' }}>
            <div className={styles.drawerHeader}>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-white)' }}>Create New Pool</h2>
              <button className={styles.closeBtn} onClick={() => setIsCreateOpen(false)}><X size={24} /></button>
            </div>

            <div className={styles.drawerContent} style={{ gap: '20px' }}>
              <div>
                <label className="muted-text" style={{ fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Pool Name</label>
                <input type="text" className="input-field" placeholder="e.g. Ramadan Umrah 2026" style={{ width: '100%' }} />
              </div>

              <div>
                <label className="muted-text" style={{ fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Pool Type</label>
                <select className="input-field" style={{ width: '100%' }}>
                  <option>Hajj</option>
                  <option>Umrah</option>
                  <option>Ziyarat</option>
                </select>
              </div>

              <div>
                <label className="muted-text" style={{ fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>Member Limit</label>
                <div style={{ fontSize: '11px', color: 'var(--color-muted)', marginBottom: '8px' }}>Max travelers in this pool</div>
                <input type="number" className="input-field" placeholder="100" style={{ width: '100%' }} />
              </div>

              <div>
                <label className="muted-text" style={{ fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Saving Target per Member</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '16px', top: '16px', color: 'var(--color-gold)', fontWeight: 600 }}>₹</span>
                  <input type="number" className="input-field" placeholder="100000" style={{ width: '100%', paddingLeft: '40px' }} />
                </div>
              </div>

              <div>
                <label className="muted-text" style={{ fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Start Date</label>
                <input type="date" className="input-field" style={{ width: '100%' }} />
              </div>

              <div>
                <label className="muted-text" style={{ fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Target Completion Date</label>
                <input type="date" className="input-field" style={{ width: '100%' }} />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Open for Registration</div>
                    <div className="muted-text" style={{ fontSize: '12px' }}>Allow new members to join</div>
                  </div>
                  <div style={{ width: '44px', height: '24px', background: 'var(--color-success)', borderRadius: '50px', position: 'relative' }}>
                    <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: '23px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.drawerFooter} style={{ display: 'flex', gap: '16px', padding: '24px', background: '#0D2318' }}>
              <button className="btn-secondary" style={{ flex: 1 }} onClick={() => setIsCreateOpen(false)}>Cancel</button>
              <button className="btn-primary" style={{ flex: 1 }}>Create Pool</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
