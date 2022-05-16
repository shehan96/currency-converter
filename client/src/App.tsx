import './App.scss';
import { ApolloProvider } from '@apollo/client';
import { Home } from './pages/Home/Home';
import { client } from './graphql/Client';
import { Login } from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
