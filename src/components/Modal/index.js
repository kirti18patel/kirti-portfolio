import React from 'react';
import "./modal.css"

const Modal = ({ currentProject, onClose }) => {
    const {name,image, github, deployed, description, index} = currentProject;

    return (
      <div className="modalBackdrop" onClick={(e) =>{
        if(e.target !== e.currentTarget)
          return onClose;
      }} >
        <div className="modalContainer">
            <div className="flex-space-between">
                <h3 className="modalTitle">{name}</h3>
                <button className="modal-close-btn" onClick={onClose} type="button">x</button>
            </div>
            <div className="project-info flex-center-column">
                <div className="project-img flex-center">
                    <a href={deployed} className="flex-center decoration-none-white" target="_blank" rel="noreferrer">
                        <img src={image} alt="current category" loading="lazy"/>
                    </a>
                </div>
                <div className="project-description text-center">
                    <p>{description}</p>
                    <br></br>
                    <a href={github} className="repo-link decoration-none-white text-center" target="_blank" rel="noreferrer"><span></span><i className="fa fa-github"></i> Source Code</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Modal;