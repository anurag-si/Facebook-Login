import './App.css';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = (data) => {
  console.warn(data)
}

function App() {
  return (
    <div className="App">
    <FacebookLogin
    appId="545460383955841"
    autoLoad={true}
    fields="name,email,picture"
 
    callback={responseFacebook} />  
    </div>
  );
}

export default App;
