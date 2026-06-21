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
    </div>
  )
}

export default PropertyDetails
