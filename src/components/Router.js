import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../App.css';
import MainPage from './MainPage';
import SearchRecipe from './SearchRecipe';
import FullRecipePage from './FullRecipePage';


class Router extends React.Component{


    render(){
        return(
    <BrowserRouter>
            <Switch>
            <Route path="/" component ={MainPage} exact></Route>
            <Route 
            path= '/Search/:id'
            render={ (match) => <SearchRecipe 
                match = {match}
                exact
            />}
            ></Route>
             <Route 
            path= '/id/:id'
            render={ (match) => <FullRecipePage 
                match = {match}
                exact
            />}
            ></Route>
            </Switch>

    
    </BrowserRouter>
        );
    }
}

export default Router; 