const express=require('express');
const router=express.Router();
const User=require('../models/user');
const Customer=require('../models/customer');
const Owner=require('../models/owner');
const Manager=require('../models/manager');
const jwt=require('jsonwebtoken');


//Adding New Customer
router.post("/api/customer/createCustomer",(req,res,next) => {
    console.log("This is creating new customer as a user");
    console.log(req.body)
    const user=new User({
      username:req.body.username,
      password:req.body.password,
      role:"Customer"
    });
    user.save().then(addedeUser =>{
      console.log(addedeUser.id);
      const customer=new Customer({
        userID: addedeUser.id,
        name:{
        firstname:req.body.firstname,
        lastname:req.body.lastname
        },
        gender:req.body.gender,
        address:req.body.address,
        dob:req.body.dob,
        city:req.body.city,
        nic:req.body.nic,
        contactNumber:req.body.contactNumber,
        email:req.body.email,
        blacklistStatus:null
      });
      customer.save().then(addedCustomer => {
        console.log(addedCustomer)
        res.status(201).json({
          userAdded:true
        });
      }).catch(err => {
        console.log("Error - Customer Cannot Added "+err)
        res.status(200).json({
          userAdded:false
        })
      })

    }).catch(err => {
      console.log("Error - User Cannot Added "+err)
      res.status(200).json({
        userAdded:false
      })
    })
});

// Adding new Owner
router.post("/api/owner/createOwner",(req,res,next) => {
  console.log("This is creating new owner as a user");
    console.log(req.body)
    const user=new User({
      username:req.body.username,
      password:req.body.password,
      role:"Owner"
    });
    user.save().then(addedeUser =>{
      console.log(addedeUser.id);
      const owner=new Owner({
        userID: addedeUser.id,
        name:{
        firstname:req.body.firstname,
        lastname:req.body.lastname
        },
        gender:req.body.gender,
        address:req.body.address,
        dob:req.body.dob,
        city:req.body.city,
        nic:req.body.nic,
        contactNumber:req.body.contactNumber,
        email:req.body.email,
        restaurant:{
          name:req.body.restaurantName,
          contactNumber:req.body.restaurantcontactNumber,
          city:req.body.restaurantCity,
          description:req.body.description
        }
      });
      owner.save().then(addedOwner => {
        console.log(addedOwner)
        res.status(201).json({
          userAdded:true
        });
      }).catch(err => {
        console.log("Error - Owner Cannot Added "+err)
        res.status(200).json({
          userAdded:false
        })
      })

    }).catch(err => {
      console.log("Error - User Cannot Added "+err)
      res.status(200).json({
        userAdded:false
      })
    })
});

// Adding new Manager
router.post("/api/manager/createManager",(req,res,next) => {
  console.log("This is adding a Manager as a user");
    console.log(req.body)
    const user=new User({
      username:req.body.username,
      password:req.body.password,
      role:"Manager"
    });
    user.save().then(addedeUser =>{
      console.log(addedeUser.id);
      const manager=new Manager({
        userID: addedeUser.id,
        name:{
        firstname:req.body.firstname,
        lastname:req.body.lastname
        },
        gender:req.body.gender,
        address:req.body.address,
        dob:req.body.dob,
        city:req.body.city,
        nic:req.body.nic,
        contactNumber:req.body.contactNumber,
        email:req.body.email,
      });
      manager.save().then(addedOwner => {
        console.log(addedOwner)
        res.status(201).json({
          userAdded:true
        });
      }).catch(err => {
        console.log("Error - Owner Cannot Added "+err)
        res.status(200).json({
          userAdded:false
        })
      })

    }).catch(err => {
      console.log("Error - User Cannot Added "+err)
      res.status(200).json({
        userAdded:false
      })
    })
});

//Login User
router.post("/api/user/login",(req,res,next) => {
  console.log("This is login route")
  console.log(req.body);

    let fetchedUser;
    User.findOne({username:req.body.username,role:req.body.role})
     .then(user=>{
      if(!user)
      {
         console.log("User not found");
          return res.status(401).json({
          message: "Authentication Failed"
        });
      }
      fetchedUser=user;
      if(user.password==req.body.password)
      {
        const token=jwt.sign({username: user.username,role:user.role,userId:user._id},"This is the secret text");
        console.log("Password Matches");
        console.log(user);
        res.status(200).json({
          token:token,
          username: user.username,
          role:user.role,
          userID:user.id
        });
      }
      else
      {
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
     })
     .catch(err => {

    })


    res.status(200);
});


module.exports=router;
