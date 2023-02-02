import React, { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLinea1 = function (event){
    setLinea1(event.target.value);
  }

  const onChangeLinea2 = function (event){
    setLinea2(event.target.value);
  }

  const onChangeImage = function (event){
    setImage(event.target.value);
  }

  const onClickButton = function (event){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/jpg");

      var link = document.createElement('a');
      link.download = 'momo.jpg';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value="anciano">Anciano</option>
        <option value="gato">Gato</option>
        <option value="hormiga">Hormiga</option>
        <option value="neco_arc">Neco-Arc</option>
        <option value="nosequesesto">NoseQueSesto</option>
        <option value="robin">Robin</option>
      </select> <br/>

      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/> <br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/> <br/>
      <button onClick={onClickButton}>Exportar</button>

      <div className='memeMetrics' id='meme'>
        <span>{linea1}</span> <br/>
        <span>{linea2}</span>
        <img src={'/momo_images/' + image +'.jpg'}/>
      </div>

    </div>
  );
}

export default App;
