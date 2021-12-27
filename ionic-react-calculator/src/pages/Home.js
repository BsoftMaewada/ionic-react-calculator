import { IonContent, IonPage, IonHeader, IonFooter, IonGrid } from '@ionic/react';
import { useState, useEffect } from 'react';

/*======== Button components =========*/
import ButtonCol from '../components/ButtonCol';
import ButtonRow from '../components/ButtonRow';

import styles from './Home.css';

function Home() {
  
  const [showTitle, setShowTitle] = useState("___________");
  const [sum, setSum] = useState("0");
  const [sumHistory, setHistory] = useSate("Ionic React Calculator");


  const handleEvent = (e, operator) => {
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

  }

  /**============= RESET FUNcTION ============**/
  function reset() {

  }

 /**============= BACKSPACE FUNcTION ============**/
  function backspace() {


  }

  
  return (
    <IonPage>
      <IonHeader> </IonHeader>
      <IonContent fullscreen>

      </IonContent>
      <IonFooter>
        <IonGrid>
          <ButtonRow key={index}>
            {buttons.map((buttonRow,index) => {
              return <Button key={button.value} value={button.value} special={button.special} clickEvent={button.handleEvent} />; 
            })}
          </ButtonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
