import SeriesData from "../api/SeriesData.json"
import { SeriesList } from "./SeriesList";
const NetflixSeries = () => {
    return (
        <>
            <header className="hero">
                <h1 className="hero-title">Top Netflix Series</h1>
                <p className="hero-subtitle">Binge-worthy shows curated just for you 🎬</p>
            </header>

            <ul className="grid g grid-three--cols">

                {SeriesData.map((data) => {
                    return <SeriesList key={data.id} data={data} />
                })}



            </ul>
        </>
    );
}
export default NetflixSeries;