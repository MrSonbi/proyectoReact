import { IonContent, IonHeader, IonPage, IonButtons, IonButton } from '@ionic/react';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonButtons slot="end">
                    <IonButton routerLink="/home">Home</IonButton>
                </IonButtons>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>¡Hola! 👋</h1>
                <p>Bienvenido a la página About.</p>
            </IonContent>
        </IonPage>
    );
};

export default About;