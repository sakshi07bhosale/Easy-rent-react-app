import "./PropertyCard.css";
import DummyImg from "./../../components/PropertyCard/building.png";
import { ChartArea,Building2,HandCoins,Sofa } from 'lucide-react';
import Button from "./../../components/Button/Button";
import { useNavigate } from "react-router";
import RatingStars from "./../RatingStars";

function PropertyInfo({icon, label}) {
    return (
        <div className="property-info">
            {icon} 
            <span className="property-info-label">{label}</span>
        </div>
    )

}

function PropertyCard({ title, address, city, area, propertyType, rent, rating, furnished, id }){
    let navigate = useNavigate();
    return (
        <div className="property-card">
            <img src={DummyImg} alt="property" className="property-Img" />
            <h2 className="property-title">{title}</h2>
            <p className="property-address">Address: {address}</p>
            <div className="rating-info">
              <RatingStars rating={rating} />
            </div>

            <PropertyInfo icon={<Building2 />} label={propertyType} />
            <PropertyInfo icon={<ChartArea />} label={area} />
            <PropertyInfo icon={<HandCoins />} label={`₹${rent}`} />
            <PropertyInfo icon={<Sofa />} label={furnished ? "Yes" : "No"} />

            <div className="card-actions">
                <Button title={"Know More"} onClick={()=>{
                    navigate(`/property/${id}`);
                }} />
            </div>

        </div>
    );
} 

export default PropertyCard;