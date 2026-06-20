import "./PropertyCard.css";
import DummyImg from "./../../components/PropertyCard/building.png";
import { Scan } from 'lucide-react';

function PropertyCard({ title, address, city, area, propertyType, rent, rating }){
    return (
        <div className="property-card">
            <img src={DummyImg} alt="property" className="property-Img" />
            <h2 className="property-title">{title}</h2>
            <p className="property-address">Address: {address}</p>
            <p>Rent: ₹{rent}</p>
            <p>Type: {propertyType}</p>
            <p><Scan /> {area}</p>
            <p>Rating: {rating}</p>
        </div>
    );
} 

export default PropertyCard;