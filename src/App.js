import logo from './logo.svg';
import './App.css';
import Welcome from './tugas7';
function App() {
  return (
    <div className="App">
      <div className="Card">
      <h1>Hai, Saya firmansyah <hr></hr></h1>
     <p>saya sudah berhasil menginstall react js</p>
    </div>
      <div className="Card">
      <h1>Data diri peserta kelas React.JS <hr></hr>  </h1>
      <p>
      <Welcome name="arya"/>
      <Welcome name="indra"/>
      <Welcome name="humaira"/>
      </p>
    </div>
    </div>
   
  );
}

export default App;
