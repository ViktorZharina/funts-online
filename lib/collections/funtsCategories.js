/**
 * Created by vz on 16.10.15.
 */

FuntsCategories = new Mongo.Collection("funtsCategories");
var Schemas = {};

Schemas.FuntsCategories = new SimpleSchema({
    name: {
        type: String,
        label: "Категория",
        max: 100
    },
    description: {
        type: String,
        label: "Описание",
        max: 4000,
        optional: true
    }
});

FuntsCategories.attachSchema(Schemas.FuntsCategories);

if (Meteor.isServer) {
    Meteor.publish('funtsCategories', function() {
        return FuntsCategories.find({});
    });
}

if (Meteor.isClient) {
  Meteor.subscribe('funtsCategories');
}