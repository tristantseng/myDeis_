'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// sell post
var RideShareSchema = Schema( {
  StartCity: String,
  StartState: String, //title
  StartZip: String,



} );

module.exports = mongoose.model( 'RideShare', RideShareSchema );
