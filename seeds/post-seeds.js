const { Post } = require('../models');

const postdata = [
  {
    title: 'Cruising into Cuba',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xx.jpg',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'More Fun in Mexico',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xxx.jpg',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 2
  },
  {
    title: 'An Excursion to El Salvador',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xxxx.jpg',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 3
  },
  {
    title: 'Passion in Paris',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xxxxx.jpg',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Infatuated in Italy',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xxxxxx.jpg',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 5
  },
  {
    title: 'No Malaise in Madrid',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xxxxxxx.jpg',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 6
  },
  {
    title: 'Great Views in Greece',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xxxxxxxx.jpg',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 7
  },
  {
    title: 'Terrific Time in Tokyo',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xxxxxxxxx.jpg',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 8
  },
  {
    title: 'Beautiful Bahama Beaches',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xxxxxxxxxx.jpg',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Fell in Love With London',
    description: 'Here is a beautifull, quick description!',
    // filename: 'xxxxxxxxxxx.jpg',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 10
  },

// TEN POSTS ABOVE 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;