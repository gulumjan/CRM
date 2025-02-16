import React from 'react';
import styles from "./CreatePatient.module.scss";

interface CreatePatientProps {
  onClose: () => void;
}

export const CreatePatient: React.FC<CreatePatientProps> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    onClose(); // Close modal after successful submission
  };

  return (
    <div className={styles.crPatient}>
      <div className={styles.crPatientCard}>
        <h1>Добавление нового пациента</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} type="text" placeholder="ФИО" required />
          <select className={styles.select} required>
            <option value="">Выберите пол</option>
            <option value="Мужской">Мужской</option>
            <option value="Женский">Женский</option>
          </select>
          <input className={styles.input} type="text" placeholder="Группа крови" required />
          <input className={styles.input} type="date" required />
          <input 
            className={styles.input} 
            type="tel" 
            placeholder="Номер телефона" 
            pattern="[0-9]{11}"
            required 
          />
          <button className={styles.button} type="submit">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};