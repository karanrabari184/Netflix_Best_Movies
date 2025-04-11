{/*import { Movie_home } from "./components/Movie_home";*/ }
import NetflixSeries from "./components/NetflixSeries";
import Profile from "./components/Profile";
import "./components/Netflix.css"

export const App = () => {
  return (
    <section className="container">
      <NetflixSeries />
      {/*<Profile />*/}
    </section>
  );
}

