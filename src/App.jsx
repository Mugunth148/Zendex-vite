
import {Home, About, Work,} from './container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav} from './components';

function App() {

    return (

        <div id="root">          
            <Router>
                <Nav />
                <Routes>
                    <Route exact path='*' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='work' element={<Work />} />
                    {/* <Route path='/' element={<h1>404</h1>}/>  */}
                </Routes>
            </Router>
        </div>
    );
}


export default App

