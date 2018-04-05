import React, {Component} from 'react';


export class Formulario extends Component{
	constructor(props){
		super(props);
		this.state={login:1, email:' ', password:' '};
		this.handlerOnclickLogin = this.handlerOnclickLogin.bind(this);
		this.handlerOnclickRegistro = this.handlerOnclickRegistro.bind(this);
		this.handleOnSubmitLogin = this.handleOnSubmitLogin.bind(this);
		this.handleInputChangeName = this.handleInputChangeName.bind(this);
		this.handleOnSubmitRegistro = this.handleOnSubmitRegistro.bind(this);
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

	}
	handleOnSubmitLogin(e){
		

		console.log(this.state)
		// const email = document.getElementById('email');
		// const password = document.getElementById('password');
		fetch('https://api.github.com/users')
	    	.then((response) => {
	    	  return response.json()
	    	})
	    	.then((response) => {
	    		console.log(response)
	        
	      })

	      e.preventDefault();
	}
	async handleOnSubmitRegistro(e){

		e.preventDefault();
		const nombreCompleto = this.refs.nameR +" "+this.refs.lastNameR.value;
		const email = this.refs.emailR.value;
		const password = this.refs.passwordR.value;
		const confPassword = this.refs.confPassword.value;
		if(password !== confPassword){
			alert("las contraseñas no coinciden");
			return;
		}

		const options={
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         },
      body: JSON.stringify({
          name: nombreCompleto,
          email: email,
          encryptedPassword: password,
      	}) 
      
		}

		try{
			let response = await fetch('https://todoapirest.herokuapp.com/todos', options);
			if(response.ok){
				let jsonResponse = await response.json();
				console.log(jsonResponse);
				
			}
			throw new Error("FALOOO");
		}catch(error){
			console.log(error.message)

		}
		


	}
	
		// const passwordR = document.getElementById('passwordR').value;
		// const confPassword = document.getElementById('confPassword').value;
		// try{
		// 	let response = await fetch('https://todoapirest.herokuapp.com/todos' ,
		// 					{
  //             method: 'POST',
  //             headers: {
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json',
  //                },
	 //            body: JSON.stringify({
	 //                name: name+" "+lastName,
	 //                description: emailR,
	 //                duration: 10,
	               
	 //            })
		// 	})
		// 	if(response.ok){
		// 		console.log("hay respuestaaa");
		// 		e.preventDefault();
		// 	}	throw new Error("fallo");


		// }catch(error){
		// 	console.log(error.message)

		// }

		
		
		


	

	render(){

			if(this.state.login === 1){
				return(
					<div style={{width: '100'}}>
						<div className="row">
							<div id="formularios">
								<div id="formularioSesion" >
									<form style={{textAlign: 'center'}} id='formularioSesion' onSubmit={this.handleOnSubmitLogin}>
										<div className="btn-group" style={{width: '100'}}>
											<button id="botonIniciarSesion" type="button" onClick={this.handlerOnclickLogin} className="btn btn-info" style={{width: '50'}} >Iniciar sesion</button>
											<button id="botonRegistro" type="button" className="btn btn-default" onClick={this.handlerOnclickRegistro}  style={{width: '50'}}>Registrarse</button><br/>
						  			</div><br/>
										<input className="inputInicio" ref="email" type="text" name="correoInstitucional" placeholder="Correo institucional" /><br/>				
			 							<input className="inputInicio" ref="password" type="password" name="contraseña" placeholder="Ingrese su contraseña" /><br/>
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
									<form style={{textAlign: 'center'}} onSubmit={this.handleOnSubmitRegistro}>
										<div className="btn-group" >
											<button id="botonIniciarSesion" type="button" onClick={this.handlerOnclickLogin} className="btn btn-info" style={{width: '50'}} >Iniciar sesion</button>
											<button id="botonRegistro" type="button" className="btn btn-default" onClick={this.handlerOnclickRegistro}  style={{width: '50'}}>Registrarse</button><br/>
						  			</div><br/>
										<input className="inputna" type="text" ref="nameR"  placeholder="Nombres" />
										<input className="inputna" type="text" ref="lastNameR" placeholder="Apellidos" /><br/>
					  				<input className="inputRegistro" type="text" ref="emailR" placeholder="Correo institucional" /><br/>
					  				<input className="inputRegistro" type="password" ref="passwordR" placeholder="Contraseña" /><br/>
					  				<input className="inputRegistro" type="password" ref="confPassword" placeholder="Confirmar Contraseña" /><br/>
										
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