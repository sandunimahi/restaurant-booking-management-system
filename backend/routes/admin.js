const express=require('express');
const router=express.Router();
const User=require('../models/user');
const Customer=require('../models/customer');
const Owner=require('../models/owner');
const Manager=require('../models/manager');
const MealOrder=require('../models/mealOrder');
const TableReservation=require('../models/tableReservation');
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
          description:req.body.description,
          managerID:null,
          opening:null,
          closing:null,
          tables:[],
          meals:[],
          promotions:[],
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
        ownerID:req.body.userID,
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
        Owner.updateOne({'userID':Number(req.body.userID)},{$set:{'restaurant.managerID':addedeUser.id}}).then(response => {
          console.log(response);
        });
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

//Getting manager details - Update Manager - Admin
router.get("/api/manager/getManagerDetails/:id",(req,res,next) => {
  Manager.find({'ownerID':req.params.id}).then(response=>{
    res.status(200).json({
      manager:response
    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Getting manager details - Update Manager -  Manager
router.get("/api/manager/getManagerDetailsByManager/:id",(req,res,next) => {
  Manager.find({'userID':req.params.id}).then(response=>{
    res.status(200).json({
      manager:response
    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Updating Manager - By admin
router.post("/api/manager/updateManager",(req,res,next) => {
  Manager.updateOne({'userID':Number(req.body.userID)},{$set:{'name.firstname':req.body.firstname,'name.lastname':req.body.lastname,'address':req.body.address,'contactNumber':req.body.contactNumber,'email':req.body.email}}).then(response => {
    res.status(200).json({
    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Updating Manager - By manager
router.post("/api/manager/updateManagerByManager",(req,res,next) => {
  Manager.updateOne({'userID':Number(req.body.userID)},{$set:{'name.firstname':req.body.firstname,'name.lastname':req.body.lastname,'address':req.body.address,'contactNumber':req.body.contactNumber,'email':req.body.email}}).then(response => {
    console.log(response);
    User.updateOne({'id':Number(req.body.userID)},{$set:{'password':req.body.password}}).then(response1 =>{
      console.log(response1);
      res.status(200).json({

      });
    }).catch(err => {
      console.log("Error: "+err);
    })
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Getting admin information
router.get("/api/admin/getInfo/:id",(req,res,next) => {
  console.log(req.params.id)
  User.findOne({'id':Number(req.params.id)}).then(response=>{
    res.status(200).json({
      owner:response
    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Deleting manager
router.post("/api/manager/delete",(req,res,next) => {
  console.log(req.body)
  Manager.deleteOne({'userID':req.body.managerID}).then(response=>{
    console.log(response);
    Owner.updateOne({'userID':Number(req.body.userID)},{$set:{'restaurant.managerID':null}}).then(response1 => {
      console.log(response1);
      User.deleteOne({'id':req.body.managerID}).then(response2=>{});
      res.status(200).json({
      });
    }).catch(err => {
      console.log("Error: "+err);
    })
  }).catch(err => {
    console.log("Error: "+err);
  })
});
//Adding Tables - Admin
router.post("/api/table/addTables",(req,res,next) => {
  Owner.updateOne({'userID':Number(req.body.userID)},{$set:{'restaurant.tables':req.body.tables}}).then(response =>{
    res.status(200).json({

    });
  }).catch(err => {
    console.log("Error: "+err);
  })
})

router.get("/api/admin/getDetails/:id",(req,res,next) => {
  Owner.findOne({'userID':req.params.id}).then(response =>{
    console.log(response);
    res.status(200).json({
      owner:response
    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

router.post("/api/admin/updateProfile",(req,res,next) => {
  Owner.updateOne({'userID':Number(req.body.userID)},{$set:{'name.firstname':req.body.firstname,'name.lastname':req.body.lastname,'address':req.body.address,'contactNumber':req.body.contactNumber,'email':req.body.email}}).then(response =>{
    console.log(response);
    User.updateOne({'id':Number(req.body.userID)},{$set:{'password':req.body.password}}).then(response1 =>{
      console.log(response1);
      res.status(200).json({

      });
    }).catch(err => {
      console.log("Error: "+err);
    })

  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Adding Menu - manager
router.post("/api/menu/addMenu",(req,res,next) => {
  console.log(req.body);
  Owner.updateOne({'userID':Number(req.body.userID)},{$set:{'restaurant.meals':req.body.meal}}).then(response =>{
    console.log(response);
    res.status(200).json({

    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Addong Promotions- manager
router.post("/api/promotions/addPromotions",(req,res,next) => {
  Owner.updateOne({'userID':Number(req.body.userID)},{$set:{'restaurant.promotions':req.body.promotions}}).then(response =>{
    res.status(200).json({

    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Adding promotion- Admin
router.post("/api/promotions/add/Promotions",(req,res,next)=> {
  Owner.updateOne({'userID':Number(req.body.userID)},{$set:{'restaurant.promotions':req.body.promotions}}).then(response =>{
    console.log(response);
    res.status(200).json({

    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//getting restaurant infornation
router.get("/api/manager/getRestaurantDetails/:id",(req,res,next)=> {
  console.log("This is getting restaurant information")
  console.log(req.params.id)
  Owner.findOne({'userID':req.params.id}).then(response =>{
    res.status(200).json({
      owner:response
    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Updating restaurant - Admin
router.post("/api/manager/updateRestaurant",(req,res,next)=> {
  Owner.updateOne({'userID':Number(req.body.userID)},{$set:{'restaurant.name':req.body.name,'restaurant.contactNumber':req.body.contactNumber,'restaurant.city':req.body.city,'restaurant.description':req.body.description,'restaurant.opening':req.body.opening,'restaurant.closing':req.body.closing}}).then(response =>{
    console.log(response);
    res.status(200).json({
    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Ordering Meal
router.post("/api/manager/orderMeals",(req,res,next)=> {
  console.log(req.body);
  console.log("This is ordering meals by Manager");
  const mealOrder=new MealOrder({
    ownerID:req.body.ownerID,
    meal:{
    name:req.body.meal.name,
    mealType:req.body.meal.description,
    price:req.body.meal.price
    },
    quantity:req.body.quantity,
    bookedBy:{
      role:req.body.bookedBy.role,
      id:req.body.bookedBy.id
    },
    orderDate:req.body.orderDate,
    orderTime:req.body.orderTime,
    orderType:req.body.orderType,
    additionalDetails:req.body.additionalDetails,
  });
  mealOrder.save().then(response =>{
    console.log(response);
    res.status(200).json({
    });

  }).catch(err => {
    console.log("Error: "+err);
  })
});

router.post("/api/customer/tableReservation",(req,res,next)=> {
  console.log("This is table reservation by Customer");
  console.log(req.body);
  const tableReservation=new TableReservation({
    ownerID:req.body.ownerID,
    table:{
      tableNo:req.body.table.name,
      tableType:req.body.table.tableType,
      description:req.body.table.description,
      location:req.body.table.location,
      seats:req.body.table.seats
    },

    bookedBy:{
      role:req.body.bookedBy.role,
      id:req.body.bookedBy.id
    },
    reservationDate:req.body.reservationDate,
    reservationTime:req.body.reservationTime,

  });
  tableReservation.save().then(response =>{
    console.log(response);
    res.status(200).json({
    });

  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Get UserID by managerID
router.get("/api/orders/getRestaurantUserId/:id",(req,res,next) => {
  Manager.findOne({'userID':req.params.id}).then(response => {
    console.log(response.ownerID);
    res.status(200).json({
      ownerID:response.ownerID
    });

  });
});
//Ordering Meal - Customer
router.post("/api/customer/orderMeals",(req,res,next)=> {
  console.log(req.body);
  console.log("This is ordering meals by Customer");
  const mealOrder=new MealOrder({
    ownerID:req.body.ownerID,
    meal:{
    name:req.body.meal.name,
    mealType:req.body.meal.mealType,
    price:req.body.meal.price
    },
    quantity:req.body.quantity,
    bookedBy:{
      role:req.body.bookedBy.role,
      id:req.body.bookedBy.id
    },
    orderDate:req.body.orderDate,
    orderTime:req.body.orderTime,
    orderType:req.body.orderType,
    additionalDetails:req.body.additionalDetails,
  });
  mealOrder.save().then(response =>{
    console.log(response);
    res.status(200).json({
    });

  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Viewing Ordred meals
router.get("/api/manager/getOrderedMeals/:id",(req,res,next)=> {
  console.log("This is viewing ordered meals");
  MealOrder.find({'ownerID':req.params.id}).then( response =>{
    console.log(response);
    res.status(200).json({
      orders:response
    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Getting customer details - Update Customer -  Customer
router.get("/api/customer/getCustomerDetailsByCustomer/:id",(req,res,next) => {
  Customer.find({'userID':req.params.id}).then(response=>{
    res.status(200).json({
      customer:response
    });
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Updating Customer - By Customer
router.post("/api/customer/updateCustomerByCustomer",(req,res,next) => {
  Customer.updateOne({'userID':Number(req.body.userID)},{$set:{'name.firstname':req.body.firstname,'name.lastname':req.body.lastname,'address':req.body.address,'contactNumber':req.body.contactNumber,'email':req.body.email,'city':req.body.city}}).then(response => {
    console.log(response);
    User.updateOne({'id':Number(req.body.userID)},{$set:{'password':req.body.password}}).then(response1 =>{
      console.log(response1);
      res.status(200).json({

      });
    }).catch(err => {
      console.log("Error: "+err);
    })
  }).catch(err => {
    console.log("Error: "+err);
  })
});

//Getting details of all restaurants
router.get("/api/restaurant/getAllDetails",(req,res,next) => {
  Owner.find().then(response=>{
    //console.log(response[0]);
    let data=response;
    let restaurants=[];
    data.forEach(restaurant =>{
     // restaurant.restaurant.userID=restaurant.userID;
      //console.log(restaurant.restaurant);
      restaurants.push(restaurant.restaurant);
    });
    //console.log(restaurants);
    res.status(200).json({
      restaurants:restaurants
    });

  }).catch(err => {
    console.log("Error: "+err);
  });

});

//Getting details of all promotions
router.get("/api/promotions/getAllDetails",(req,res,next) => {
  Owner.find().then(response=>{
    //console.log(response[0]);
    let data=response;
    let Promotions=[];
    data.map(restaurant =>{
      // console.log(restaurant.restaurant.promotions);
      let p=restaurant.restaurant.promotions;
     // console.log(p);
      p.map(promotion => {
        Promotions.push({
          resID:restaurant.userID,
          restaurantName:restaurant.restaurant.name,
          restaurantDescription:restaurant.restaurant.description,
          city:restaurant.restaurant.city,
          promotionDescription:promotion.description,
          promotionCode:promotion.code
        });
      });
    })
    //console.log(Promotions);
    res.status(200).json({
       promotions:Promotions
    });

  }).catch(err => {
    console.log("Error: "+err);
  });

});
//This is getting meal orders  -By Customer
router.get("/api/meals/getUpcomingMealOrders/:id",(req,res,next) => {
  console.log("This is getting meal orders");
  // MealOrder.find({'bookedBy.role':'Customer','bookedBy.id':req.params.id}).then(response => {
  //   console.log(response);
  //   res.status(200).json({
  //     mealOrders:response
  //  });
  // })
  console.log(req.params.id);
  MealOrder.aggregate([
    { $match: { 'bookedBy.role':'Customer' } },
    { $match: { 'bookedBy.id':Number(req.params.id) } },
    {
      $lookup:
         {
           from: "owners",
           localField: "ownerID",
           foreignField: "userID",
           as: "restaurant"
         }
    }
  ]).then(response =>{
    console.log(response);
      res.status(200).json({
        mealOrders:response
     });
  });
});

router.get("/api/tables/getUpcomingTableReservations/:id",(req,res,next) => {
  TableReservation.aggregate([
    { $match: { 'bookedBy.role':'Customer' } },
    { $match: { 'bookedBy.id':Number(req.params.id) } },
    {
      $lookup:
         {
           from: "owners",
           localField: "ownerID",
           foreignField: "userID",
           as: "restaurant"
         }
    }
  ]).then(response =>{
    console.log(response);
      res.status(200).json({
        tableReservations:response
     });
  });

});
 module.exports=router;

