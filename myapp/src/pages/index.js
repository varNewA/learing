import styles from './index.css'

export default function() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <div className={styles.welcome}></div>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
} 

