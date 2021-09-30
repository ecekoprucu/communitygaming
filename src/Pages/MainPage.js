import React, {useState, useEffect} from "react";
import {Header} from "../components/Header";
import NomineeBox from "../components/NomineeBox";
import '../styles/mainPage.scss';
import Modal from "../components/Modal";
import Button from "../components/Button";
import Alert from "../components/Alert";
const MainPage = ({tournaments}) => {
    const [pageState, setPageState] = useState({
        tournaments: tournaments,
        perPage: 8,
        currentPage: 1
    });
    const [showModal, setShowModal] = useState(false);
    const [selectedNominee, setSelectedNominee] = useState(0);
    const [sort, setSort] = useState(() => localStorage.getItem('sortType') ? localStorage.getItem('sortType') : 'default');
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        setPageState({
            ...pageState,
            tournaments: tournaments
        })
    }, [tournaments]);

    useEffect(() => {
        if(sort === 'asc') {
            const newTournamentList = pageState.tournaments.sort((a, b) => a.points - b.points);
            setPageState({...pageState, tournaments: newTournamentList});
            localStorage.setItem('sortType', 'asc');
        } if(sort === 'desc') {
            const newTournamentList = pageState.tournaments.sort((a, b) => b.points - a.points);
            setPageState({...pageState, tournaments: newTournamentList});
            localStorage.setItem('sortType', 'desc');
        } if(sort === 'default'){
            const newTournamentList = pageState.tournaments.sort((a, b) => {
               return b.created - a.created;
            });
            setPageState({...pageState, tournaments: newTournamentList});
            localStorage.setItem('sortType', 'default');
        }
    }, [sort])


    function sortNominees (sortType) {
        sortType === 'asc' ? setSort('asc') : sortType === 'desc' ? setSort('desc') : setSort('default');
    }

    function findNominee (nomineeId) {
        return tournaments.find(tournament => tournament.id === nomineeId);
    }
    const pageNumbers = [];
    const indexOfLastTodo = pageState.currentPage * pageState.perPage;
    const indexOfFirstTodo = indexOfLastTodo - pageState.perPage;
    const currentTournaments = pageState.tournaments.slice(indexOfFirstTodo, indexOfLastTodo);


    for (let i = 1; i <= Math.ceil(pageState.tournaments.length /  pageState.perPage); i++) {
        pageNumbers.push(i);
    }

    return (
       <div className={showModal ? 'no-overflow' : ''}>
           <Header/>
           <Alert show={showAlert} type="delete"/>
           <div className="buttonsContainer">
               <Button type='add'/>
               <Button type="sort" sortFunc={sortNominees}/>
           </div>
           <div className="mainPageContainer">
               <p><span className="bold">VOTE</span> FOR <span className="bold">THE BEST TOURNAMENT</span> STREAMED</p>
               <div className="contentContainer">
                   {currentTournaments.map((tournament, index) =>
                       <NomineeBox key={index} helpers={{modal: setShowModal, nominee: setSelectedNominee}} tournament={tournament}/>
                       )}
               </div>
           </div>
           <div className="paginationContainer">
               <ul>
                   {pageNumbers.map(pageNumber => (
                       <li key={pageNumber} onClick={() => setPageState({...pageState, currentPage: pageNumber})} className={pageState.currentPage === pageNumber ? 'currentPage' : ''}>
                           {pageNumber}
                       </li>
                   ))}
               </ul>
           </div>
           <Modal show={showModal} alertShow={setShowAlert} setShow={setShowModal} tournament={findNominee(selectedNominee)}/>
       </div>
    )
}

export default MainPage;
