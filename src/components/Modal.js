import React from "react";
import {connect} from "react-redux";
import '../styles/modal.scss';
import {deleteNominee} from "../actions";

const Modal = (props) => {
    const {tournament, show, setShow, dispatch, alertShow} = props;

    function handleDeleteNominee() {
        alertShow(true);
        setTimeout(() => alertShow(false), 2000);
        dispatch(deleteNominee(tournament.id));
        setShow(false);
    }

    return show ? (
       <div className="modalContainer">
           <div className="bgShadow"/>
           <div className="modalWrapper">
               <div className="modalHeader">
                   <p>Remove Nominee</p>
               </div>
               <div className="modalContent">
                   <p>
                       Do you want to remove <span>{tournament.name}</span> from nominees?
                   </p>
                   <div className="optionButtonsContainer">
                       <button onClick={() => setShow(false)} className="button">CANCEL</button>
                       <button onClick={handleDeleteNominee} className="button deleteButton">OK</button>
                   </div>
               </div>
           </div>
       </div>
   ) : null
}

export default connect()(Modal);
