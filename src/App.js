import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Component from './components/pages/Component';
import VerifyPage from './components/pages/VerifyPage';
import Form from './components/pages/Form';
import Prompt from './components/pages/Prompt';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Catalogue from './components/pages/Catalogue';
import Customerfeed from './components/pages/Customerfeed';
import ProductVerify from './components/pages/ProductVerify';
function App() {
return (
    <div>
        <Router>
          <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/VerifyPage" component={VerifyPage}></Route>
          <Route exact path="/Form" component={Form}></Route>
          <Route exact path="/Prompt" component={Prompt}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
          <Route exact path="/Profile" component={Profile}></Route>
          <Route exact path="/Catalogue" component={Catalogue}></Route>
          <Route exact path="/Customerfeed" component={Customerfeed}></Route>
          <Route exact path="/Component" component={Component}></Route>
          <Route exact path="/ProductVerify" component={ProductVerify}></Route>
        {/* <Route path="/" component={Component}></Route> */}
          </Switch>
      </Router> 
    </div>
  )
}
export default App