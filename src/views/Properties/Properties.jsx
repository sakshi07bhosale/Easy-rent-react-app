import PropertyCard from "./../../components/PropertyCard/PropertyCard";
import { PROPERTIES } from "./../data";
import "./Properties.css";

function Properties() {
    return (
        <div>
            <h1>Properties</h1>
            <div className="properties-container">
                {PROPERTIES.map((propertyObj) => {
                    const { id, title, description, city, area } = propertyObj;
                    return (
                        <PropertyCard
                            key={id}
                            title={title}
                            description={description}
                            city={city}
                            area={area}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Properties;