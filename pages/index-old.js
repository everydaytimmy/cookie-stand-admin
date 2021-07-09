import Head from 'next/head'
import Main from '../components/cookie-stand-admin'
import { useState } from 'react'
import LoginForm from '../components/login-form'
import { fetcher } from '../services/data-fetcher'

export default function Home() {

  // const [loggedIn, setLoggedIn] = useState(false);

  // const [username, setUsername] = useState('');

  // const [cookieStandHook, setCookieStandHook] = useState();

  // const [error, setError] = useState()

  // async function loginHandler(values) {

  //     try {

  //         setUsername(values.username);

  //         const hooks = await fetcher(values);

  //         setCookieStandHook(hooks);

  //         setLoggedIn(true);

  //         setError(null);

  //     } catch (err) {

  //         console.error(err);
  //         setError(err);
  //     }
  // }

  // function logoutHandler() {
  //     setLoggedIn(false);
  //     setCookieStandHook(null);
  //     setError(null);
  //     setUsername('');
  // }

  // if (!loggedIn) return <LoginForm onSubmit={loginHandler} error={error} />

    const [stands, setStands] = useState([])
    const [isEmpty, setIsEmpty] = useState(true)

    function createStandHandler(standInfo) {
      setStands([...stands, standInfo]);
      setIsEmpty(false);
    }


    return (
      <div>
        <Head><title>Cookie Stand Admin</title></Head>
        <Main useCookieStands={cookieStandHook.useCookieStands}
          onLogout={logoutHandler}
          onStandCreate={createStandHandler}
          stands={stands}
          username={username} />
      </div>
    )
  
}