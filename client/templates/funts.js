Template.funts.helpers({
    funt: function () {
        var n = Math.floor(Math.random() * Funts.find().count());
        var funt = Session.get('funt');
        if (!_.isEmpty(funt)) {
            return funt;
        }
        return Funts.findOne({}, {skip: n });
    }
  });

Template.funts.events({
    'click #turnFront': function () {
        $('#card').toggleClass('flip');
        var categories = $('input[name="category"]:checked').map(function() {
            return parseInt(this.value, 10);
        }).get();

        console.log(categories);
        if (!_.isEmpty(categories)) {
            var funts = Funts.find({category: {$in: categories}}).fetch();
            return Session.set('funt', funts[getRandomNumberFromRange(funts.length)]);
        } else {
            var n = Math.floor(Math.random() * Funts.find().count());
            var funt = Funts.findOne({}, {
                skip: n
            });
            Session.set('funt', funt);
        }
    },
    'click #turnBack': function () {
        $('#card').toggleClass('flip');
    }
});