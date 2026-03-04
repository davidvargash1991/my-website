import Home from './components/pages/home';

const App = () => {
  const lang = window.location.pathname.substr(1, 2);
  console.log(lang);
  return <Home />;
};

export default App;
