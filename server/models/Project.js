const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema(
  {
    projectText: {
      type: String,
      required: 'You need to leave a project!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

projectSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Project = model('Project', projectSchema);

module.exports = Project;
