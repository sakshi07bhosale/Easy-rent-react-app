import "./PropertyDetails.css"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import DummuyImg from "./building.png";
import {PROPERTIES} from "./../data"

function PropertyDetails() {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
    const property = PROPERTIES.find((prop) => prop.id === parseInt(id));
    if (property) {
      setPropertyDetails(property);
    }
  }, [id]);

  return (
    <div>
      <img src={DummuyImg} alt="property" className="property-Img" />
      <h1>{propertyDetails.title ? propertyDetails.title : `Property ${id}`} {id}</h1>
      <p>{propertyDetails.address}</p>
      <p>{propertyDetails.propertyType}</p>
      <p>{propertyDetails.size}</p>
      <p>{propertyDetails.city}</p>
      <p>{propertyDetails.area}</p>
      <p>{propertyDetails.rent}</p>
      <p>{propertyDetails.furnished ? "Furnished" : "Unfurnished"}</p>
      <p>Amenities: {propertyDetails.amenities ? propertyDetails.amenities.join(", ") : "N/A"}</p>
      <p>Rating: {propertyDetails.rating}</p>
      <p>Reviews: {propertyDetails.reviews}</p>
      <p>Owner: {propertyDetails.owner ? propertyDetails.owner.name : "N/A"}</p>
    </div>
  )
}

export default PropertyDetails
