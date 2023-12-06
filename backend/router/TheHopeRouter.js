const express = require("express");
const hopeRouter = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const hope=require("../model/thehopeSchema")





hopeRouter.get("/view-book", async (req, res) => {
    try {
      const products = await hope.find();
      return res.status(201).json({
        success: true,
        error: false,
        data: products,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Data can't be viewed",
      });
    }
})


hopeRouter.post("/add-books",async(req,res)=>{
    try {
        const Data = {   
            title: req.body.title,
            author: req.body.author,
            about: req.body.about,
            price: req.body.price,    
          image: req.file ? req.file.path : null,
        };
        const result = await hope(Data).save();
        if (result) {
          return res.status(201).json({
            success: true,
            error: false,
            data: Data,
          })
        } else {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Data not Added",
          });
        }
      } catch (error) {
        return res.status(501).json({
          success: false,
          error: true,
          message: "Data not Added",
          errorMessage: error.message,
        });
      }
})

hopeRouter.delete("/delete-book/:id", (req, res) => {
    hope
      .deleteOne({
        _id: req.params.id,
      })
      .then((data) => {
        res.send({ data });
        console.log("deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  hopeRouter.put(
    "/update-book/:id",
    upload.single("image"),
    (req, res) => {
    hope
        .findOne({
          _id: req.params.id,
        })
        .then((data) => {
          (data.title = req.body.title),
            (data.author= req.body.author),
            (data.about = req.body.about),
            (data.price = req.body.price),
          // data.image = req.file.filename;
          data.image = req.file ? req.file.path : null;
  
          data
            .save()
            .then((data) => {
              return res.status(201).json({
                success: true,
                error: false,
                data: data,
              });
            })
            .catch((error) => {
              return res.status(400).json({
                success: false,
                error: true,
                message: "Data not updated",
              });
            });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Data not updated ,error of id",
          });
        });
    }
  );


module.exports=hopeRouter