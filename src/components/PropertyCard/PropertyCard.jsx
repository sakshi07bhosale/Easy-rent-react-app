import "./PropertyCard.css";
function PropertyCard({ title,  city, area, propertyType }){
    return (
        <div className="property-card">
            <h2>{title}</h2>
            <p>Type: {propertyType}</p>
            <p>Area: {area}</p>
            <p>City: {city}</p>
        </div>
    );
}

export default PropertyCard;