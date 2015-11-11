/**
 * Created by vz on 16.10.15.
 */

if (FuntsCategories.find({}).count() === 0) {
    FuntsCategories.insert({name: 'FUN', description: 'Веселье'});
    FuntsCategories.insert({name: 'CREATIVE', description: 'Творчество'});
}