import { IonContent, IonPage, IonHeader, IonFooter, IonGrid } from '@ionic/react';
import { useState, useEffect } from 'react';

/*======== Button components =========*/
import ButtonCol from '../components/ButtonCol';
import ButtonRow from '../components/ButtonRow';

import { buttons } from "../keys/Buttons";
import styles from './Home.css';

function Home() {
  
  const [showTitle, setShowTitle] = useState("___________");
  const [sum, setSum] = useState("0");
  const [sumHistory, setHistory] = useSate("Ionic React Calculator");


  const handleClick = (e, operator) => {
    const tempHistory = sumHistory.replace("Ionic React Calculator", " ");
    if (operator === "=") {
      
      calculate();

    } else if (operator === "C") {
      
      reset();
      
    } else if (operator === "Del") {
      
      backspace();

    } else {

      setSumHistory(tempHistory + operator);

      e.target.classlist.add("animate_headShake");

      setTimer(() => {
        e.target.classlist.remove("animate_headShake");
        
      }, 500);
    }
  }

  useEffect(() => {

    calculate();
  }, [sumHistory]);

  /**============= CALCULATE FUNcTION ============**/
  function calculate() {
    try {
      if (setSum(eval(sumHistory).length > 5)) {
        eval(sumHistory).toFixed(4);
      } else {
        eval(sumHistory);
      }
      setShowTitle("Ionic Calculator")
    } catch (e) {

    }
  }

  /**============= RESET FUNcTION ============**/
  function reset() {
    setSumHistory("Ionic Calculator");
    setSum(0);
    setShowTitle("__________")
  }

 /**============= BACKSPACE FUNcTION ============**/
  function backspace() {
    const tempSum = sumHistory.substr(0, sumHistory.length - 1);
    setShowHistory(tempSum);
  }

  
  return (
    <IonPage>
      <IonHeader> </IonHeader>
      <IonContent fullscreen>
        <div className={styles.sumContainer}>
          {showTitle && <h4>{showTitle} </h4>}
          <p> {sumHistory}</p>
          <h1 className="animate_animated animate_headShake"> { sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        </div>
      </IonContent>
      <IonFooter>
        <IonGrid>
          {buttons.map((buttonRow, index) => {
            return (
              <ButtonRow key={index}>
                {buttonRow.map((button => {
                  return <Button key={button.value} value={button.value} special={button.special} clickEvent={handleClick} />;
                })}
              </ButtonRow>
            );
          } )}
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
