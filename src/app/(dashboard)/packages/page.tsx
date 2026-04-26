"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import { Calendar, MapPin, Edit, Trash2 } from 'lucide-react';

const INITIAL_PACKAGES = [
  {
    id: 1,
    name: "Hajj Premium 2025",
    type: "HAJJ",
    tag: "LUXURY",
    price: "₹1,85,000",
    duration: "21 Days",
    includes: ["Hotel", "Flight", "Food", "Visa"],
    location: "Makkah, Madinah",
    active: true,
    imageBg: "linear-gradient(135deg, #1A4A35, #0D2318)"
  },
  {
    id: 2,
    name: "Umrah Economy 2025",
    type: "UMRAH",
    tag: "MOST POPULAR",
    price: "₹65,000",
    duration: "14 Days",
    includes: ["Hotel", "Flight", "Visa"],
    location: "Makkah",
    active: true,
    imageBg: "linear-gradient(135deg, #2ECC71, #0D2318)"
  },
  {
    id: 3,
    name: "Ziyarat Special Tour",
    type: "ZIYARAT",
    tag: "",
    price: "₹45,000",
    duration: "10 Days",
    includes: ["Hotel", "Transport"],
    location: "Multiple Cities",
    active: false,
    imageBg: "linear-gradient(135deg, #5BA87A, #0D2318)"
  }
];

export default function PackageManagement() {
  const [packages, setPackages] = useState(INITIAL_PACKAGES);
  const [activeTab, setActiveTab] = useState("All");

  const toggleStatus = (id: number) => {
    setPackages(packages.map(pkg => 
      pkg.id === id ? { ...pkg, active: !pkg.active } : pkg
    ));
  };

  const deletePackage = (id: number) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      setPackages(packages.filter(pkg => pkg.id !== id));
    }
  };

  const filteredPackages = packages.filter(pkg => {
    if (activeTab === "All") return true;
    if (activeTab === "Hajj") return pkg.type === "HAJJ";
    if (activeTab === "Umrah") return pkg.type === "UMRAH";
    if (activeTab === "Ziyarat") return pkg.type === "ZIYARAT";
    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button 
          className="btn-primary"
          onClick={() => alert("Open Create Package Modal")}
        >
          + Create New Package
        </button>
      </div>

      <div className={styles.filterTabs}>
        {["All", "Hajj", "Umrah", "Ziyarat"].map(tab => (
          <span 
            key={tab}
            className={activeTab === tab ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className={styles.card}>
            <div className={styles.cardImage} style={{ background: pkg.imageBg }}>
              <div className={styles.badges}>
                <span className={`${styles.badge} ${styles.typeBadge} ${pkg.type === 'HAJJ' ? styles.goldBadge : styles.greenBadge}`}>{pkg.type}</span>
                {pkg.tag && <span className={`${styles.badge} ${styles.tagBadge}`}>{pkg.tag}</span>}
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.pkgName}>{pkg.name}</h3>
              <div className={styles.pkgPrice}>{pkg.price}</div>
              
              <div className={styles.row}>
                <Calendar size={14} className="gold-text" />
                <span className="muted-text">{pkg.duration}</span>
              </div>
              
              <div className={styles.includesList}>
                {pkg.includes.map((inc, i) => (
                  <span key={i} className={styles.includeChip}>{inc}</span>
                ))}
              </div>
              
              <div className={styles.row}>
                <MapPin size={14} className="gold-text" />
                <span className="muted-text">{pkg.location}</span>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.toggleRow}>
                <div 
                  className={`${styles.toggle} ${pkg.active ? styles.toggleActive : ''}`}
                  onClick={() => toggleStatus(pkg.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.toggleThumb} />
                </div>
                <span className={pkg.active ? 'gold-text' : 'muted-text'}>
                  {pkg.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className={styles.actions}>
                <button className={styles.iconBtn} onClick={() => alert("Edit " + pkg.name)}>
                  <Edit size={16} className="gold-text" />
                </button>
                <button className={styles.iconBtn} onClick={() => deletePackage(pkg.id)}>
                  <Trash2 size={16} className="muted-text" style={{color: '#E53935'}} />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {filteredPackages.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--color-muted)' }}>
            No packages found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
