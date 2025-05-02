import styles from './WhatsappIcon.module.css';

function WhatsappIcon() {
  return (
    <a
      className={styles['i']}
      href="https://wa.me/5581991167312"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="icon-wpp i-g"></i>
    </a>
  );
}

export default WhatsappIcon;
