const { Schema, model } = require('mongoose');
const { projectSchema } = require('./Project');


// PROJECT:
//  projectTitle!
//  organization
//  imgLinkLink
//  deployedLink
//  skillList

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Each project needs a title',
      minlength: 1,
      maxlength: 280
    },
    organization: {
      type: String,
      maxlength: 280
    },
    blurb: {
      type: String,
      required: false,
      trim: true,
      default: 'Optional text description'
    },
    imgLink: {
      type: String,
      maxlength: 280,
      default: 'https://via.placeholder.com/300'

    },
    deployedLink: {
      type: String,
      maxlength: 280
    },
    skillList: [String]
  },
  
);

const Project = model('Project', projectSchema);

module.exports = Project;
