'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// sell post
var forumPostSchema = Schema( {
  userId: ObjectId,
  userName: String,
  post: String, //title
  createdAt: Date,
  price: Number,
  condition: String,
  contact: String,
  contactInfo: String,
  course: String,
  descirbtion: String,
  itemPic: String,
  product: String,




} );

module.exports = mongoose.model( 'ForumPost', forumPostSchema );
