const <%= upCaseName %>Factory = () => {
  let state = {
    name: '<%= name %>',
  };

  const getState = () => {
    return state;
  };

  const setState = (newState) => {
    state = {
      ...state,
      ...newState,
    };
  };

  return {getState, setState};
};

export default <%= upCaseName %>Factory;
