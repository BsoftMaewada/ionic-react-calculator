import { IonCol } from "@ionic/react";
import styles from "./ButtonCol.css";



function Button (props) {

    const { value, special, clickEvent } = props;

    return (
        <IonCol className={ `${ special ? styles.specialButton : styles.button } animate__animated animate__faster` } onClick={ e => clickEvent(e, value) }>
            { value === "/" ? <>&divide;</> : value === "*" ? <>&times;</> : value }
        </IonCol>
    );
}

export default Button;
