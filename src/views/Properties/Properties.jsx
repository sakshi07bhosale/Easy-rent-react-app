import PropertyCard from "./../../components/PropertyCard/PropertyCard";
import { PROPERTIES } from "./../data";
import "./Properties.css";
import { useState } from "react";
import Input from "./../../components/Input/Input";

function Properties() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        city: "",
        propertyType: "",
        area: ""
    });

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredProperties = PROPERTIES.filter((property) => {
        const { title, address, city, area, propertyType } = property;
        
        // Search term filter
        const matchesSearch = !normalizedSearch || (
            title.toLowerCase().includes(normalizedSearch) ||
            address.toLowerCase().includes(normalizedSearch) ||
            city.toLowerCase().includes(normalizedSearch) ||
            area.toLowerCase().includes(normalizedSearch) ||
            propertyType.toLowerCase().includes(normalizedSearch)
        );

        // City filter
        const matchesCity = !filters.city || city === filters.city;

        // Property type filter
        const matchesType = !filters.propertyType || propertyType === filters.propertyType;

        // Area filter (match the size like "1BHK", "2BHK", etc.)
        const matchesArea = !filters.area || area.includes(filters.area);

        return matchesSearch && matchesCity && matchesType && matchesArea;
    });

    return (
        <div>
            <h1>Properties</h1>
            <Input 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                onFilterChange={(updatedFilters) => setFilters(updatedFilters)}
            />
            <div className="properties-container">
                {filteredProperties.map((propertyObj) => {
                    const { id, title, area, propertyType, rent, address, rating, furnished, photos } = propertyObj;
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