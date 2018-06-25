const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'hotelsearchdb',
    'hotelsearchadmin',
    'hotelsearchpass',
    {
        host: 'localhost',
        dialect: 'mysql'
});

const Hotel = sequelize.define('hotel',{
    name: Sequelize.DataTypes.STRING,
    state: Sequelize.DataTypes.STRING,
    rating: Sequelize.DataTypes.INTEGER,
    maxPrice: Sequelize.DataTypes.INTEGER,
    offerPrice: Sequelize.DataTypes.INTEGER
})

let data = [
    {
        name:'Hotel A',
        state: 'New Delhi',
        rating: 3,
        maxPrice:1800,
        offerPrice: 1500
    },
    {
        name:'Hotel B',
        state: 'Mumbai',
        rating: 3,
        maxPrice:1800,
        offerPrice: 1400
    },
    {
        name:'Hotel C',
        state: 'Goa',
        rating: 5,
        maxPrice:2800,
        offerPrice: 1600
    },

    {
        name:'Hotel D',
        state: 'Goa',
        rating: 4,
        maxPrice:3800,
        offerPrice: 1700
    },

    {
        name:'Hotel E',
        state: 'Goa',
        rating: 3,
        maxPrice:1800,
        offerPrice: 1100
    },

    {
        name:'Hotel F',
        state: 'Mumbai',
        rating: 4,
        maxPrice:2600,
        offerPrice: 1300
    },

    {
        name:'Hotel G',
        state: 'Mumbai',
        rating: 3,
        maxPrice:1900,
        offerPrice: 1500
    },

    {
        name:'Hotel H',
        state: 'New Delhi',
        rating: 4,
        maxPrice:2000,
        offerPrice: 900
    },

    {
        name:'Hotel I',
        state: 'New Delhi',
        rating: 3,
        maxPrice:1800,
        offerPrice: 1300
    },

    {
        name:'Hotel J',
        state: 'Mumbai',
        rating: 3,
        maxPrice:2600,
        offerPrice: 1600
    },

    {
        name:'Hotel K',
        state: 'Rajasthan',
        rating: 4,
        maxPrice:1850,
        offerPrice: 1360
    },

    {
        name:'Hotel L',
        state: 'Goa',
        rating: 3,
        maxPrice:1900,
        offerPrice: 1100
    },

    {
        name:'Hotel M',
        state: 'Rajasthan',
        rating: 3,
        maxPrice:1900,
        offerPrice: 1700
    },
];

for(let i=0; i<data.length; i++){
    sequelize.sync()
        .then(()=>Hotel.create({
            name: data[i].name,
            state: data[i].state,
            rating: data[i].rating,
            maxPrice: data[i].maxPrice,
            offerPrice: data[i].maxPrice
        })).then((result)=>{
        console.log(result);
    })
}

module.exports = {Hotel}
