const cities = {
  Mumbai: ['Studio 300 sqft', '1BHK 450 sqft', '2BHK 750 sqft', '3BHK 1100 sqft', '4BHK 1500 sqft', 'Penthouse 2200 sqft'],
  Delhi: ['Studio 300 sqft', '1BHK 450 sqft', '2BHK 750 sqft', '3BHK 1100 sqft', '4BHK 1500 sqft', 'Penthouse 2200 sqft'],
  Bangalore: ['Studio 300 sqft', '1BHK 450 sqft', '2BHK 750 sqft', '3BHK 1100 sqft', '4BHK 1500 sqft', 'Penthouse 2200 sqft'],
  Chennai: ['Studio 300 sqft', '1BHK 450 sqft', '2BHK 750 sqft', '3BHK 1100 sqft', '4BHK 1500 sqft', 'Penthouse 2200 sqft'],
  Hyderabad: ['Studio 300 sqft', '1BHK 450 sqft', '2BHK 750 sqft', '3BHK 1100 sqft', '4BHK 1500 sqft', 'Penthouse 2200 sqft'],
  Pune: ['Studio 300 sqft', '1BHK 450 sqft', '2BHK 750 sqft', '3BHK 1100 sqft', '4BHK 1500 sqft', 'Penthouse 2200 sqft']
};

const propertyTypes = ['Flat', 'Bungalow', 'Villa', 'Penthouse'];
const sizes = ['Studio', '1BHK', '2BHK', '3BHK', '4BHK'];
const amenitySets = [
  ['Swimming Pool', 'Lift', 'Gym', 'Parking'],
  ['Lift', 'Parking', 'Security', 'Clubhouse'],
  ['Swimming Pool', 'Garden', 'Parking', 'Power Backup'],
  ['Gym', 'Lift', 'Security', 'Power Backup'],
  ['Swimming Pool', 'Lift', 'Garden', 'Parking'],
  ['Lift', 'Gym', 'Power Backup', 'Security']
];

const nearbyBase = {
  Mumbai: {
    airport: 'Chhatrapati Shivaji Maharaj International Airport',
    mall: 'Phoenix Marketcity',
    railwayStation: 'Mumbai Central',
    metroStation: 'Swami Samarth Nagar Metro Station',
    hospital: 'Lilavati Hospital',
    school: 'Dhirubhai Ambani International School'
  },
  Delhi: {
    airport: 'Indira Gandhi International Airport',
    mall: 'DLF Promenade',
    railwayStation: 'New Delhi Railway Station',
    metroStation: 'Rajiv Chowk Metro Station',
    hospital: 'AIIMS',
    school: 'Delhi Public School, RK Puram'
  },
  Bangalore: {
    airport: 'Kempegowda International Airport',
    mall: 'Phoenix Marketcity Whitefield',
    railwayStation: 'Bangalore City Railway Station',
    metroStation: 'Majestic Metro Station',
    hospital: 'Manipal Hospital',
    school: 'National Public School'
  },
  Chennai: {
    airport: 'Chennai International Airport',
    mall: 'Express Avenue',
    railwayStation: 'Chennai Central',
    metroStation: 'Thousand Lights Metro Station',
    hospital: 'Apollo Hospital',
    school: 'Chettinad Vidyashram'
  },
  Hyderabad: {
    airport: 'Rajiv Gandhi International Airport',
    mall: 'Inorbit Mall',
    railwayStation: 'Hyderabad Deccan Station',
    metroStation: 'Ameerpet Metro Station',
    hospital: 'Yashoda Hospital',
    school: 'Oakridge International School'
  },
  Pune: {
    airport: 'Pune International Airport',
    mall: 'Phoenix Marketcity Pune',
    railwayStation: 'Pune Junction',
    metroStation: 'Vanaz Metro Station',
    hospital: 'Sahyadri Hospital',
    school: "The Bishop's School"
  }
};

const owners = [
  'Ria Gupta', 'Amit Patel', 'Priya Sharma', 'Raj Kumar', 'Sneha Reddy', 'Vikram Singh',
  'Nisha Iyer', 'Neha Joshi', 'Kiran Mehta', 'Sonal Bose', 'Aakash Gupta', 'Deepa Patel',
  'Manish Sharma', 'Pooja Kumar', 'Siddharth Reddy', 'Meera Singh'
];

function getOwner(i) {
  const name = owners[i % owners.length];
  const numeric = 900000000 + ((i * 327 + 101) % 90000000);
  return {
    name,
    phone: `+91 9${numeric}`,
    email: `owner${i}@easyrent.example.com`
  };
}

function selectAmenities(index) {
  const base = amenitySets[index % amenitySets.length];
  return base.slice(0, 2 + ((index + 1) % 3));
}

function getRating(index) {
  return parseFloat((3.4 + ((index * 5) % 16) / 10).toFixed(1));
}

function getReviews(index) {
  return 15 + ((index * 11) % 185);
}

const PROPERTIES = Array.from({ length: 200 }, (_, index) => {
  const i = index + 1;
  const cityKeys = Object.keys(cities);
  const city = cityKeys[Math.floor((index * cityKeys.length) / 200) % cityKeys.length];
  const areaList = cities[city];
  const area = areaList[index % areaList.length];
  const propertyType = propertyTypes[index % propertyTypes.length];
  const size = sizes[(index + 1) % sizes.length];
  const amenities = selectAmenities(index);
  const address = `${i} ${area} Road, ${city}`;
  const rent = 10000 + ((index * 1237) % 90000);
  const rating = getRating(index);
  const reviews = getReviews(index);
  const owner = getOwner(index);
  const nearby = nearbyBase[city];

  return {
    id: i,
    title: `${size} ${propertyType} in ${area}, ${city}`,
    description: `A modern ${size.toLowerCase()} ${propertyType.toLowerCase()} located in ${area}, ${city}, with easy access to transit and local amenities.`,
    city,
    area,
    propertyType,
    size,
    amenities,
    address,
    rent,
    photos: [],
    rating,
    reviews,
    owner,
    nearby
  };
});

export { PROPERTIES };