const Application = require('../models/application');
exports.applicationPage = (req,res)=>{
    res.render('application');
}
exports.application = async (req,res)=>{
    const application = new Application(req.body);
    application.user = req.user._id;
    await application.save();
    res.redirect('/applications');
}


exports.getApplications = async (req,res)=>{
    try {
    const applications = await Application.find().populate('user')
        res.render('applications',{applications})
} catch (error) {
        
    }
    
}