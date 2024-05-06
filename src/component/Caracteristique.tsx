import React from 'react';
import './Caracteristique.css'; // Importez le fichier CSS avec les styles personnalisés

export function Caracteristique() {
  return (
    <div className="caracteristique-container">
      <p className="intro">
        <i className='title mb-2'>
          Les caractéristiques du Prêt personnel Projet.
        </i>
        <p className='mt-2'> Vous souhaitez financer votre futur voyage, croisière ? Organiser un mariage ou tout autre évènement ? Préparer l’arrivée d’un heureux évènement ? La Banque Postale vous propose le financement adapté à votre besoin : le Prêt personnel Projet.</p>
      </p>
      <div>
        <div className='flex between items-center '>
          <i className='bg-red-200 p-9 rounded-md mt-5'>
            <p className='underline'>Aucun apport personnel exigé.</p>
            <p className="flex items-center"> {/* Ajoutez la classe flex et items-center pour aligner le texte avec la flèche */}
              <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <p>Un prêt accessible dès 1 500 €.</p>
            </p>
            <p className="flex items-center"> {/* Ajoutez la classe flex et items-center pour aligner le texte avec la flèche */}
              <svg className="w-12 h-12 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <p>Des assurances(2) facultatives mais recommandées, qui s'adaptent au mieux à votre situation.</p>
            </p>
          </i>
          <p className='bg-green-200 p-5 rounded-md mt-5'><img src="logo/image.png" alt="logo de assurance" /></p>
        </div>
      </div>
      <p className="example">
        <i>
          Exemple(3) : pour un prêt personnel Projet de 8 000 € sur 49 mois au taux débiteur fixe de 6,45 %, soit un TAEG fixe de 7,18 %, le remboursement s’effectue en 49 mensualités de 188 €. Montant total dû : 9 212 €. Dont 80 € de frais de dossier. Assurance Décès Invalidité(2) facultative: TAEA de 1,81 %, soit 6,33 €/mois (non inclus dans la mensualité), soit un montant total dû sur la durée totale du prêt de 310,17 €.
        </i>
      </p>
      <p className="disclaimer">
        <i>
          Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
        </i>
      </p>
    </div>
  );
}

export default Caracteristique;
