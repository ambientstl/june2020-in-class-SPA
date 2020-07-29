import * as views from "./views";

// st = state.Home
// {
//   header: "Home Page",
//   page: "Home"
// }

// st.page
// > "Home"

// views["Home"](st)

// views obj
// {
//   Bio: ...,
//   Home: ...(),
//   Gallery: ...,
//   Register: ...
// }

export default st => `
  ${views[st.page](st)}
`;
