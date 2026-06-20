import "./PropertyCard.css";
import DummyImg from "./../../components/PropertyCard/building.png";
import { ChartArea,Building2,HandCoins,Sofa } from 'lucide-react';

function PropertyCard({ title, address, city, area, propertyType, rent, rating, furnished }){
    return (
        <div className="property-card">
            <img src={DummyImg} alt="property" className="property-Img" />
            <h2 className="property-title">{title}</h2>
            <p className="property-address">Address: {address}</p>
            <p><Building2 /> {propertyType}</p>
            <p className="rating-info"> {rating}</p>
            <p><ChartArea /> {area}</p>
            <p><HandCoins /> ₹{rent}</p>
            <p><Sofa /> {furnished ? "Yes" : "No"}</p>
        </div>
    );
} 

export default PropertyCard;