var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "",
            email: "",
            photo: "",
            friendScore: 100
        };

        for (var i = 0; i < friends.length; i++) {

            var difference = 0;

            for (var j = 0; j < 12; j++) {
                difference += Math.abs(parseInt(req.body.scores[j]) - friends[i].scores[j]);
            }

            if (difference < bestMatch.friendScore) {
                bestMatch.name = friends[i].name;
                bestMatch.email = friends[i].email;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendScore = difference;
            }
        }

        friends.push(req.body);

        res.json(bestMatch);
    });
}