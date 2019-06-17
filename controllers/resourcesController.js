const Resource = require('../models/resource');
const mongoose = require('mongoose');

exports.index = function( req, res, next ) {
  let locals = {
    title: 'Metas List'
  };
  Metas.find()
  .then( function ( metas ) {
    locals.metas = metas;

    res.render( 'Metas/index', locals )
  })
  .catch( function ( err ) {
    next( err )
  });
};


exports.show = function ( req, res, next ) {
  let locals = {
    title: 'Meta Info'
  }

  Meta.findById({
    _id: req.params.id
  })
  .then( function ( meta ) {
    locals.meta = meta
    res.render( 'metas/show', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
}

exports.new = (req, res) => {
	let locals = {
    title: 'Register Meta'
  };

  res.render( 'metas/new', locals )
};


exports.edit = (req, res) => {
	let locals = {
    title: 'Edit a Meta'
  };

  Product.findById({
    _id: req.params.id
  })
  .then( function ( meta ) {
    locals.meta = meta;

    res.render( 'metas/edit', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};


exports.create = async (req, res) => {
	Meta.create({
    alias: req.body.alias,
    fullname: req.body.fullname,
    affiliation: req.body.affiliation,
    metatype: req.body.metatype
  })
  .then( function () {
    res.redirect( '/metas' )
  })
  .catch( function ( err ) {
    next( err )
  })
};


exports.update = (req, res) => {
	Meta.findById( req.params.id )
  .then(function ( meta ) {
    meta.alias = req.body.alias
    meta.fullname = req.body.fullname
    meta.affiliation = req.body.affiliation
    meta.metatype = req.body.metatype

    meta.save()
    .then(  function () {
      res.redirect( '/metas' )
    })
    .catch( function ( err ) {
      next( err )
    })
  })
  .catch(function ( err ) {
    next( err )
  })
};


exports.destroy = (req, res) => {
	 Meta.remove({
    _id: req.body.id
  })
  .then( function () {
    res.redirect( '/metas' )
  })
  .catch( function ( err ) {
    next( err )
  })
};