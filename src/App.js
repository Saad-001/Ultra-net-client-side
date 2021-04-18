import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import LogIN from './components/Home/Login/LogIN';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Home/privateRoute/PrivateRoute';
import AddReview from './components/Home/addReview/AddReview';
import Book from './components/Admin/Book/Book';
import BookingList from './components/Admin/bookingList/BookingList';
import OrderList from './components/Admin/OrderList/OrderList';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/review">
          <AddReview></AddReview>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/logIn">
          <LogIN></LogIN>
        </Route>
        <PrivateRoute exact path="/book/:packageId">
          <Book></Book>
        </PrivateRoute>
        <PrivateRoute path="/book">
          <Book></Book>
        </PrivateRoute>
        <Route path="/bookingList">
          <BookingList></BookingList>
        </Route>
        <Route path="/orderList">
          <OrderList></OrderList>
        </Route>
      </Switch>     
    </Router>
    </userContext.Provider>
  );
}

export default App;
