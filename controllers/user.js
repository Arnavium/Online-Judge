var User = require("../models/user");
var Submission = require("../models/submission");

exports.updateuser = function(user, id){
    return User.findByIdAndUpdate(id, user).exec();
}

exports.addSubmission = async function(submission, user){
    var ans = false;
    const newSubmission = new Submission(submission);
    newSubmission.save();
    user.submissions.push(newSubmission._id);
    console.log(newSubmission.verdict[0]);
    console.log(user.solved[0].equals(newSubmission.question_id))
    if(newSubmission.verdict[0] == 'P'){
        for(var i=0;i<user.solved.length;i++){
            if(user.solved[i].equals(newSubmission.question_id)){
                ans = true;
                break;
            }
        }
    }
    if(!ans)
        user.solved.push(newSubmission.question_id);
    return await user.save();
}