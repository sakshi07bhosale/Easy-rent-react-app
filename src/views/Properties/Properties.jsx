import PropertyCard from "./../../components/PropertyCard/PropertyCard";
import { PROPERTIES } from "./../data";
import "./Properties.css";
import { useState } from "react";
import Input from "./../../components/Input/Input";

function Properties() {
    const [searchTerm, setSearchTerm] = useState("");
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredProperties = normalizedSearch
        ? PROPERTIES.filter((property) => {
            const { title, address, city, area, propertyType } = property;
            return (
                title.toLowerCase().includes(normalizedSearch) ||
                address.toLowerCase().includes(normalizedSearch) ||
                city.toLowerCase().includes(normalizedSearch) ||
                area.toLowerCase().includes(normalizedSearch) ||
                propertyType.toLowerCase().includes(normalizedSearch)
            );
        })
        : PROPERTIES;

    return (
        <div>
            <h1>Properties</h1>
            <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <div className="properties-container">
                {filteredProperties.map((propertyObj) => {
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