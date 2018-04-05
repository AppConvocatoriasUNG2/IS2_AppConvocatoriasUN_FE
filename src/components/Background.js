import React,{Component} from 'react';
import {Formulario} from './Formulario.js';
import{Header} from './Header.js';
import {Footer} from './Footer.js'

import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css' ;
import './css/reset.css' ;
import './css/unal.css' ;
import './css/base.css';
import './css/tablet.css' ;
import './css/phone.css' ;
import './css/small.css' ;
import './css/formulario.css' ;
/*
import './css/printer.css' ;
import "./js/jquery.js" ;
import "./js/unal.js" ;

*/


import sealColombia from './images/sealColombia.png';
import escudoUnal from './images/escudoUnal.png';
import escudoUnalSvg from './images/escudoUnal.svg';
import escudoUnal_black from './images/escudoUnal_black.png';




export class Background extends Component{


	render(){
		return (
			<div className="container-fluid">

				<body>
				<header ><Header/></header>
				<div style={{minHeight:350}}><Formulario />
				</div>
				<footer ><Footer /></footer>
				</body>
			
			</div>
		)
	}
}
