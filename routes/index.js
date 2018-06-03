const router = require("express").Router({ mergeParams: true });
const authControllers = require("../controllers/authControllers");
const applicationControllers = require("../controllers/applicationControllers");

router.get("/", authControllers.home);

//Register Process 
router
  .route("/register")
  .get(authControllers.registerForm)
  .post(authControllers.registerUser, authControllers.login);

   //Login Process
router
  .route("/login")
  .get(authControllers.loginForm)
  .post(authControllers.login);

  
router.get("/logout", authControllers.logout);

//Review Process
router.get('/applications/review', (req, res) => {
  res.render('review');
});

router
  .route("/application")
  .get(authControllers.isLoggedIn, applicationControllers.applicationPage)
  .post(authControllers.isLoggedIn,applicationControllers.application);

router.get('/applications',applicationControllers.getApplications)
module.exports = router;