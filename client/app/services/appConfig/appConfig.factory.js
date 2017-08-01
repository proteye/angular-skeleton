const AppConfigFactory = () => {
  let state = {
    name: 'appConfig',
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

export default AppConfigFactory;
