const {Router}                          =   require('express');


const mongoose                          =   require('mongoose');
const DevController                     =   require('./controllers/DevController');
const SearchController                  =   require('./controllers/SearchController');
const {userName, password, DataBase}    =   require('../ENV')


mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0-onxrz.mongodb.net/${DataBase}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


routes = new Router()


routes.get('/devs',DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs', DevController.update);

routes.get('/search', SearchController.index)


module.exports = routes