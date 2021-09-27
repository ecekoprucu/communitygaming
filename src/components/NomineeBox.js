import React, {useState} from "react";
import {connect} from "react-redux";
import {ReactComponent as ArrowUp} from '../assets/icons/arrowUp.svg';
import {ReactComponent as ArrowDown} from '../assets/icons/arrowDown.svg';
import '../styles/nomineeBox.scss';
import {decreasePoint, increasePoint} from "../actions";

const NomineeBox = (props) => {
    const {tournament, helpers, dispatch} = props;
    const [showDelete, setShowDelete] = useState(false);

    function handleDelete () {
        helpers.modal(true);
        helpers.nominee(tournament.id);
    }

    function handlePointChange (type, id) {
        switch (type) {
            case 'increase':
                dispatch(increasePoint(id));
                break;
            case 'decrease':
                dispatch(decreasePoint(id));
                break;
            default:
                return;
        }
    }

    return (
        <div className="nomineeBoxContainer" onMouseOver={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)}>
            <div className="imgWrapper">
                <img src={tournament.img} alt="#"/>
                <div className="pointsWrapper">
                    <p>{tournament.points}</p>
                    <p>POINTS</p>
                </div>
            </div>
            <div className="detailWrapper">
                <p>{tournament.name}</p>
               <div>
                   <p className="description">Winner:</p>
                   <p>{tournament.winner}</p>
               </div>
              <div>
                  <p className="description">Last Vote Date:</p>
                  <p>{tournament.lastVoteDate}</p>
              </div>
            </div>
            <div className="optionsWrapper">
                <div className="leftOptions">
                    <button className="button" onClick={() => handlePointChange('increase', tournament.id)}> <ArrowUp/> UP</button>
                    <button className="button downButton" onClick={() => handlePointChange('decrease', tournament.id)}> <ArrowDown/> DOWN</button>
                </div>
                <div className="deleteOption">
                    <button onClick={handleDelete} className={showDelete ? "deleteButton button" : "hidden"}>DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default connect()(NomineeBox);
