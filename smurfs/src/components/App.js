import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


class App extends Component {
    state = {
      name: '',
      age: 0,
      height: 0,
    }
  componentDidMount() {
    // need to create an action to dispatch an action to make an API call and get smurfs //
    this.props.getSmurfs(); //when invoked dispatch fetch smurf then reduce update state to true; then app gets change;
  }

  handleChanges = e => { //button click function
      this.setState({
          [e.target.name]: e.target.value,
        });
      }

  render() {
    const { name, age, height } = this.state; //cleans up code, forgot what its called
    const { addSmurf, fetchingSmurfs, smurfs } = this.props;
    return (
      <div className="App">

        <input placeholder='smurf name' type='text' name='name' value={name} onChange={this.handleChanges} />
        <input placeholder='smurf age' type='number' name='age' value={age} onChange={this.handleChanges} />
        <input placeholder='smurf height' type='text' name='height' value={height} onChange={this.handleChanges} />
        <button onClick={() => this.props.addSmurf({ name, age, height })}>Add Smurf</button>
        {this.props.addingSmurf ? <h6>adding Smurf</h6> : null}

      {this.props.fetchingSmurfs ? <h2>Loading...</h2> : null}
      {
        !this.props.fetchingSmurfs && this.props.smurfs.length ?
        <ul>
          {this.props.smurfs.map(smurf => (
            <li>
              <h2>Name: {smurf.name}</h2>
              <h4>Age: {smurf.age}</h4>
              <h4>Height: {smurf.height}</h4>
            </li>
          ))}
        </ul> :
        null
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({ // determine what state needs to be available
  //using state as argu, can now create props on app components
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  })
export default connect(mapStateToProps, { addSmurf, getSmurfs })(App);



/////////////      ORIGINAL NOT WORKING FOR SOME REASON CODE     /////////////

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addSmurf, getSmurfs } from '../actions';
// import './App.css';
// /*
//  to wire this component up you're going to need a few things.
//  I'll let you do this part on your own.
//  Just remember, `how do I `connect` my components to redux?`
//  `How do I ensure that my component links the state to props?`
//  */
// class App extends Component {
//   state = {
//     name: '',
//     age: 0,
//     height: 0,
//   }
// componentDidMount() {
//   this.props.getSmurfs(); // dispact action to make api call to server & get smurfs // need action creator
// }
// handleChanges = e => { //button click function
//   this.setState({
//     [e.target.name]: e.target.value,
//   });
// }
//
//   render() {
//     const { name, age, height } = this.state; //cleans up code, forgot what its called
//     return (
//       <div className="App">
//
//
//         <input placeholder='smurf name' type='text' name='name' value={name} onChange={this.handleChanges} />
//         <input placeholder='smurf age' type='number' name='age' value={age} onChange={this.handleChanges} />
//         <input placeholder='smurf height' type='text' name='height' value={height} onChange={this.handleChanges} />
//         <button onClick={() => this.props.addSmurf(this.state)}>Add Smurf</button>
//         {this.props.addingSmurf ? <h6>adding Smurf</h6> : null}
//
//
//         {this.props.fetchingSmurfs ? <h2>Loading...</h2> : null}
//         {
//           !this.props.fetchingSmurfs && this.props.smurfs.length > 0 ?
//             <ul>
//               {this.props.smurfs.map(smurf => {
//                 <li>
//                   <h2>{smurf.name}</h2>
//                   <h4>Age: {smurf.age}</h4>
//                   <h4>Height: {smurf.height}</h4>
//                 </li>
//               })}
//             </ul> :
//             null
//         }
//       </div>
//     );
//   }
// }
// // will tell connect function what pieces of state we want to be available
// const mapStateToProps = state => ({ // complic return of all redux state needed for component
//   addingSmurf: state.addingSmurf,
//   error: state.error,
//   smurfs: state.smurfs, // map state.smurfs to this prop
//   fetchingSmurfs: state.fetchingSmurfs,
// });
// // function will map the state in the store to the component
// export default connect(mapStateToProps, { addSmurf, getSmurfs })(App);
