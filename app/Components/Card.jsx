import React from 'react';

const Card = () => {
    // Exemple de données
    const data = [
        { University: "Université Paris 8 (Saint-Denis - 93)", Degree: "Licence - Langues, littératures et civilisations étrangères et régionales - Parcours Mondes hispaniques", AvailableSpots: 30, AdmissionRate: "50%" },
        { University: "Université Paris-Saclay - Campus de Versailles (78)", Degree: "Licence - Double diplôme - Licence Chimie, Sciences de la vie - Licence Double-Diplôme Chimie, Sciences de la Vie", AvailableSpots: 20, AdmissionRate: "60%" },
        { University: "Nouvelle UNI", Degree: "Licence", AvailableSpots: 21, AdmissionRate: "100%" },
        // Ajoutez ici 8 autres enregistrements similaires
    ];

    return (
        <div style={styles.containerStyle}>
            {data.map((item, index) => (
                <div key={index} style={styles.cardStyle}>
                    <h2>{item.University}</h2>
                    <p>Diplôme: {item.Degree}</p>
                    <div style={styles.wrapper}>
                    <p style={styles.text}>Places disponibles: {item.AvailableSpots}</p>
                    <p style={styles.text}>Taux d'admission: {item.AdmissionRate}</p>
                    </div>
                    <button style={styles.button}>Voir la formation</button>
                </div>
            ))}
  
        </div>
    );
}

export default Card;

const styles = {
    cardStyle :{
        border: '1px solid #ddd',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centrer le contenu horizontalement
        justifyContent: 'center', // Centrer le contenu verticalement
        textAlign: 'center', // Centrer le texte
        height: '400px', // Hauteur fixe pour chaque carte
        width:'600px',
    },
    containerStyle : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centrer verticalement
        alignItems: 'center', // Centrer horizontalement
    },
    button: {
        backgroundColor: '#1212FF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderBottom: '2px solid #1212FF',
        borderRadius: '5px'
    },
    wrapper:{
        display: 'flex',
        justifyContent: 'space-around', // Espacer les éléments uniformément
        width: '100%', 
    },
    text: {
        color: "#1212FF"
    }
}

