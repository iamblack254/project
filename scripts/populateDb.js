const mongoose = require('mongoose');
const Property = require('../src/models/Property'); // Ensure this path is correct
const dotenv = require('dotenv');

dotenv.config();

const dbConnectionString = process.env.DB_CONNECTION;

if (!dbConnectionString) {
    console.error('Error: DB_CONNECTION is not defined in your environment variables.');
    process.exit(1);
}

mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

    const properties=[{
      name: 'Artesano',
      title: 'A Splendore Of Pleasure And True Happines',
      description: 'Welcome to Artesano, a testament to unparalleled luxury, set amidst the serene surroundings of the upscale ArteSano neighborhood. This property for sale features meticulously crafted 1- and 2-bedroom duplex apartments with unique architecture, complemented by a ground-floor retail hub and a panoramic rooftop terrace offering breathtaking views of the gatzon park nairobi',
      images: [
        { url: '/images/image/IMG-20240725-WA0038.jpg' },
        { url: '/images/image/IMG-20240725-WA0035.jpg' },
        { url: '/images/image/IMG-20240725-WA0022.jpg' },
        { url: '/images/image/IMG-20240725-WA0029.jpg' },
        { url: '/images/image/IMG-20240725-WA0023.jpg' },
        { url: '/images/image/IMG-20240725-WA0025.jpg' },
        { url: '/images/image/IMG-20240725-WA0026.jpg' },
        { url: '/images/image/IMG-20240725-WA0027.jpg' },
        { url: '/images/image/IMG-20240725-WA0039.jpg' },
      ],
      details: [
        {
          iconColor: '#000000',
          iconPath: 'M176-200h-30.3L126-280H80v-214q0-25.9 17-43.95Q114-556 140-556h26v-144q0-24.75 17.63-42.38Q201.25-760 226-760h507q24.75 0 42.38 17.62Q793-724.75 793-700v144h27q24.75 0 42.38 17.62Q880-520.75 880-496v216h-46l-19.78 80h-30.44L764-280H197l-21 80',
          text: 'Studios,One & Two Bed DUPLEXES from USD 75,000',
          link: '',
        },
        {
          iconColor: '#5f6368',
          iconPath: 'M480-276q109-83 164.5-169.5T700-600q0-97-61.5-158.5T480-820q-97 0-158.5 61.5T260-600q0 67 55.5 153.5T480-276Zm0 76Q338-303 269-406t-69-194q0-123 78.5-201.5T480-880q123 0 201.5 78.5T760-600q0 91-69 194T480-200Zm-1-320q34 0 57.5-23.5T560-600q0-33-23.5-56.5T479-680q-33 0-56 23.5T400-600q0 33 23 56.5t56 23.5ZM200-80v-60h560v60H200Zm280-520Z',
          text: 'View Location',
          link: '',
        },
        {
          iconColor: '#5f6368',
          iconPath: 'M120-120v-555h165v-165h390v330h165v390H533v-165H427v165H120Zm60-60h105v-105H180v105Zm0-165h105v-105H180v105Zm0-165h105v-105H180v105Zm165 165h105v-105H345v105Zm0-165h105v-105H345v105Zm0-165h105v-105H345v105Zm165 330h105v-105H510v105Zm0-165h105v-105H510v105Zm0-165h105v-105H510v105Zm165 495h105v-105H675v105Zm0-165h105v-105H675v105Z',
          text: 'View Floor Plan',
          link: '',
        },
        {
          iconColor: '#000000',
          iconPath: 'M438-120 310-248l43-42 85 85 169-170 43 43-212 212ZM180-780v60h600v-60H180Zm121 120 18 60h322l18-60H301Zm18 120q-19.5 0-35.25-11.63Q268-563.25 262-582l-25-78h-57q-24.75 0-42.37-17.63Q120-695.25 120-720v-120h720v120q0 25-17.62 42.5Q804.75-660 780-660h-57l-30 81q-6.93 17.25-22.34 28.12Q655.26-540 636-540H319ZM180-780v60-60Z',
          text: 'Ready for occupation',
          link: '',
        },
      ],
      sections: [
        {
          title: 'curated design and positioning',
          content: 'Nestled away from the hustle and bustle, our carefully curated retail space with mini-market shopping, cozy cafes, health and beauty services invites you to indulge in a serene shopping experience. Tucked amidst lush greenery and refreshing breezes, its luxurious offerings guarantee a sensory delight.',
          image: '/images/image/IMG-20240725-WA0023.jpg',
        },
        {
          title: 'Two bedrooms',
          content: 'Each 2 bedroom duplex apartment spans two levels, connected by a statement stairway that evokes the comfort of home. Enjoying elevated panoramic views, the bedrooms offer rich, bright, and airy spaces, adorned with large glazing that frames picture-perfect backdrops of the tranquil ambience.',
          image: '/images/image/IMG-20240725-WA0023.jpg',
        },
        {
          title: 'one bedrooms',
          content: 'Our 1-bedroom duplex apartments transcend conventional interior design, offering double-volume spaces in the living areas bathed in dappled light. The bedroom area is elegantly suspended over the living room, forging a breathtaking connection with the spaces below, seamlessly blending luxury with nature.',
          image: '/images/image/IMG-20240725-WA0023.jpg',
        },
        {
          title: 'Curated rooftop',
          content: 'Accessible to all, is the rooftop oasis that promises modern amenities in the apartments. They include a heated swimming pool, fully-fitted gym, resident’s lounge, media lounge and inviting outdoor seating complemented by a soothing water feature, it promises an escape into serenity and leisure.',
          image: '/images/image/IMG-20240725-WA0023.jpg',
        },
        {
          title: 'Unique prospect',
          content: 'Artesano\'s ideal location within the UN Blue Zone and adjacent to Jomo Kenyatta airport, Nairobi’s vibrant lifestyle and commercial hub make it an essential addition for anyone looking at real estate options in Kenya especially apartments for sale in Nairobi. In addition, the construction of modern Train and air transport facilities in Kenya presents a prospect for increased demands for rental property from both local and international residents making these luxury apartments an essential for your investor’s case.',
          image: '/images/image/IMG-20240725-WA0023.jpg',
        },
      ],
      brochure: {
        image: '/images/image/IMG-20240725-WA0039.jpg',
      },
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.692510693453!2d36.78955789314256!3d-1.452516262947027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d742ec24c2f%3A0x4f81dc488d0002d1!2sArtesano%20Nairobi!5e0!3m2!1sen!2ske!4v1698092351041!5m2!1sen!2ske',
    }];

    async function populateDB() {
      try {
          console.log('Clearing existing properties');
          await Property.deleteMany(); // Clear existing properties
          console.log('Inserting new properties');
          await Property.insertMany(properties); // Add new properties
          console.log('Database populated with initial data.');
      } catch (error) {
          console.error('Error populating database:', error);
      } finally {
          mongoose.connection.close();
      }
  }
  
  populateDB();