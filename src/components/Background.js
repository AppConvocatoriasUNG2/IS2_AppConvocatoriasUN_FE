import React,{Component} from 'react';
import {Formulario} from './Formulario.js';

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
			<div>
				
				<html>
			

					<head>
						<meta charset="utf-8"/>
		
		<link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon"/>
		<h1>slkdjasklamsalñml</h1>


		<meta name="revisit-after" content="1 hour"/>
		<meta name="distribution" content="all"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.5, user-scalable=yes"/>
		<meta name="expires" content="1"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="robots" content="all"/>


		


		

						<title>Inicio - Universidad Nacional de Colombia</title>
					</head>

					<body>
						<div id="services">
							<div className="indicator hidden-xs"></div>
							<ul className="dropdown-menu">
				            <li>
									<a href="http://correo.unal.edu.co" target="_blank"> <img src='./images/icnServEmail.png' width="32" height="32" alt="Correo Electrónico"/>Correo Electrónico</a>
				            </li>
				            <li>
									<a href="http://www.sia.unal.edu.co" target="_blank"><img src='./images/icnServSia.png' width="32" height="32" alt="Sistema de Información Académica"/>Sistema de Información Académica</a>
				            </li>
				            <li>
									<a href="http://www.sinab.unal.edu.co" target="_blank"><img src="images/icnServLibrary.png" width="32" height="32" alt="Biblioteca"/>Biblioteca</a>
				            </li>
				            <li>
									<a href="http://168.176.5.43:8082/Convocatorias/indice.iface" target="_blank"><img src="images/icnServCall.png" width="32" height="32" alt="Convocatorias"/>Convocatorias</a>
				            </li>
				            <li>
									<a href="http://identidad.unal.edu.co"><img src="images/icnServIdentidad.png" width="32" height="32" alt="Identidad U.N."/>Identidad U.N.</a>
				            </li>
							</ul>
						</div>
						<header id="unalTop">
							<div className="logo">
				            <a href="http://unal.edu.co">
									
									<svg width="93%" height="93%">
									<image xlinkHref={escudoUnalSvg} width="100%" height="100%" classNameName="hidden-print"/>
									</svg>

									{/*<!--<![endif]-->
									<!--[if lt IE 9]>*/}
												
									<img src={escudoUnal_black} className="visible-print" />
				            </a>
							</div>
							<div className="seal">
				            <img className="hidden-print" alt="Escudo de la República de Colombia" src={sealColombia} width="66" height="66" />

				            <img className="visible-print" alt="Escudo de la República de Colombia" src="./images/sealColombia_black.png" width="66" height="66" />
							</div>
							<div className="firstMenu">

				            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
									<span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
								</button>
				            <div className="btn-group languageMenu hidden-xs">
									<div className="btn btn-default dropdown-toggle" data-toggle="dropdown">es<span className="caret"></span></div>
									<ul className="dropdown-menu">
										<li><a href="index.html#">es</a></li>
										<li><a href="index.html#">en</a></li>
									</ul>
				            </div>
				            <ul className="socialLinks hidden-xs">
									<li>
										<a href="https://www.facebook.com/UNColombia" target="_blank" className="facebook" title="Página oficial en Facebook"></a>
									</li>
									<li>
										<a href="https://twitter.com/UNColombia" target="_blank" className="twitter" title="Cuenta oficial en Twitter"></a>
									</li>
									<li>
										<a href="https://www.youtube.com/channel/UCnE6Zj2llVxcvL5I38B0Ceg" target="_blank" className="youtube" title="Canal oficial de Youtube"></a>
									</li>
									<li>
										<a href="http://agenciadenoticias.unal.edu.co/nc/sus/type/rss2.html" target="_blank" className="rss" title="Suscripción a canales de información RSS"></a>
									</li>
				            </ul>
				            <div className="navbar-default">
									<nav id="profiles">
										<ul className="nav navbar-nav dropdown-menu">
											<li className="item_Aspirantes #>"><a href="index.html#">Aspirantes</a></li>
											<li className="item_Estudiantes #>"><a href="index.html#">Estudiantes</a></li>
											<li className="item_Egresados #>"><a href="index.html#">Egresados</a></li>
											<li className="item_Docentes #>"><a href="index.html#">Docentes</a></li>
											<li className="item_Administrativos #>"><a href="index.html#">Administrativos</a></li>
										</ul>
									</nav>
				            </div>
							</div>
							<div id="bs-navbar" className="navbar-collapse collapse navigation">
				            <div className="site-url">
									<a href="http://subdominio.unal.edu.co/">subdominio.unal.edu.co</a>
				            </div>
				            <div className="buscador">
									<div className="gcse-searchbox-only" data-resultsUrl="http://unal.edu.co/resultados-de-la-busqueda/" data-newWindow="true"></div>
				            </div>
				            <div className="mainMenu">
									<div className="btn-group"><a href="index.html#" className="btn btn-default dropdown-toggle">Item menu ejemplo</a><span className="caret-right"></span></div>
									<div className="btn-group">
										<div className="btn btn-default dropdown-toggle" data-toggle="dropdown">Sedes<span className="caret"></span></div>
										<ul className="dropdown-menu dropItem-16">
											<li><a href="http://amazonia.unal.edu.co" target="_blank">Amazonia</a><span className="caret-right"></span></li>
											<li><a href="http://bogota.unal.edu.co" target="_blank">Bogotá</a><span className="caret-right"></span></li>
											<li><a href="http://caribe.unal.edu.co" target="_blank">Caribe</a><span className="caret-right"></span></li>
											<li><a href="http://delapaz.unal.edu.co" target="_blank">De La Paz</a><span className="caret-right"></span></li>
											<li><a href="http://www.manizales.unal.edu.co" target="_blank">Manizales</a><span className="caret-right"></span></li>
											<li><a href="http://medellin.unal.edu.co" target="_blank">Medellín</a><span className="caret-right"></span></li>
											<li><a href="http://orinoquia.unal.edu.co" target="_blank">Orinoquia</a><span className="caret-right"></span></li>
											<li><a href="http://www.palmira.unal.edu.co" target="_blank">Palmira</a><span className="caret-right"></span></li>
											<li><a href="http://tumaco-pacifico.unal.edu.co" target="_blank">Tumaco</a><span className="caret-right"></span></li>
										</ul>
									</div>
				            </div>
				            <div className="btn-group hidden-sm hidden-md hidden-lg hidden-print">
									<div className="btn btn-default dropdown-toggle" data-toggle="dropdown" id="unalOpenMenuServicios" data-target="#services">Servicios<span className="caret"> </span>
									</div>
				            </div>
				            <div className="btn-group hidden-sm hidden-md hidden-lg hidden-print">
									<div className="btn btn-default dropdown-toggle" data-toggle="dropdown" id="unalOpenMenuPerfiles" data-target="#profiles">Perfiles<span className="caret"> </span>
									</div>
				            </div>
							</div>

						</header>

						<main className="detalle">
							<div className="breadcrumb-className">Está en:<a href="index.html" target="_self" title="Inicio">Inicio</a>/<span>Item menu ejemplo</span></div>
							<div class="col-md-4">
								<p></p>
							</div>
							<div class="col-md-4">
								<Formulario/>
							</div>
							
							<div className="col-md-4">
								<p></p>
							</div>
							
						</main>

						<footer className="clear">
							<nav className="col-md-3 col-lg-3 col-sm-3 col-xs-4 col-xxs-6 gobiernoLinea">
				            <a href="http://www.legal.unal.edu.co" target="_top">Régimen Legal</a>
				            <a href="http://www.unal.edu.co/dnp" target="_top">Talento humano</a>
				            <a href="http://www.unal.edu.co/contratacion/" target="_top">Contratación</a>
				            <a href="http://www.unal.edu.co/dnp/" target="_top">Ofertas de empleo</a>
				            <a href="http://rendiciondecuentas.unal.edu.co/" target="_top">Rendición de cuentas</a>
				            <a href="http://docentes.unal.edu.co/concurso-profesoral/" target="_top">Concurso docente</a>
				            <a href="http://www.pagovirtual.unal.edu.co/" target="_top">Pago Virtual</a>
				            <a href="http://www.unal.edu.co/control_interno/index.html" target="_top">Control interno</a>
				            <a href="http://unal.edu.co/siga/" target="_top">Calidad</a>
				            <a href="http://unal.edu.co/buzon-de-notificaciones/" target="_self">Buzón de notificaciones</a>
							</nav>
							<nav className="col-md-3 col-lg-3 col-sm-3 col-xs-4 col-xxs-6 gobiernoLinea">
				            <a href="http://correo.unal.edu.co" target="_top">Correo institucional</a>
				            <a href="index.html#">Mapa del sitio</a>
				            <a href="http://redessociales.unal.edu.co" target="_top">Redes Sociales</a>
				            <a href="index.html#">FAQ</a>
				            <a href="http://unal.edu.co/quejas-y-reclamos/" target="_self">Quejas y reclamos</a>
				            <a href="http://unal.edu.co/atencion-en-linea/" target="_self">Atención en línea</a>
				            <a href="http://unal.edu.co/encuesta/" target="_self">Encuesta</a>
				            <a href="index.html#">Contáctenos</a>
				            <a href="http://www.onp.unal.edu.co" target="_top">Estadísticas</a>
				            <a href="index.html#">Glosario</a>
							</nav>
							<div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 col-xxs-12 footer-info">
				            <p className="col-sm-12 col-md-6 contacto">
									<b>Contacto página web:</b><br/> Dirección .....<br/> Edificio ...<br/> Bogotá D.C., Colombia<br/> (+57 1) 316 5000 Ext.
				            </p>
				            <p className="col-sm-12 col-md-6 derechos">
									© Copyright 2014<br/> Algunos derechos reservados.<br/>
									<a title="Comuníquese con el administrador de este sitio web" href="mailto:EMAIL@unal.edu.co">EMAIL@unal.edu.co</a><br/>
									<a href="index.html#">Acerca de este sitio web</a><br/> Actualización:31/05/16
				            </p>
							</div>

							<div className="col-md-2 col-lg-2 col-sm-2 col-xs-12 logos">
				            <div className="col-xs-6 col-sm-12 col-md-6 no-padding">
									<a className="col-xs-6 col-sm-12" href="http://www.orgulloun.unal.edu.co">
										<img className="hidden-print" alt="Orgullo UN" src="images/log_orgullo.png" width="78" height="21" />
										<img className="visible-print" alt="Orgullo UN" src="images/log_orgullo_black.png" width="94" height="37" />
									</a>

									<a className="col-xs-6 col-sm-12 imgAgencia" href="http://www.agenciadenoticias.unal.edu.co/inicio.html">
										<img className="hidden-print" alt="Agencia de noticias" src="images/log_agenc.png" width="94" height="25" />
										<img className="visible-print" alt="Agencia de noticias" src="images/log_agenc_black.png" width="94" height="37" />
									</a>
				            </div>
				            <div className="col-xs-6 col-sm-12 col-md-6 no-padding">
									<a className="col-xs-6 col-sm-12" href="https://www.sivirtual.gov.co/memoficha-entidad/-/entidad/T0356">
										<img alt="Trámites en línea" src="images/log_gobiern.png" width="67" height="51" />
									</a>

									<a className="col-xs-6 col-sm-12" href="http://www.contaduria.gov.co/">
										<img alt="Contaduría general de la republica" src="images/log_contra.png" width="67" height="51" />
									</a>
				            </div>

							</div>
						</footer>
					</body>

				</html>

			</div>
		)
	}
}
