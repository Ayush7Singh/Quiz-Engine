const express = require("express");
const router = express.Router();



const { getQuestions,insertQuestions,dropQuestions,getResult,storeResult,dropResult} = require("../controllers/controller.js");
/** import controllers */


/** Questions Routes API */

router.route('/questions')
        .get(getQuestions) /** GET Request */
        .post(insertQuestions) /** POST Request */
        .delete(dropQuestions) /** DELETE Request */

router.route('/result')
        .get(getResult)
        .post(storeResult)
        .delete(dropResult)

module.exports=router;