const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This looks so awesome!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'OMG I want to go there so bad now.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Thanks for posting, this is so cool!',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Wow this looks like such a great place to visit.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Thanks for the tips! Im going there next month.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'I love the pictures, so beautiful.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'This is now on my bucket list thanks to you!',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Looks like so much to do here, I need to go!',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Amazing photos and an amazing place.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Love it here.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'One of my favorite places in the world to visit.',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'So glad you had a great time.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Wow! This is incredible.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'Looks so cool, how was the food?',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'I had such a good time when I went here too.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'The people here were so friendly!',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'I cant believe how gorgeous it is! Great pics!',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Never thought about going here, but now I NEED to!',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Looks like you had a great time!',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'I went here a few years ago, its truly unforgettable.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text: 'It truly is one of the most beautiful places.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Had the best time of my life here.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'I love this place, we go every year.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Great recommendations!',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text: 'Love this whole area and have never had a bad time.',
    user_id: 1,
    post_id: 5
  },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;