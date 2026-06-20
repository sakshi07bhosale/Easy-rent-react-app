import "./PropertyCard.css";
import DummyImg from "./../../components/PropertyCard/building.png";
import { ChartArea,Building2,HandCoins } from 'lucide-react';

function PropertyCard({ title, address, city, area, propertyType, rent, rating }){
    return (
        <div className="property-card">
            <img src={DummyImg} alt="property" className="property-Img" />
            <h2 className="property-title">{title}</h2>
            <p className="property-address">Address: {address}</p>
            <p><HandCoins /> ₹{rent}</p>
            <p><Building2 /> {propertyType}</p>
            <p><ChartArea /> {area}</p>
            <p>Rating: {rating}</p>
        </div>
    );
} 

export default PropertyCard;