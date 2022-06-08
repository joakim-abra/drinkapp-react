import './App.css';
import { Routing } from './components/routes/Routes';
import { NavigationApp } from './components/navigation/NavigationApp';
import { UserProvider } from './shared/provider/UserProvider';



function App () {
return (
  <UserProvider>
   <Routing>
     <NavigationApp />
   </Routing>
  </UserProvider>

)
}

export default App;
