import { useContext } from 'react'

import AuthContext from '../context/Auth';

import Auth from './auth.route'

import App from './app.route'

export function Routes() {  
  const { signed } = useContext(AuthContext);

  return (
    <>
      {signed
        ? <App />
        : <Auth />}
    </>
  )
}