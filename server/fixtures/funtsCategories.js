/**
 * Created by vz on 16.10.15.
 */

if (FuntsCategories.find({}).count() === 0) {
    FuntsCategories.insert({categoryId: FUN, name: funtsCategoryObj.FUN, description: 'Веселье'});
    FuntsCategories.insert({categoryId: CREATIVE, name: funtsCategoryObj.CREATIVE, description: 'Творчество'});
}