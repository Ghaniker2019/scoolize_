import React from 'react';
import Image from 'next/image';
import logo from '../Logo.png'; 
import Link from 'next/link';


export default function Header() {
  return (
    <header style={styles.header}>
      <Link href="/"><Image src={logo} alt="Logo" style={styles.logo} /></Link>
      <nav>
        <ul style={styles.navList}>
          <Link href="/Univ" style={styles.linkStyle}><li style={styles.navItem}>Plateforme universitaire</li></Link>
          <Link href="/Teacher" style={styles.linkStyle}><li style={styles.navItem}>Plateforme enseignant</li></Link>
          <Link href="/Student" style={styles.linkStyle}><li style={styles.navItem}>Plateforme étudiant</li></Link>
          <Link href="/Login" style={styles.linkStyle}><li style={styles.navItem}>Me connecter</li></Link>
          <Link href="/Contact" style={styles.linkStyle}><li style={styles.navItem}>Contact</li></Link>
        </ul>
      </nav>
    </header>
  );
}

// Styles CSS en JS
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    height: '50px',
    maxWidth: '250px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
    cursor: 'pointer',
  },
  linkStyle: {
    color: 'black',
    textDecoration: 'none',
  },
};
