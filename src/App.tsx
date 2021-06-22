import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { BrowserRouter, Route } from 'react-router-dom';

import './styles/global.scss';

function App() {
  return (
	<BrowserRouter>
		<Route path="/" exact component={Home} />
		<Route path="/rooms/new" component={NewRoom} />
	</BrowserRouter>
  );
}

export default App;
