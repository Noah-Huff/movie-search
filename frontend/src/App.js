import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Details from './screens/Details';
//import './index.css';

function App() {
  return (
    <>
    <Router>
      <Route path='/' component={Homescreen} exact/>
      <Route path='/details/:id' component={Details} />
    </Router>
    </>
  );
}

export default App;
