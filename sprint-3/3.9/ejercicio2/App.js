import React, {Component} from "react";
import './App.css';
import TextInput from './TextInput';
import MIMIMITranslator from './MIMIMITranslator';

/*Ejercicio 2
/TRADUCTOR MIMIMI. Vamos a partir de un formulario simple con un textarea donde escribimos una frase. Según vamos escribiendo, obtendremos en un párrafo el resultado de la traducción a MIMIMI. Es importante que tanto formulario como el párrafo resultado estén cada uno en su propio componente independiente. El componente del formulario, por ejemplo TextInput, simplemente se encarga de recoger los cambios de la usuaria y enviarlo al componente madre App, que los guarda en su estado. El componente MIMIMITranslator recoge el texto que le pasan por props, lo traduce y muestra en un párrafo.*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({   
      translation: 'lo que sea'
  })
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleVowels = this.handleVowels.bind(this);
}

handleKeyUp(e){
  const text = this.handleVowels(e.currentTarget.value);
  this.setState({translation: text});
}

handleVowels(str){
  return str.replace(/[aeiou]/g, 'i');
}

  render(){
    return (
      <div className="App">
        <TextInput input = {this.handleKeyUp}/>
        <MIMIMITranslator translation={this.state.translation}/>
      </div>
    );
  }
};


export default App;