import "./PropertyCard.css";
import DummyImg from "./../../components/PropertyCard/building.png";
import { ChartArea,Building2,HandCoins,Sofa } from 'lucide-react';

function PropertyInfo({icon, label}) {
    return (
        <div className="property-info">
            {icon} {label}
        </div>
    )

}

function PropertyCard({ title, address, city, area, propertyType, rent, rating, furnished }){
    return (
        <div className="property-card">
            <img src={DummyImg} alt="property" className="property-Img" />
            <h2 className="property-title">{title}</h2>
            <p className="property-address">Address: {address}</p>
            <p className="rating-info"> {rating}</p>

            <PropertyInfo icon={<Building2 />} label={propertyType} />
            <PropertyInfo icon={<ChartArea />} label={area} />
            <PropertyInfo icon={<HandCoins />} label={`₹${rent}`} />
            <PropertyInfo icon={<Sofa />} label={furnished ? "Yes" : "No"} />

        </div>
    );
} 

export default PropertyCard;