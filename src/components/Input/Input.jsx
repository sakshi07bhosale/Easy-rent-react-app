import { useState } from "react";
import "./Input.css";

function Input({ 
    type = "text", 
    placeholder = "Search for properties", 
    value = "", 
    onChange = () => {},
    onFilterChange = () => {}
}){
    const [filters, setFilters] = useState({
        city: "",
        propertyType: "",
        area: ""
    });

    const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune"];
    const propertyTypes = ["Flat", "Bungalow", "Villa", "Penthouse"];
    const sizes = ["Studio", "1BHK", "2BHK", "3BHK", "4BHK"];

    const handleFilterChange = (filterName, filterValue) => {
        const updatedFilters = {
            ...filters,
            [filterName]: filterValue
        };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    return (
        <div className="search-container">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input-field"
            />
            <div className="filter-dropdowns">
                <select
                    value={filters.city}
                    onChange={(e) => handleFilterChange('city', e.target.value)}
                    className="dropdown"
                >
                    <option value="">Select City</option>
                    {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>

                <select
                    value={filters.propertyType}
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                    className="dropdown"
                >
                    <option value="">Select Property Type</option>
                    {propertyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>

                <select
                    value={filters.area}
                    onChange={(e) => handleFilterChange('area', e.target.value)}
                    className="dropdown"
                >
                    <option value="">Select Area</option>
                    {sizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Input;