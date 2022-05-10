import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainIndex from 'routes/main';

function App() {
  const routes = [
    { path: '/', element: (<MainIndex />) }
  ]

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((e) => (<Route key={`route - ${e.path}`} path={e.path} element={e.element} />))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
