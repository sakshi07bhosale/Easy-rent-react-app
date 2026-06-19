import "./PropertyCard.css";
import DummyImg from "./../../components/PropertyCard/building.png";

function PropertyCard({ title,  city, area, propertyType }){
    return (
        <div className="property-card">
            <img src={DummyImg} alt="property" className="property-Img" />
            <h2 className="property-title">{title}</h2>
            <p>Type: {propertyType}</p>
            <p>Area: {area}</p>
            <p>City: {city}</p>
        </div>
    );
}

export default PropertyCard;