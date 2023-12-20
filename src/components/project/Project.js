import React, { useState } from "react";

import Modal from "../navigation/Modal";

import association from '../../files/project/association.png'
import gif from '../../files/project/gif.png'
import ecom from '../../files/project/ecom.png'
import admin_inventory from '../../files/project/admin_inventory.png'
import projapp from '../../files/project/projapp.png'
import portfolio from '../../files/project/portfolio.png'
import scanningapp from '../../files/project/scanningapp.png'
import mapproject from '../../files/project/mapproject.png'


import js from '../../files/techno/js.png'
import python from '../../files/techno/python.png'
import react from '../../files/techno/react.png'
import html_css from '../../files/techno/html_css.png'
import git from '../../files/techno/git.png'
import django from '../../files/techno/django.png'
import rest from '../../files/techno/rest.png'
import node from '../../files/techno/node.png'
import db from '../../files/techno/db.png'
import github from '../../files/techno/github.png'
import flask from '../../files/techno/flask.png'

import more from '../../files/more.png'


const Project = () => {
    
    const [item, setItem] = useState(null)

    return (
        <div id='portfolio' className="container">
            <Modal item={item} stateChanger={setItem} />
            <h2 className="titreSection">Projets</h2>
            <div className="projectGlobal">

            <div className="projectItem"> 
                {/* <div className="tagProject">en cours</div> */}
                    <div className="projectItemTop" style={{backgroundColor: "rgb(137, 202, 142)"}}>
                        <img src={mapproject} alt='mapproject' title='mapproject'/>
                        <div className="middle" onClick={() => setItem("mapproject")}>
                            <div className="textMiddle">Proposer des suggestions et améliorations à vos endroits favoris
                                <img className="moreIcon" src={more} alt='more' title='more'/>
                            </div>
                        </div>
                    </div>
                    <div className="projectItemBottom">
                        <p>Améliorer vos lieux</p>
                        <div className="tech_icons">
                            <img src={js} alt="js" title="js"/>
                            <img src={react} alt="ReactJS" title="ReactJS"/>
                            <img src={django} alt="django" title="django"/>
                            <a href="https://github.com/tbonnard/mapProjectBackend" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
                </div>


            <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "rgb(242, 220, 226)"}}>
                        <img src={scanningapp} alt='scanningapp' title='scanningapp'/>
                        <div className="middle" onClick={() => setItem("scanningapp")}>
                            <div className="textMiddle">Importer une photo de plaque d'immatriculation et laisser un message
                                <img className="moreIcon" src={more} alt='more' title='more'/>
                            </div>
                        </div>
                    </div>
                    <div className="projectItemBottom">
                        <p>Scanning App</p>
                        <div className="tech_icons">
                            <img src={js} alt="js" title="js"/>
                            <img src={react} alt="ReactJS" title="ReactJS"/>
                            <img src={django} alt="django" title="django"/>
                            <a href="https://github.com/tbonnard/scanningBackend" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "rgb(247, 255, 211)"}}>
                        <img src={portfolio} alt='portfolio' title='portfolio'/>
                        <div className="middle" onClick={() => setItem("portfolio")}>
                            <div className="textMiddle">Portfolio avec gestion backend des visiteurs listant quelques projets personnels et leur github
                                <img className="moreIcon" src={more} alt='more' title='more'/>
                            </div>
                        </div>
                    </div>
                    <div className="projectItemBottom">
                        <p>Portfolio</p>
                        <div className="tech_icons">
                            <img src={js} alt="js" title="js"/>
                            <img src={react} alt="ReactJS" title="ReactJS"/>
                            <img src={django} alt="django" title="django"/>
                            <a href="https://github.com/tbonnard/portfoliofrontend" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#c7e9fd"}}>
                        <img src={gif} alt='gif' title='gif'/>
                        <div className="middle" onClick={() => setItem("gif")}>
                            <div className="textMiddle">Application permettant de voter pour les meilleurs gifs et de se créer un "hall of fame" de gif
                                <img className="moreIcon" src={more} alt='more' title='more'/>
                            </div>
                        </div>
                    </div>
                    <div className="projectItemBottom">
                        <p>Gif Fame</p>
                        <div className="tech_icons">
                            <img src={js} alt="js" title="js"/>
                            <img src={react} alt="ReactJS" title="ReactJS"/>
                            <img src={node} alt="Node.js" title="Node.js"/>
                            <a href="https://github.com/tbonnard/gif_vote" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#eaf7f6"}}>
                        <img src={projapp} alt='projapp' title='projapp'/>
                        <div className="middle" onClick={() => setItem("projapp")}>
                            <div className="textMiddle">Outils de suivi de projets (to do, notes, daily, meetings) et création de profils (ex, pour freelancers)
                                <img className="moreIcon" src={more} alt='more' title='more'/>
                            </div>
                        </div>
                    </div>
                    <div className="projectItemBottom">
                        <p>Suivi de gestion de projets</p>
                        <div className="tech_icons">
                            <img src={js} alt="js" title="js"/>
                            <img src={react} alt="ReactJS" title="ReactJS"/>
                            <img src={node} alt="Node.js" title="Node.js"/>
                            <a href="https://github.com/tbonnard/projapp" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#f7f7f7"}}>
                        <img src={association} alt='association' title='association'/>
                        <div className="middle" onClick={() => setItem("association")}>
                            <div className="textMiddle">Gestion des bénévoles, des présences et des communications entre l'association et les bénévoles
                                <img className="moreIcon" src={more} alt='more' title='more'/>
                            </div>
                        </div>
                    </div>
                    <div className="projectItemBottom">
                        <p>Gestion associative</p>
                        <div className="tech_icons">
                            <img src={python} alt="python" title="python"/>
                            <img src={django} alt="django" title="django"/>
                            <img src={js} alt="js" title="js"/>
                            <a href="https://github.com/tbonnard/association_benevoles" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
                </div>
                

                <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#fe436e"}}>
                        <img src={ecom} alt='ecom' title='ecom'/>
                        <div className="middle" onClick={() => setItem("ecom")}>
                            <div className="textMiddle">e-com listant les produits de sa plateforme Admin et intégrer à StripeAPI pour le paiement
                                <img className="moreIcon" src={more} alt='more' title='more'/>
                            </div>
                        </div>
                    </div>
                    <div className="projectItemBottom">
                        <p>e-commerce</p>
                        <div className="tech_icons">
                            <img src={python} alt="python" title="python"/>
                            <img src={flask} alt="flask" title="flask"/>
                            <img src={js} alt="js" title="js"/>
                            <a href="https://github.com/tbonnard/ecom_and_admin_inventory" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projectItem">
                    <div className="projectItemTop" style={{backgroundColor: "#3f87bd"}}>
                        <img src={admin_inventory} alt='admin_inventory' title='admin_inventory'/>
                        <div className="middle" onClick={() => setItem("adminecom")}>
                            <div className="textMiddle">Plateforme Admin du site e-com permettant de gérer les produits, les achats et les transactions
                                <img className="moreIcon" src={more} alt='more' title='more'/>
                            </div>
                        </div>
                    </div>
                    <div className="projectItemBottom">
                        <p>Admin inventaire</p>
                        <div className="tech_icons">
                            <img src={python} alt="python" title="python"/>
                            <img src={flask} alt="flask" title="flask"/>
                            <img src={js} alt="js" title="js"/>
                            <a href="https://github.com/tbonnard/ecom_and_admin_inventory" target="_blank">
                                <img className="github_portf" src={github} alt="Github" title="Github"/>
                            </a>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Project
