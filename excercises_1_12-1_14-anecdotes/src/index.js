import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const ShowVotes = ({selected, votes}) => (
  <div>has {votes[selected]} votes</div>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: Math.floor(Math.random() * this.props.anecdotes.length),
      votes : Array.apply(null, Array(this.props.anecdotes.length)).map(Number.prototype.valueOf,0),
      mostVotesIndex : 0
    }
  }

  handleClick = () => {
    return () => {
    this.setState({selected: Math.floor(Math.random() * this.props.anecdotes.length)})
      }
  }

  addVote = () => {
    return () => {
      const newVotes = [...this.state.votes]
      newVotes[this.state.selected] += 1
      if (newVotes[this.state.selected]>newVotes[this.state.mostVotesIndex]) {
        this.setState({mostVotesIndex: this.state.selected})
      }
      this.setState({votes: newVotes})
      }
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <ShowVotes selected= {this.state.selected} votes={this.state.votes} />
        <Button handleClick= {this.addVote()} text='vote' />
        <Button handleClick= {this.handleClick()} text='next anecdote' />
        <h3>anecdote with most votes:</h3>
        {this.props.anecdotes[this.state.mostVotesIndex]}
        <ShowVotes selected= {this.state.mostVotesIndex} votes={this.state.votes} />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)