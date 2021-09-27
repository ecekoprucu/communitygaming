import React from "react";
import '../styles/alert.scss';

const Alert = ({type, show, nomineeName}) => {

    return show ? (
        <div className="alertWrapper">
            <p>
                {type === 'add' ? 'New nominee added to the nominees' : `Tournament removed from nominees` }
            </p>
        </div>
    ) : null
}

export default Alert;
