import React, { useEffect, useState } from "react";

import close from '../../files/close.png'


const Modal = ({item, stateChanger}) => {


    const portfolio = ["- Token d'authentification pour la gestion des visiteurs", "- Appel vers l'API de météo par géolocalisation", "- Listes d'éléments", "- Gestion des visiteurs", "- CRU des visiteurs"]
    const projapp = ["- Sélection et création de profils",'- CRUD des To Dos, Notes, éléments de meetings', "- Recherche et filtres", "- Vue Kanban", "- Création de Notes depuis les To Dos et inversement", "- Création de compte"]
    const gif = ["- Appels vers l'API pour afficher les Gifs", "- Vote par gif", "- Filtres par catégorie", "- Création de compte", "- Leaderboard"]
    const association = [ "- gestion des 3 Roles (Admin, Gestionnaire de site et utilisateur)",  "- Message aux bénévoles", "- CRUD de soirées de distribution", "- Ajout de bénéboles aux soirées afin de gérer la soirée", "- Gestion des bénévoles", "- Création de comptes"]
    const ecom = ["- Appels vers l'API Stripe pour la gestion du paiement (carte de crédit de test)", "- Création de comptes", "- Gestion du panier"] 
    const adminecom = ["- Suivi des transactions et des ordres", "- CRUD de produits et des catégories", "- Voir les paniers non finalisés des utilisateurs"]
    const scanningapp = ["- Import de photo", "- AI qui détecte les textes", "- Envoyer un message (ex, voiture garé devant son parking)", "- AI qui analyse le texte et évite les propos inappropriés", "- Se mettre comme Follower du numéro de la proprété", "- Recevoir un email pour chaque nouveau message de numéro que l'on suit"]
    const mapproject = ["- Rechercher des lieux", "- Proposer des améliorations et suggestions", "- Voter pour les projets des lieux", "- Ajouter vos favoris", "- Se créer un compte"]

    const hrefItem = {
        "portfolio" : "https://tbonnard.onrender.com/",
        "projapp" : "https://projapp.onrender.com/",
        "gif" : "https://playgif.onrender.com/",
        "association" : "https://association.pythonanywhere.com/",
        "ecom" : "https://ecomplatform.pythonanywhere.com",
        "adminecom" : "https://ecomplatform.pythonanywhere.com/admin",
        "scanningapp": "https://scanningapp.onrender.com/",
        "mapproject": "https://plagest.onrender.com/"
    }

    const [hrefFinal, setHrefFinal] = useState()

    useEffect(() => {
        switch (item) {
            case "portfolio":
                setHrefFinal(hrefItem.portfolio)
                break
            case "projapp":
                setHrefFinal(hrefItem.projapp)
                break
            case "gif":
                setHrefFinal(hrefItem.gif)
                break
            case "association":
                setHrefFinal(hrefItem.association)
                break
            case "ecom":
                setHrefFinal(hrefItem.ecom)
                break
            case "adminecom":
                setHrefFinal(hrefItem.adminecom)
                break
            case "scanningapp":
                setHrefFinal(hrefItem.scanningapp)
                break
            case "mapproject":
                setHrefFinal(hrefItem.mapproject)
                break    
            default:
                setHrefFinal(hrefItem.portfolio)        
            }
    }, [item])

    if (!item) {
        return null
    }

    return (
        <div id="modal" className="modal">
            <div  className="modalContent">
                <img className="closeIcon" src={close}  alt='close' title='close' onClick={() => stateChanger(null)}/>
                <div className="modalTitle">
                    <h3>Fonctionnalités principales</h3>
                </div>
                <div className="modalText">
                    {item == "portfolio" && portfolio.map((item, index) => <p key={index} className="modalTextText">{item}</p>)}
                    {item == "projapp" && projapp.map((item, index) => <p key={index} className="modalTextText">{item}</p>)}
                    {item == "gif" && gif.map((item, index) => <p key={index} className="modalTextText">{item}</p>)}
                    {item == "association" && association.map((item, index) => <p key={index} className="modalTextText">{item}</p>)}
                    {item == "ecom" && ecom.map((item, index) => <p key={index} className="modalTextText">{item}</p>)}
                    {item == "adminecom" && adminecom.map((item, index) => <p key={index} className="modalTextText">{item}</p>)}
                    {item == "scanningapp" && scanningapp.map((item, index) => <p key={index} className="modalTextText">{item}</p>)}
                    {item == "mapproject" && mapproject.map((item, index) => <p key={index} className="modalTextText">{item}</p>)}
               </div>
               <div className="modalLink" >
                <a href={hrefFinal} target="_blank">
                        <button className="submit_button">
                            voir le site démo
                        </button>
                    </a>
               </div>
                <p className="textinfo">le site pourrait être long à charger</p>
            </div>

        </div>
      

    )
}

export default Modal