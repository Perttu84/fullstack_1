import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick, text}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const Statistic = ({name, hyva, neutraali, huono}) => {
	if (name==='hyvä') {
		return (
			<tr>
				<th>{name}</th>
				<th>{hyva}</th>
			</tr>
		)
	}
	if (name==='neutraali') {
		return (
			<tr>
				<th>{name}</th>
				<th>{neutraali}</th>
			</tr>
		)
	}
	if (name==='huono') {
		return (
			<tr>
				<th>{name}</th>
				<th>{huono}</th>
			</tr>
		)
	}
	if (name==='keskiarvo') {
		return (
			<tr>
				<th>{name}</th>
				<th>{Math.round(100*(hyva - huono) / (hyva + neutraali + huono)) / 100}</th>
			</tr>
		)
	}
	if (name==='positiivisia') {
		return (
			<tr>
				<th>{name}</th>
				<th>{Math.round(1000 * hyva / (hyva + neutraali + huono))/10} %</th>
			</tr>
		)
	}
}


const Statistics = ({hyva, huono, neutraali}) => {
		return (
   		<div>
			<h1>statistiikka</h1>
			<table>
			  <tbody>
			    <Statistic name='hyvä' hyva={hyva}/>
				<Statistic name='neutraali' neutraali={neutraali}/>
				<Statistic name='huono' huono={huono}/>
				<Statistic name='keskiarvo' huono={huono} hyva={hyva} neutraali={neutraali}/>
				<Statistic name='positiivisia' huono={huono} hyva={hyva} neutraali={neutraali}/>
			  </tbody>
			</table>
   		</div>
		)
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hyva: 0,
			neutraali: 0,
			huono: 0
		}
	}

	addFeedback = (feedback) => {
		if (feedback === 'hyva') {
			return () => {
			this.setState({hyva: this.state.hyva + 1})	
			}
		}
		if (feedback === 'neutraali') {
			return () => {
			this.setState({neutraali: this.state.neutraali + 1})	
			}
		}
		if (feedback === 'huono') {
			return () => {
			this.setState({huono: this.state.huono + 1})	
			}
		}
	}

	render() {
		const clicks = this.state.hyva + this.state.neutraali + this.state.huono
		if (clicks > 0) {
		return (
		 <div>
		  <h1>anna palautetta</h1>
		  <Button handleClick= {this.addFeedback('hyva')} text="Hyvä"/>
		  <Button handleClick= {this.addFeedback('neutraali')} text="Neutraali"/>
		  <Button handleClick=  {this.addFeedback('huono')} text="Huono"/>
		  <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono}/>
		 </div>
		)
		}
		return (
		 <div>
		  <h1>anna palautetta</h1>
		  <Button handleClick= {this.addFeedback('hyva')} text="Hyvä"/>
		  <Button handleClick= {this.addFeedback('neutraali')} text="Neutraali"/>
		  <Button handleClick= {this.addFeedback('huono')} text="Huono"/>
		  <h1>statistiikka</h1>
		  <p>ei yhtään palautetta annettu</p>
		 </div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
