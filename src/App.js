import logo from './logo.svg';
import './App.css';
import { GoTrueClient } from '@supabase/gotrue-js'


async function OAuthSignIn(auth) {

  let data = await auth.signInWithOAuth({provider: 'github', options: {redirectTo: 'www.google.com', flowType: 'pkce'}})
  console.log(data.data.url)
}

// Uncomment when testing  PKCE
async function exchangeToken(auth) {
   const url = new URL(window.location.href)
   console.log(url)
   const tok = url.searchParams.get('code')
   let code = await auth.exchangeAuthCode(tok)
   console.log(code)
}


function App() {

  const auth =new GoTrueClient({ url: 'http://localhost:9999' })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>a
        <button onClick={()=> OAuthSignIn(auth) }>OAuthSignIn</button>
        <button onClick={()=> exchangeToken(auth)}>Exchange Token</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {/* <button onClick={()=>exchangeToken(supabase)}>exchange token </button> */}
      </header>
    </div>
  );
}

export default App;
