import Landing from './components/Team/Landing';
import Ocs from './components/Team/Ocs';
import Hcs from './components/Team/Hcs';
import Navbarshaurya from './pages/Navbar';
import PreLoader from './components/preLoader/preloader';
import LoadingSpinner from './components/LoadingSpinner/loadingspinner';





export default function App() {
  return (
    <> 
      <Navbarshaurya /> 
     <Landing /> 
    <Ocs />
    <Hcs/>
      
    </>
      
  )
}