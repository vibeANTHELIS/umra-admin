import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { User, Mail, Phone, Lock, EyeOff, Lock as LockIcon } from 'lucide-react';

export default function SignUp() {
  return (
    <div className={styles.authCard}>
      <div className={styles.cardHeader}>
        <div className={styles.logoMini}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <h2 className={styles.title}>Umrah Travel</h2>
        <span className={styles.subtitle}>Admin Panel</span>
      </div>

      <div className={styles.tabSwitcher}>
        <Link href="/auth/signin" className={styles.tab}>Sign In</Link>
        <Link href="/auth/signup" className={styles.tabActive}>Sign Up</Link>
      </div>

      <h3 className={styles.formTitle}>Create Admin Account</h3>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <User size={18} className={styles.inputIcon} />
            <input type="text" placeholder="Enter full name" className={styles.input} />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <Mail size={18} className={styles.inputIcon} />
            <input type="email" placeholder="Work email address" className={styles.input} />
          </div>
        </div>
        
        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <Phone size={18} className={styles.inputIcon} />
            <input type="tel" placeholder="+91 XXXXX XXXXX" className={styles.input} />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <Lock size={18} className={styles.inputIcon} />
            <input type="password" placeholder="Create password" className={styles.input} />
            <EyeOff size={18} className={styles.inputIconRight} />
          </div>
        </div>

        <div className={styles.roleGroup}>
          <div className={styles.roleSwitcher}>
            <div className={styles.roleActive}>Staff Admin</div>
            <div className={styles.role}>Senior Admin</div>
          </div>
        </div>

        <div className={styles.rememberRow}>
          <label className={styles.checkboxLabel}>
            <div className={styles.checkboxChecked}>✓</div>
            <span className={styles.rememberText}>
              I agree to <Link href="#" className="gold-text">Terms of Service</Link> and <Link href="#" className="gold-text">Privacy Policy</Link>
            </span>
          </label>
        </div>

        <button type="button" className={styles.submitBtn}>Create Account →</button>
      </form>

      <div className={styles.divider} />

      <div className={styles.cardFooter}>
        <LockIcon size={12} className="gold-text" />
        <span className={styles.secureText}>Secured with SSL Encryption</span>
      </div>
    </div>
  );
}
