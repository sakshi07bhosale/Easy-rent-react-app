import PropertyCard from "./../../components/PropertyCard/PropertyCard";
import { PROPERTIES } from "./../data";
import "./Properties";

function Properties() {
    return (
        <div>
            <h1>Properties</h1>
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
    );
}

export default Properties;