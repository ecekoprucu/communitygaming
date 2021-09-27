import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {connect} from "react-redux";
import './styles/app.scss';
import MainPage from "./Pages/MainPage";
import AddNominee from "./Pages/AddNomineePage";
import {increasePoint, decreasePoint} from "./actions";

function App(props) {
    const tournamentList = JSON.parse(localStorage.getItem('list'));
  return (
      <Router>
          <Switch>
              <Route exact path='/'>
                  <MainPage tournaments={tournamentList!== null ? tournamentList : props.list}/>
              </Route>
              <Route exact path='/addNominee'>
                  <AddNominee/>
              </Route>
          </Switch>
      </Router>
  );
}

const mapStateToProps = state => {
    return (
        {
            list: state.data,
            points: state.score
        }
    )
}

const mapDispatchToProps = {
    increasePoint,
    decreasePoint
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
