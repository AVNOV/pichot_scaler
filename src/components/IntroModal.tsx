import React from 'react';
import Modal from './Modal';

interface IntroModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const IntroModal: React.FC<IntroModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <p>
                Application développée sous la direction de <strong>DE CLERCK Catherine</strong> dans le cadre de l'obtention de son diplôme UC2 CC Plongée Profonde et Tutorat.
            </p>
            <p><i>
                L'échelle de Pichot est un outil couramment utilisé pour évaluer la fatigue chez les individus.<br />
                Elle permet de quantifier la fatigue ressentie sur une courte période, généralement les sept derniers jours.
            </i></p>
            <h3>Structure de l’échelle :</h3>
            <p><i>
                Les patients sont invités à répondre à chaque item sur une échelle de 0 à 4, où 0 signifie "pas du tout" et 4 signifie "extrêmement".
            </i></p>
            <h3>Interprétation des Résultats :</h3>
            <p><i>0 - 8 : Pas de fatigue significative<br />
            9 - 16 : Fatigue légère<br />
            17 - 24 : Fatigue modérée<br />
            25 - 32 : Fatigue sévère</i></p>
            <button onClick={onClose} className="modal-button">
                Fermer
            </button>
        </Modal>
    );
};

export default IntroModal;
