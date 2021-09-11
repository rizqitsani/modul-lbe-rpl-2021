import styles from '../styles/Box.module.css';

const CssModule = (props) => {
  return <div className={styles.box}>{props.children}</div>;
};

export default CssModule;
