import React, {useState} from "react";
import {Header} from "../components/Header";
import Button from "../components/Button";
import '../styles/addNomineePage.scss';
import Input from "../components/Inputs";
import {addNominee} from "../actions";
import Alert from "../components/Alert";
import {connect} from "react-redux";

const AddNominee = (props) => {
    const [values, setValues] = useState({
        name: '',
        winner: '',
        img: ''
    });

    const [showAlert, setShowAlert] = useState(false);

    function changeValue (value, valueType) {
        switch (valueType) {
            case 'name':
                setValues({...values, name: value});
                return;
            case 'winner':
                setValues({...values, winner: value});
                return;
            case 'img':
                setValues({...values, img: value});
                return;
            default:
                return;
        }
    }
    function handleSubmit (event) {
        event.preventDefault();
        const {dispatch} = props;

        dispatch(addNominee(values.name, values.winner, values.img));
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
            setValues({
                name: '',
                winner: '',
                img: ''
            })
        }, 2000);
    }

    return (
        <div>
            <Header/>
            <div className="addPageContainer">
                <Alert show={showAlert} setShow={setShowAlert} type="add"/>
                <div className="backButtonWrapper">
                    <Button type='back'/>
                </div>
                <div className="formWrapper">
                    <p>ADD NEW NOMINEE</p>
                    <form onSubmit={handleSubmit}>
                        <Input type="name" value={values.name} changeVal={changeValue} title="Tournament Name"/>
                        <Input type="winner" value={values.winner} changeVal={changeValue} title="Tournament Winning Team"/>
                        <Input type="img" value={values.img} changeVal={changeValue} title="Cover image URL"/>
                        <button className="addNomineeButton">ADD NOMINEE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default connect()(AddNominee);
