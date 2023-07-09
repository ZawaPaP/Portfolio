import styles from './modal.module.css';

export default function Modal({ isOpen, onClose }) {
  return (
    <>
    {isOpen && (
    <div className={styles.container}>
      <section className={styles.containerInner}>
        <h2 className={styles.header}>Confirmation</h2>
        <button
          type="button"
          aria-label="close"
          className={styles.iconClose}
          onClick={onClose}
        ></button>
        <p className={styles.contents}>
          Thank you for contacting us! We have received your email and will get back to you shortly.
        </p>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={`${styles.button} ${styles.closeButton}`}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </section>
    </div>
    )}
    </>
  );
}
