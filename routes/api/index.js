const router = require("express").Router();
const db = require("../../models");
//matches with /api/save-link
router.route("/save-link").post((req, res) => {
  db.Fave.create({
    UID: req.body.uid,
    faveVids: [req.body.id],
    title: req.body.snippet.title,
    details: req.body.snippet.description,
    vidDate: req.body.snippet.publishedAt,
    youtuber: req.body.snippet.channelTitle,
  })
    .then((result) => {
      console.log(result);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.route("/save-link").delete((req, res) => {
  console.log("query " + req.query);

  db.Fave.deleteOne(
    { UID: req.body.userID, _id: req.body.favID },
    { justOne: false }
  )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});
router.route("/removedfavs").delete((req, res) => {
  console.log("query " + req.query);

  db.Fave.remove({ UID: req.query.userID, _id: req.query.favID })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.route("/savedfavs").get((req, res) => {
  console.log("query " + req.query);

  db.Fave.find({ UID: req.query.userID })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.route("/projects").post((req, res) => {
  console.log(req.body);
  db.Project.create({
    UID: req.body.uid,
    vidID: req.body.favID,
  })
    .then((result) => {
      console.log(result);
      res.end();
    })
    .catch(({ message }) => {
      console.log(message);
      res.end();
    });
});

router.route("/projectvid").get((req, res) => {
  db.Fave.find()
    .limit(1)
    .then((result) => {
      console.log(res);
      res.json(result)
    })
    .catch((err) => console.log(err));
});

module.exports = router;
