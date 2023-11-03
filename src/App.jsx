import React, {Component} from 'react'

class Formulario extends Component{

  constructor(props){
    super(props);

    this.state = {
      Email:' ',
      Password:' '
    }
    // this.onChange.bind(this);
   }

  onChange(e){
    let email = e.target.Email;
    let password = e.target.Password
    this.setState({
        Email : email,
        Password :password
    })
  }
      
    render() {
      return (
       <div className="App">
          <h1>Ingresa tus datos</h1>
            <form>
            <label for>
                 <input
                  type="text"
                  name="Email"
                  placeholder="Correo"
                  value={this.state.Email}
                  //onChange={this.onChange()}
                />
                <br></br>
                <input
                  type="text"
                  name="Password"
                  placeholder="Contraseña"
                  value={this.state.Password}
                  //onChange={this.onChange()}
                />
              </label>
              <div>
                <input type="submit" value='enviar' name="send" >
                </input>
              </div>
            </form>
        </div>
      );
    }

}


export default Formulario;

