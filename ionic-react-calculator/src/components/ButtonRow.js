import { IonRow } from '@ionic/react';
import styles from '@./ButtonRow.css';

function ButtonRow (props) {
    <IonRow className={styles.buttonRow}>
        {props.children}
    </IonRow>
}

export default ButtonRow;