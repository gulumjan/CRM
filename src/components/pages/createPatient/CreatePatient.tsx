import React from 'react';
import styles from "@/components/pages/createPatient/CreatePatient.module.scss"

const CreatePatient = () => {
    return (
        <div className={styles.crPatient}>
        <div className="container">
          <div className={styles.crPatientCard}>
            <h1>Добавление нового пациента</h1>
            <form className={styles.form}>
              <input className={styles.input} type="text" placeholder="ФИО" />
        
      
              <select className={styles.select}>
                <option value="">Выберите пол</option>
                <option value="Мужской">Мужской</option>
                <option value="Женский">Женский</option>
              </select>
         
      
              <input className={styles.input} type="text" placeholder="Группа крови" />
         
      
              <input className={styles.input} type="date" />
            
      
              <input className={styles.input} type="text" placeholder="Номер телефона" />
       
      
              <button className={styles.button} type="submit">
                Добавить
              </button>
            </form>
          </div>
        </div>
      </div>
      
    );
};

export default CreatePatient;