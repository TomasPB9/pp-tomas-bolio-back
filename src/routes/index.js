const express=require('express');
const router=express.Router();
const auth=require('../../middlewares/auth');
const People=require('../models/people');
const peopleCtrl=require('../../controllers/user');
const people = require('../models/people');

router.get('/add',  (req, res) => {
  res.render('addUser');
});

 router.get('/deleteUser', async (req, res) => {
   const people = await People.find();
   res.render('deleteUser', {
     people
   });
 });

router.get('/deleteUser/:id', async (req, res) => {
  const { id } = req.params;
  await People.remove({ _id: id });
  res.redirect('/');
});

router.get('/consultUser', async (req, res) => {
  const people = await People.find();
  res.render('consultUser', {
    people
  });
});


router.get('/', async (req,res)=>{
  const people=await People.find();
  res.render('index',{
    people
  });
});

router.post('/add', async(req,res)=>{
  const people=new People(req.body);
  await people.save();
  res.render('newUser');
});

router.get('/delete/:id', async (req,res)=>{
  const{id}=req.params;
  await People.remove({_id:id});
  res.redirect('/');
});

router.get('/private', auth, function(req,res){
  res.status(200).send({message:`Tienes acceso`});
});

// router.post('/private', auth, function (req, res) {
//   res.status(200).send({ message: `Tienes acceso` });
// });

router.post('/signUp', peopleCtrl.signUp);
router.post('/signIn', peopleCtrl.signIn);

router.get('/login', (req, res) => {
  res.render('login');
});


module.exports=router;