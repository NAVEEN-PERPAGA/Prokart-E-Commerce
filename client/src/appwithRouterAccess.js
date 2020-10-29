// import React from 'react';
// import { Route, useHistory } from 'react-router-dom';
// import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
// import Navbar from "./components/navbar-component"
// import PhonesList from "./components/phones-list.component"
// import PhoneDetail from "./components/phone-detail.component"
// import SignIn from './SignIn';
// // import Protected from './Protected';

// const AppWithRouterAccess = () => {
//   const history = useHistory();
//   const onAuthRequired = () => {
//     history.push('/login');
//   };

//   return (
//     <Security issuer='https://dev-772952.okta.com/oauth2/default'
//               clientId='0oazcnxd625yQvIR64x6'
//               redirectUri={window.location.origin + '/implicit/callback'}
//               onAuthRequired={onAuthRequired}
//               pkce={true} >
//       <Route path='/' exact={true} component={PhonesList} />
//       <SecureRoute path='/:id' component={PhoneDetail} />
//       <Route path='/login' render={() => <SignIn issuer='https://dev-772952.okta.com/oauth2/default' />} />
//       <Route path='/implicit/callback' component={LoginCallback} />
//     </Security>
//   );
// };
// export default AppWithRouterAccess;