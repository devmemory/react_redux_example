import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CounterIndex from 'routes/counter';
import MainIndex from 'routes/main';
import { ToastComponent } from 'components/toast';

function App() {
  const routes = [
    { path: '/', element: (<MainIndex />) },
    { path: '/counter', element: (<CounterIndex />) }
  ]

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((e) => (<Route key={`route - ${e.path}`} path={e.path} element={e.element} />))}
      </Routes>
      <ToastComponent />
    </BrowserRouter>
  );
}

export default App;
