const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const {findConnections, sendMessage} = require('../websocket')
const GitHub     = require('github-api');


module.exports = {

    async store(request, response) {
        const {
            github_username,
            techs,
            latitude,
            longitude
        } = request.body;

        const techs_array = parseStringAsArray(techs)

        let dev = await Dev.findOne({
            github_username
        });



        if (!dev) {

            const api_response = await axios.get(`https://api.github.com/users/${github_username}`);

            const {
                name = login, avatar_url, bio
            } = api_response.data;

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]

            };



            dev = await Dev.create({
                github_username,
                name,
                bio,
                avatar_url,
                techs: techs_array,
                location,
            });

            const sendSocketMessageTo = findConnections({
                latitude,longitude},
                techs_array,
            
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev );




        };

        return response.json(
            dev
        );

    },

    async index(request, response) {
        const devs = await Dev.find()
        return response.json(devs);
    },

    async update(request, response) {
        const {
            github_username,
            password,
            name,
            techs,
            bio,
            latitude,
            longitude
        } = request.body;


        const loginGithub = new GitHub({
            username:github_username,
            password,
         });

         const userGithub = loginGithub.getUser(github_username);
         console.log(userGithub);





        const dev = await Dev.findOne({
            github_username,
        });

        techs_array = parseStringAsArray(techs)

        if (dev) {
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]

            };
            await Dev.updateOne({
                    github_username: github_username
                }, {
                    $set: {
                        name,
                        techs_array,
                        bio,
                        location,
                    }
                },

            );
            return response.json({
                name,
                techs_array,
                bio,
                longitude,
                latitude,
            });
        }




    }


}