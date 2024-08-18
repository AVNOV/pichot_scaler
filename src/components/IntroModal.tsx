import React from 'react';
import Modal from './Modal';

interface IntroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroModal: React.FC<IntroModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Informations sur l'échelle de Pichot</h2>
      <p>
        L'échelle de Pichot est un outil couramment utilisé pour évaluer la fatigue chez les individus.
        Elle est composée de huit items simples que les patients doivent évaluer en fonction de leur expérience récente.
        Elle permet de quantifier la fatigue ressentie sur une courte période, généralement les sept derniers jours.
      </p>
      <h3>Structure de l’échelle :</h3>
      <p>
        Les patients sont invités à répondre à chaque item sur une échelle de 0 à 4, où 0 signifie "pas du tout" et 4 signifie "extrêmement".
      </p>
      <h3>Interprétation des Résultats :</h3>
      <p>0 - 8 : Pas de fatigue significative</p>
      <p>9 - 16 : Fatigue légère</p>
      <p>17 - 24 : Fatigue modérée</p>
      <p>25 - 32 : Fatigue sévère</p>
    </Modal>
  );
};

export default IntroModal;
