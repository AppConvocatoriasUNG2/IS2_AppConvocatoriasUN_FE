import React, {Component} from 'react';


export class Formulario extends Component{
	constructor(props){
		super(props);
		this.state={login:1, email:' ', name:' '};
		this.handlerOnclickLogin = this.handlerOnclickLogin.bind(this);
		this.handlerOnclickRegistro = this.handlerOnclickRegistro.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
		this.handleInputChangeName = this.handleInputChangeName.bind(this)
	}



	handlerOnclickLogin(){
		document.getElementById('botonIniciarSesion').setAttribute("class", "btn btn-info");
		document.getElementById('botonRegistro').setAttribute("class", "btn btn-default");
		this.setState({
			login:1
		})
	}
	handlerOnclickRegistro(){
		document.getElementById('botonRegistro').setAttribute("class", "btn btn-info");
		document.getElementById('botonIniciarSesion').setAttribute("class", "btn btn-default");
		this.setState({
			login:0
		})
	}
	handleInputChangeName(e){
		 this.setState({name: e.target.value});
	}
	handleOnSubmit(e){
		console.log(this.state.name)
		fetch('https://api.github.com/users')
	    	.then((response) => {
	    	  return response.json()
	    	})
	    	.then((response) => {
	    		console.log(response)
	        
	      })

	      e.preventDefault()
	}

	render(){
			if(this.state.login === 1){
				return(
					<div style={{width: '100'}}>
						<div className="row">
							<div id="formularios">
								<div id="formularioSesion" >
									<form style={{textAlign: 'center'}} id='formularioSesion' onSubmit={this.handleOnSubmit}>
										<div className="btn-group" style={{width: '100'}}>
											<button id="botonIniciarSesion" type="button" onClick={this.handlerOnclickLogin} className="btn btn-info" style={{width: '50'}} >Iniciar sesion</button>
											<button id="botonRegistro" type="button" className="btn btn-default" onClick={this.handlerOnclickRegistro}  style={{width: '50'}}>Registrarse</button><br/>
						  			</div><br/>
										<input className="inputInicio" type="text" name="correoInstitucional" placeholder="Correo institucional" onChange={this.handleInputChangeName}/><br/>				
			 							<input className="inputInicio" type="text" name="contraseña" placeholder="Ingrese su contraseña"/><br/>
										<input id="submitIniciarSesion" type="submit" value="Iniciar sesion"/>
									</form>
								</div>
							</div>
						</div>
				</div>
				)
			}else{
				return(
				<div>
					<div className="row">
						<div id="formularios">
						  	
								<div id="formularioRegistro" >
									<form style={{textAlign: 'center'}} method='post'>
										<div className="btn-group" >
											<button id="botonIniciarSesion" type="button" onClick={this.handlerOnclickLogin} className="btn btn-info" style={{width: '50'}} >Iniciar sesion</button>
											<button id="botonRegistro" type="button" className="btn btn-default" onClick={this.handlerOnclickRegistro}  style={{width: '50'}}>Registrarse</button><br/>
						  			</div><br/>
										<input className="inputna" type="text" name="nombres" placeholder="Nombres"/>
										<input className="inputna" type="text" name="apellidos" placeholder="Apellidos"/><br/>
					  				<input className="inputRegistro" type="text" name="correoInstitucional" placeholder="Correo institucional"/><br/>
										<input className="inputRegistro" type="text" name="contraseña" placeholder="Ingrese su contraseña"/><br/>
					 					<input className="inputRegistro" type="text" name="confirmarContraseña" placeholder="Confirmar Contraseña"/><br/>
					 					<input className="inputRegistro" type="submit" value="Registrarse"/>
									</form>
			 					</div>
							</div>
					</div>
			</div>
				)
			}

	};



}