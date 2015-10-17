/**
 * Created by Viktor Zharina on 11.10.15.
 */


Funts = new Mongo.Collection("funts");
var Schemas = {};

Schemas.Funt = new SimpleSchema({
    funt: {
        type: String,
        label: "Фант",
        max: 4000
    },
    author: {
        type: String,
        label: "Автор",
        max: 400
    },
    category: {
        type: Number,
        label: "Категория",
        optional: true
    }
});

Funts.attachSchema(Schemas.Funt);
