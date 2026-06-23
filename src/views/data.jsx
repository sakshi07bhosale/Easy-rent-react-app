import Img1 from "./../assets/1.avif";
import Img2 from "./../assets/2.avif";
import Img3 from "./../assets/3.avif";
import Img4 from "./../assets/4.avif";
import Img5 from "./../assets/5.avif";
import Img6 from "./../assets/6.avif";
import Img7 from "./../assets/7.avif";
import Img8 from "./../assets/8.avif";
import Img9 from "./../assets/9.avif";
import Img10 from "./../assets/10.avif";
import Img11 from "./../assets/11.avif";
import Img12 from "./../assets/12.avif";
import Img13 from "./../assets/13.avif";
import Img14 from "./../assets/14.avif";
import Img15 from "./../assets/15.avif";
import Img16 from "./../assets/16.avif";
import Img17 from "./../assets/17.avif";
import Img18 from "./../assets/18.avif";
import Img19 from "./../assets/19.avif";
import Img20 from "./../assets/20.avif";

const IMAGES = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
  Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20
];


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
const furnishedOptions = ['Furnished', 'Semi-Furnished', 'Unfurnished'];
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

const reviewerNames = [
  'Ananya Shah', 'Karan Mehta', 'Sima Desai', 'Priyanka Nair', 'Rohit Khanna', 'Isha Verma',
  'Naveen Gupta', 'Aarti Joshi', 'Devika Rao', 'Amitabh Singh'
];

const reviewComments = [
  'Excellent location and very clean. The owner was responsive and helpful.',
  'Spacious home with great amenities and easy access to public transport.',
  'Very comfortable stay; the property matched the description perfectly.',
  'Great value for money, nice neighborhood and friendly management.',
  'Well-maintained apartment with all essential facilities and a cozy feel.',
  'The place was sparkling clean and the support team was very attentive.'
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

function getCustomerReviews(index) {
  return Array.from({ length: 3 }, (_, reviewIndex) => {
    const reviewer = reviewerNames[(index + reviewIndex) % reviewerNames.length];
    const rating = 3 + ((index + reviewIndex) % 3);
    const comment = reviewComments[(index + reviewIndex) % reviewComments.length];
    const daysAgo = 2 + ((index * 7 + reviewIndex * 5) % 28);
    const reviewDate = new Date();
    reviewDate.setDate(reviewDate.getDate() - daysAgo);

    return {
      id: reviewIndex + 1,
      name: reviewer,
      rating,
      comment,
      date: reviewDate.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };
  });
}

const ALL_AMENITIES = [
  'Swimming Pool', 'Lift', 'Gym', 'Parking', 'Security',
  'Clubhouse', 'Garden', 'Power Backup', 'WiFi', 'CCTV',
  "Children's Play Area", 'Maintenance', 'AC'
];

function selectAmenities(index) {
  const start = index % ALL_AMENITIES.length;
  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push(ALL_AMENITIES[(start + i) % ALL_AMENITIES.length]);
  }
  return result;
}

function getRating(index) {
  return parseFloat((3.4 + ((index * 5) % 16) / 10).toFixed(1));
}

function getReviews(index) {
  return 15 + ((index * 11) % 185);
}

function getPropertyPhotos(index) {
  const totalImages = IMAGES.length;
  // deterministic pseudo-random generator seeded by index for reproducibility
  let seed = index + 1;
  function rand() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  }

  // seeded Fisher-Yates shuffle of image indices
  const indices = Array.from({ length: totalImages }, (_, i) => i);
  for (let i = totalImages - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = indices[i];
    indices[i] = indices[j];
    indices[j] = tmp;
  }

  return indices.slice(0, 5).map((idx) => IMAGES[idx]);
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
  const furnished = furnishedOptions[index % furnishedOptions.length];
  const address = `${i} ${area} Road, ${city}`;
  const rent = 10000 + ((index * 1237) % 90000);
  const rating = getRating(index);
  const reviews = getReviews(index);
  const owner = getOwner(index);
  const nearby = nearbyBase[city];

  return {
    id: i,
    title: `${size} ${propertyType} in ${area}, ${city}`,
    description: `A modern ${size.toLowerCase()} ${propertyType.toLowerCase()} located in ${area}, ${city}, ${furnished.toLowerCase()}, with easy access to transit and local amenities.`,
    city,
    area,
    propertyType,
    size,
    furnished,
    amenities,
    address,
    rent,
    photos: getPropertyPhotos(index),
    rating,
    reviews,
    customerReviews: getCustomerReviews(index),
    owner,
    nearby
  };
});

export { PROPERTIES };