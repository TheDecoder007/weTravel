//imports sequelize model
const { Model, DataTypes } = require('sequelize');
//includes connection we stored in connection.js
const sequelize = require('../config/connection');

// create our Post model
//refactored to Post.upvote acts as a built in method. this will handle the complicated -
//voting query in the /api/post/upvote route
class Post extends Model {
    static upvote(body, models) {
        return models.Vote.create({
          user_id: body.user_id,
          post_id: body.post_id
        }).then(() => {
          return Post.findOne({
            where: {
              id: body.post_id
            },
            attributes: [
              'id',
              'blog_body',
              'description',
              'title',
              'created_at',
              [
                sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
                'vote_count'
              ]
            ]
          });
        });
      }
    }

// create fields/columns for Post model
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blog_body: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
    
    
    //determines who makes the post. using references to user model
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  module.exports = Post;