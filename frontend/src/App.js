import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Details from './screens/Details';
import Header from './components/Header';
import Login from './screens/Login';
//import './index.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path='/' component={Homescreen} exact />
        <Route path='/details/:id' component={Details} />
        <Route path='/login' component={Login} />
      </Router>
    </>
  );
}

export default App;
