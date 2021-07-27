const express = require('express');
const { MongoClient } = require('mongodb');
const mongdb = require('mongodb');

// TOOD: remove from code;
const MONGO_PASSWD = 'MONGO_PASSWD';

const uri = `mongodb+srv://bulmerone:${MONGO_PASSWD}@js-cluster-dev.itpau.mongodb.net/locations?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const router = express.Router();

const locationStorage = {
	location: [],
};

router.post('/add-location', (req, res, next) => {
	// const id = Math.random();
	client.connect(
    function (err, client) {
      const db = client.db("locations");

      db.collection("user-locations").insertOne(
        {
          address: req.body.address,
          coords: { lat: req.body.lat, lng: req.body.lng },
        },
        function (err, r) {
          if (err) {
            throw new Error("Could not store data on MongoDB!");
          }
          console.log(r);
          res.json({ message: "Stored Location!", locId: r.insertedId });
        }
			);
    }
  );
	// locationStorage.location.push({
	// 	id: id, 
	// 	address: req.body.address,
	// 	coords: {lat: req.body.lat, lng: req.body.lng}
	// });
	// res.json({message: 'Stored Location!', locId: id});

});

router.get('/location/:lid', (req, res, next) => {
	let locationId = req.params.lid;
	client.connect(
    function (err, client) {
			const db = client.db("locations");
			
			let locId;
			try {
				locId = new mongdb.ObjectId(locationId);
			} catch (error) {
          return res.status(404).json({ message: "Not found!" });
			}

      db.collection("user-locations").findOne(
        { _id: locId},
        function (err, doc) {
          console.log("bulmer:", doc);
          if (err) {
            throw new Error("Could not get data on MongoDB!");
          }
          if (!doc) {
            return res.status(404).json({ message: "Not found!" });
          }
          res.json({ address: doc.address, coordinates: doc.coords });
        }
      );
    }
  );
	// const location = locationStorage.location.find(loc => {
	// 	return loc.id === locationId;
	// });
	
});

module.exports = router;