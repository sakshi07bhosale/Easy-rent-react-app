import "./PropertyCard";
function PropertyCard(id,title,description,city,area,propertyType,size,amenities,photos,rating,reviews,owner,nearby){
    return (
        <div className="property-card">
            <h2>{title}</h2>
            <p>Type: {propertyType}</p>
            <p>Size: {size} sq ft</p>
            <p>City:{city}</p>
        </div>
    );
}

export default PropertyCard;