const { faker } = require('@faker-js/faker');

// Function to generate locations
const generateLocations = (count) => {
    const locations = [];

    for (let i = 0; i < count; i++) {
        locations.push({
            id: i + 1,
            score: (Math.random() * 100).toFixed(0),
            name: `${faker.location.city()}`,
            address: faker.location.streetAddress({ useFullAddress: true }),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
            country: faker.location.country()
        });
    }

    return locations;
};


const locations = generateLocations(10000);

console.log(locations.slice(0, 5));

const fs = require('fs');
fs.writeFileSync('locations.json', JSON.stringify(locations, null, 2));
