let container;

function setContainer(appContainer) {
  container = appContainer;
}

function navigate(dispatch) {
  container.dispatch(dispatch);
}

export default {
  setContainer,
  navigate,
};
