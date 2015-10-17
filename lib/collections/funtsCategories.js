/**
 * Created by vz on 16.10.15.
 */

FUN = 1;
CREATIVE = 2; // творчество

funtsCategoryObj = {
    FUN: 'Веселье',
    CREATIVE: 'Творчество'
};

FuntsCategories = new Mongo.Collection("funtsCategories");
var Schemas = {};

Schemas.FuntsCategories = new SimpleSchema({
    categoryId: {
        type: Number
    },
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