export const SeriesList = ({ data }) => {
    const { id, img_url, name, rating, genre, description, watch_url } = data;
    const rating_class = rating >= 9 ? "super_hit" : "average";
    return (
        <li>
            <div className="card">
                <img
                    src={img_url}
                    className="card-img-top"
                    alt={`${name} image`}
                />
                <div className="card-body">
                    <h2>{name}</h2>
                    <h3>Rating: <span className={`rating ${rating_class}`}>{rating}</span></h3>
                    <h3>Genre: {genre.join(',f')}</h3>
                    <p>{description}</p>
                    <a href={watch_url} target="_blank" rel="noopener noreferrer">
                        <button className="btn">Watch Now</button>
                    </a>
                </div>
            </div>

        </li>
    );
}