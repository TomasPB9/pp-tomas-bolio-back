'use strict'

const mongoose=require('mongoose');
const People= require('../src/models/people');
const service=require('../services');

function signUp(req,res){
  const people=new People({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    password:req.body.password,
    gender:req.body.gender,
    hobbie:req.body.hobbie
  })

  people.save((err)=>{
    if(err) res.status(500).send({message:`Error al crear el usuario ${err}`});

    return res.status(200).send({token:service.createToken(people)});
  })
}

function signIn(req,res){
  People.find({email:req.body.email}, (err,people)=>{
    if(err) return res.status(500).send({message:err})
    if(!people) return res.status(404).send({message:`No existe el usuario`})

    req.people=people
    res.status(200).send({
      message:'Te has logueado correctamente',
      token: service.createToken(people)
    })
  })
}

module.exports={
  signIn,
  signUp
}