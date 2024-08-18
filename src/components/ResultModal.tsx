import React from 'react';
import Modal from './Modal';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalScore: number;
  category: string;
}

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, totalScore, category }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Résultat</h2>
      <p>Votre score total est : {totalScore}</p>
      <p>Catégorie : {category}</p>
      <button onClick={onClose}>Fermer</button>
    </Modal>
  );
};

export default ResultModal;
