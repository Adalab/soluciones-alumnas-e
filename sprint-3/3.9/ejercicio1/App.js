import React, {Component} from "react";
import './App.css';
import CitySelector from './CitySelector';

/*Ejercicio 1
/CIUDADES. Para terminar de entender bien cómo funciona el lifting vamos a hacer un ejercicio muy sencillo. Partimos de un select con nombre de ciudades que encapsulamos en un componente CitySelector. Vamos a hacer que, al seleccionar una ciudad del select, aparezca una foto de la misma al lado. La diferencia con ejercicios anteriores es que ahora el select está en su propio componente, y debemos usar lifting.*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      cityImg: "https://www.telesurtv.net/__export/1530748387221/sites/telesur/img/multimedia/2018/07/04/1n.jpg"
    });

    this.handlePhoto = this.handlePhoto.bind(this);
  }

  handlePhoto(e){
    
    const photoEvent = e.currentTarget.value;
    this.setState({
      cityImg: photoEvent
    })
    console.log(photoEvent);
  }

  render(){
    return (
      <div className="App">
        <CitySelector action={this.handlePhoto} 
        />

        <img src={this.state.cityImg} alt=""/>
      </div>
    );
  }
}

export default App;