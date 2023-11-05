const express = require("express");

const router  = express.Router();

const {login,insertData,getData,insertSubjects,getSubjects,insertSems,getSems} = require("../../controllers/login");
getSubjects
router.post("/insert",insertData);

router.get("/getData",getData);

router.post("/insertSubject",insertSubjects);

router.get("/getSubjects",getSubjects);


router.post("/insertSems",insertSems);

router.get("/getSems",getSems);




module.exports = router;