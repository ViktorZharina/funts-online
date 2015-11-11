/**
 * Created by vz on 16.10.15.
 */

getRandomNumberFromRange = function (range) {
    return Math.floor(Math.random() * range);
};

Template.registerHelper('categoryOptions', function () {
    return {
      'FUN': 'Веселье',
      'CREATIVE': 'Творчество'
    };
});