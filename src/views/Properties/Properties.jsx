import PropertyCard from "./../../components/PropertyCard/PropertyCard";
import { PROPERTIES } from "./../data";
import "./Properties.css";
import { useState } from "react";
import Input from "./../../components/Input/Input";

function Properties() {
    const [properties, setProperties] = useState(PROPERTIES);
    return (
        <div>
            <h1>Properties</h1>
            <Input />
            <div className="properties-container">
                {properties.map((propertyObj) => {
                    const { id, title,  area, propertyType, rent, address, rating,furnished, photos } = propertyObj;
                    return (
                        <PropertyCard
                            key={id}
                            id={id}
                            title={title}
                            address={address}
                            area={area}
                            propertyType={propertyType}
                            rent={rent}
                            rating={rating}
                            furnished={furnished}
                            photos={photos}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Properties;