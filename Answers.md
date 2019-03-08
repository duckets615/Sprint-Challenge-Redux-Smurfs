1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  - .filter();
  - .map();
  - .find();
  - object.assign( {}, anotherobject, {propname: newValue});


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
      - Store is a global state, it holds information that is use in the application.
      - Actions = functions that are performed when the user interacts with the application( GET request, POST, ect). Their interaction triggers an action, which is passed on to the reducer.
      - The reducer's job is to take an action and take the previous state, and update the state to reflect the end result of the action performed

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
      - Application state is a state that is global and can be used by any of the components in the app. Component state is local to only the component which has
        it and can be passed down to the children of that component.
      -  Component state provides information to just the given component. It is used if only that component handles dynamic information or as a temporary storage of information that needs to be sent to the store. Application state is information that is fed down to the components.

4.  What is middleware?
    - Middleware is a third party service that adds functionality to a server, such as logging, crash reporting, routing, and handling asynchronous requests,
      things that aren't necessarily available out of the box.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
      - Redux-thunk gives us back control of our dispatch command. This is useful in situations with asynchronous actions because we can have full control of when actions occur, where before we only had limited control.

6.  Which `react-redux` method links up our `components` with our `redux store`?
      - export default connect( mapStateToProps, mapDispatchToProps )()
      - import {connect} from 'react-redux'
