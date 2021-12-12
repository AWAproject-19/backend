const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const login = require('../models/customerLogin_model');

router.post('/', 
  function(request, response) {
    if(request.body.Username && request.body.Password){
      const Username = request.body.Username;
      const Password = request.body.Password;
        login.CheckLogin(Username, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError);
          } 
          else { 
              if (dbResult.length > 0) {
                bcrypt.compare(Password, dbResult[0].Password, function (err, compareResult) {
                  if (compareResult) {
                    console.log("Success");
                    response.json(dbResult[0].CustomerID);
                    //response.send(true);
                  }
                  else {
                    console.log("Wrong password");
                    response.send(false);
                  }
                  response.end();
                }
                ); 
              
              }
              else {
                console.log("User doesn't exist.");
                response.send(false);
              }
          }
        }
        );
      }
    else{
      console.log("Enter required information.");
      response.send(false);
    }
  }
);

module.exports=router;