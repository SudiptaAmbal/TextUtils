import './App.css';
import Navbar from './components/Navbar/Navbar';
import Textform from './components/Textform/Textform';


function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <Textform />
      </div>
    </>
  );
}

export default App;
