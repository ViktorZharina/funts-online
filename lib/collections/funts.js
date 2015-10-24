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
        type: String,
        label: "Категория",
        optional: true,
        allowedValues: ['FUN', 'CREATIVE']
    },
    approved: {
        type: Number,
        label: "Одобрен",
        optional: true,
        defaultValue: 0,
        allowedValues: [0, 1]
    }
});

Funts.attachSchema(Schemas.Funt);
