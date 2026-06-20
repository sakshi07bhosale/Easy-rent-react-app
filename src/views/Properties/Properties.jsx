import PropertyCard from "./../../components/PropertyCard/PropertyCard";
import { PROPERTIES } from "./../data";
import "./Properties.css";

function Properties() {
    return (
        <div>
            <h1>Properties</h1>
            <div className="properties-container">
                {PROPERTIES.map((propertyObj) => {
                    const { id, title,  area, propertyType, rent, address, rating } = propertyObj;
                    return (
                        <PropertyCard
                            key={id}
                            title={title}
                            address={address}
                            area={area}
                            propertyType={propertyType}
                            rent={rent}
                            rating={rating}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Properties;