import PropertyCard from "./../../components/PropertyCard/PropertyCard";
import { PROPERTIES } from "./../data";
import "./Properties.css";
import { useState, useEffect } from "react";
import Input from "./../../components/Input/Input";

function Properties() {
    const [properties, setProperties] = useState(PROPERTIES);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if(searchTerm === "") {
            setProperties(PROPERTIES);
        }else {
            const filteredProperties = PROPERTIES.filter((property) => {
                const { title, address, city, area, propertyType } = property;
                const lowerSearchTerm = searchTerm.toLowerCase();
                return (
                    title.toLowerCase().includes(lowerSearchTerm) ||
                    address.toLowerCase().includes(lowerSearchTerm) ||
                    city.toLowerCase().includes(lowerSearchTerm) ||
                    area.toLowerCase().includes(lowerSearchTerm) ||
                    propertyType.toLowerCase().includes(lowerSearchTerm)
                );
            });
            setProperties(filteredProperties);
        }
    }, [searchTerm]);

    return (
        <div>
            <h1>Properties</h1>
            <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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