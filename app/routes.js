//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/index', function (req, res) {
  goToNextPage(req, res)
})

router.post('/name', function (req, res) {
  goToNextPage(req, res)
})

router.post('/address', function (req, res) {
  goToNextPage(req, res)
})

router.post("/acceptAndSend", function (req, res) {
  res.redirect("/confirmation")
})

router.post("/restart", function (req, res) {
  req.session.data = []
  res.redirect("/")
})

function goToNextPage(req, res) {
  var currentPage = req.url
  if(req.session.data["checking-answers"]) {
    res.redirect("/checkyouranswers")
  } else if(currentPage == "/index") {
    res.redirect("/name")
  } else if(currentPage == "/name") {
    res.redirect("/address")
  } else if(currentPage == "/address") {
    req.session.data["checking-answers"] = true
    res.redirect("/checkyouranswers")
  }
}
