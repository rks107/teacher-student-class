const Student = require('../../../models/student');
const jwt = require('jsonwebtoken');


module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.status(400).json({
            mesg: 'Password & Confirm Password not Matches!'
        })
    }
    Student.findOne({email: req.body.email},function(err, student){
        if(err){
            return res.status(400).json({
              mesg: "Error in finding user in Creating user!",
            });
        }
        if (student) {
          return res.status(400).json({
            mesg: "Email Already Exits!",
          });
        }

        Student.create(req.body, function(err, student){
            if(err){
                return res.status(500).json({
                  mesg: "Internal Server Error in creating new user!",
                });
            }

            return res.status(200).json({
              mesg: "user created!",
              student
            });
        })


    })

}

module.exports.createSession = async function (req, res) {
  try{
    let student = await Student.findOne({ email: req.body.email });

    if(!student || student.password != req.body.password){
      return res.status(422).json({
        mesg: "Invalid username or password",
      });
    }

    return res.status(200).json({
      mesg: "Sign in successful, Here's your token please keep it save",
      data: {
        token: jwt.sign(student.toJSON(), "teacher-student-class", {expiresIn:'100000'})
      } 
    });

  }catch(err){
    console.log("##########", errr);

    return res.status(500).json({
      mesg: 'Internal Server Error!'
    })
  }
};