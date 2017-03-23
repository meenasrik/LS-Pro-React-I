import React, { Component } from 'react';
import './App.css'

class Body extends Component {
	render() {
		return (
			<p className="skills">
	          <ul><h3>Skills:</h3>
	            <li>HTML</li>
	            <li>CSS</li>
	            <li>JAVASCRIPT</li>
	            <li>JQUERY</li>
	            <li>PYTHON</li>
	            <li>REACT</li>
	          </ul>
	          <h4>Last two skills from &nbsp;
	            <a href="https://lambdaschool.com/" target='_blank'>
	            <img id="logo" alt="logo" src="https://img.betapage.co/images/66811939-66812049.png" />
	            &nbsp; LambdaSchool
	            </a>
	          </h4>
        	</p>
		);
	}
}

export default Body;