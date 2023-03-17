export default function Card(props) {

    const {img, location, date, site, description} = props

    return(
        <section className="section">
            <img src={img} alt="" className="image" />
            <div className="details">
                <div>
                    <img src="" alt="" />
                    <span className="location">{location}</span>
                    <a href="" className="link">View on Google Maps</a>
                </div>
                <h3 className="place">{site}</h3>
                <b>{date}</b>
                <p>{description}</p>
            </div>
        </section>
    )
}