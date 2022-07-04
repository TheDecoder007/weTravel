
const User = require('./User');
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');


// create associations

//one user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

//each post belongs to only one user
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

//   //user and post models can query each others information, in the context of a vote
//  //can see the posts a user has voted on 
//  //belongsToMany(Post...through vote, establishes connection with Posts
//   User.belongsToMany(Post, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'user_id'
//   });
  
//   //user and post models can query each others information, in the context of a vote
//   //can see a total of how many votes a user creates
//  //belongsToMany(User...through vote, establishes connection with User
//   Post.belongsToMany(User, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'post_id'
//   });

//directly connects post to vote models and user to vote models
  Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });

  //connects comments to users and posts
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });


module.exports = { User, Post, Vote, Comment };