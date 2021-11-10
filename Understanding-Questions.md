# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- The action creator dispatched within the event handler gets called.
- Then comes the reducer.
- Since the action.type is ADD_ONE, the return logic for the switch case gets executed
  return({
  ...state,
  total: state.total + 1
  });
  ...

- TotalDisplay shows the total plus 1.
