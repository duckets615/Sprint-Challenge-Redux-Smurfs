import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: null,
    height: '',
  }
componentDidMount() {
  this.props.getSmurfs();
}
handleChanges = (e) => {
  this.setState({
    e.target.name: ev.target.value,
  });
}

  render() {
    const { name, age, height } = this.state;
    return (
      <div className="App">
        <input placeholder='smurf name' type='text' name='name' value={name} onChange={this.handleChanges} />
        <input placeholder='smurf age' type='number' name='age' value={age} onChange={this.handleChanges} />
        <input placeholder='smurf height' type='text' name='height' value={height} onChange={this.handleChanges} />
        <button onClick={() => this.props.addSmurf(this.state)}>Add Smurf</button>
        {this.props.fetchingSmurfs ? <h2>Loading...</h2> : null}
        {
          !this.props.fetchingSmurfs && this.props.smurfs.length > 0 ?
            <ul>
              {this.props.smurfs.map(smurf => {
                <li>
                  <h2>{smurf.name}</h2>
                  <h4>Age: {smurf.age}</h4>
                  <h4>Height: {smurf.height}</h4>
                </li>
              })}
            </ul> :
            null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
});

export default connect(mapStateToProps, { addSmurf, getSmurfs })(App);
