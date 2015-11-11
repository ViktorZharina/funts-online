Template.funts.helpers({
    funt: function () {
        var n = Math.floor(Math.random() * Funts.find({approved: APPROVED}).count());
        var funt = Session.get('funt');
        if (!_.isEmpty(funt)) {
            return funt;
        }
        return Funts.findOne({approved: APPROVED}, {skip: n});
    }
  });

Template.funts.events({
    'click #turnFront': function () {
        $('#card').toggleClass('flip');
        var categories = $('input[name="category"]:checked').map(function() {
            return this.value;
        }).get();

        console.log(categories);
        if (!_.isEmpty(categories)) {
            var funts = Funts.find({category: {$in: categories}, approved: APPROVED}).fetch();
            if (!_.isEmpty(funts)) {
                return Session.set('funt', funts[getRandomNumberFromRange(funts.length)]);
            }
        } else {
            var n = Math.floor(Math.random() * Funts.find({approved: APPROVED}).count());
            var funt = Funts.findOne({
                approved: APPROVED
            }, {
                skip: n
            });
            if (!_.isEmpty(funt)) {
                return Session.set('funt', funt);
            }
        }
    },
    'click #turnBack': function () {
        $('#card').toggleClass('flip');
    }
});