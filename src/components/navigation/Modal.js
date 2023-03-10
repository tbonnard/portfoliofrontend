import React, { useEffect, useState } from "react";

import close from '../../files/close.png'


const Modal = ({item, stateChanger}) => {


    const portfolio = ["- Token d'authentification pour la gestion des visiteurs", "- Appel vers l'API de météo par géolocalisation", "- Listes d'éléments", "- Gestion des visiteurs", "- CRU des visiteurs"]
    const projapp = ["- Sélection et création de profils",'- CRUD des To Dos, Notes, éléments de meetings', "- Recherche et filtres", "- Vue Kanban", "- Création de Notes depuis les To Dos et inversement", "- Création de compte"]
    const gif = ["- Appels vers l'API pour afficher les Gifs", "- Vote par gif", "- Filtres par catégorie", "- Création de compte", "- Leaderboard"]
    const association = [ "- gestion des 3 Roles (Admin, Gestionnaire de site et utilisateur)",  "- Message aux bénévoles", "- CRUD de soirées de distribution", "- Ajout de bénéboles aux soirées afin de gérer la soirée", "- Gestion des bénévoles", "- Création de comptes"]
    const ecom = ["- Appels vers l'API Stripe pour la gestion du paiement (carte de crédit de test)", "- Création de comptes", "- Gestion du panier"] 
    const adminecom = ["- Suivi des transactions et des ordres", "- CRUD de produits et des catégories", "- Voir les paniers non finalisés des utilisateurs"]

    const hrefItem = {
        "portfolio" : "https://tbonnard.onrender.com/",
        "projapp" : "https://projapp.onrender.com/",
        "gif" : "https://playgif.onrender.com/",
        "association" : "https://association.pythonanywhere.com/",
        "ecom" : "https://ecomplatform.pythonanywhere.com",
        "adminecom" : "https://ecomplatform.pythonanywhere.com/admin"
    }

    const [hrefFinal, setHrefFinal] = useState()

    useEffect(() => {
        if (item==="portfolio") {
            setHrefFinal(hrefItem.portfolio)
        } else if (item==="projapp") {
            setHrefFinal(hrefItem.projapp)
        } else if (item==="gif") {
            setHrefFinal(hrefItem.gif)
        } else if (item==="association") {
            setHrefFinal(hrefItem.association)
        } else if (item==="ecom") {
            setHrefFinal(hrefItem.ecom)
        } else if (item==="adminecom") {
            setHrefFinal(hrefItem.adminecom)
        } else {
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