const Results=require("../models/resultmodel.js");
const Questions=require("../models/questionmodel.js");
const ques=require("../config/data.js")


/** get all questions */
exports.getQuestions=async(req, res)=>{
    try {
        const q = await Questions.findOne();
        res.json(q);
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questinos */
exports.insertQuestions=async(req, res)=>{
    try {
        await Questions.create({ questions:ques.ques,answers:ques.ans});
        res.json({ msg: "Data Saved Successfully...!"});
        
    } catch (error) {
        res.json({ error })
    }
}

/** Delete all Questions */
exports.dropQuestions=async(req, res)=>{
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
exports.getResult=async(req, res)=>{
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
exports.storeResult=async(req, res)=>{
   try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
        })

   } catch (error) {
        res.json({error})
   }
}

/** delete all result */
exports.dropResult=async(req, res)=>{
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}