import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../styles/button.scss';
import {ReactComponent as SortIcon} from '../assets/icons/sort.svg';
import {ReactComponent as BackIcon} from '../assets/icons/left-arrow.svg';
import {ReactComponent as AddIcon} from '../assets/icons/plus.svg';

const Button = ({type, sortFunc}) => {
    const [showSelect, setShowSelect] = useState(false);

    if (type === 'add') {
        return (
           <Link className="text-clear" to='/addNominee'>
                <span className="buttonComponent addButton">
                <AddIcon style={{padding: '5px'}}/>
                <p>ADD NOMINEE</p>
            </span>
           </Link>
        )
    }

    if (type === 'sort') {
        return (
            <div>
                <span className="buttonComponent sortButton" onClick={() => setShowSelect(!showSelect)}>
                    <SortIcon/>
                    <p>SORT BY</p>
                </span>
                {showSelect ? (
                    <div className="sortTypes">
                        <button onClick={() => sortFunc('default')}>DEFAULT</button>
                        <button onClick={() => sortFunc('desc')}>MOST POINTS</button>
                        <button onClick={() => sortFunc('asc')}>LEAST POINTS</button>
                    </div>
                ) : null}
            </div>
        )
    }

    if (type === 'back') {
        return (
            <Link className="text-clear" to='/'>
                <span className="buttonComponent backButton">
                    <BackIcon width={35} height={35}/>
                    <p>GO BACK</p>
                </span>
            </Link>
        )
    }
}

export default Button;
