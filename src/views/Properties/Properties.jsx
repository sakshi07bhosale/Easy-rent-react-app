import PropertyCard from "./../../components/PropertyCard/PropertyCard";
import { PROPERTIES } from "./../data";
import "./Properties.css";

function Properties() {
    return (
        <div>
            <h1>Properties</h1>
            <div className="properties-container">
                {PROPERTIES.map((propertyObj) => {
                    const { id, title, city, area, propertyType, rent, address } = propertyObj;
                    return (
                        <PropertyCard
                            key={id}
                            title={title}
                            address={address}
                            city={city}
                            area={area}
                            propertyType={propertyType}
                            rent={rent}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Properties;