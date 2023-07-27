// require the necessary libraries
import {faker} from '@faker-js/faker';
import mongoose from 'mongoose';
import Comment from './comment.js';

async function seedData() {
    // Connection URL
    const uri = "mongodb://127.0.0.1:27017/midTermGigih";
    const seed_count = 4;
    mongoose.set("strictQuery", false);
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to db")
    }).catch((err) => {
        console.log("error", err)
    })

    let timeSeriesData = [];
    // create 5000 fake data
    for (let i = 0; i < seed_count; i++) {
        const videoId = "videoId_from_seeder";
        const username = faker.person.fullName();
        const comment = faker.lorem.words(3);

        timeSeriesData.push({ 
            videoId,
            username,
            comment
        });
    }

    const seedDB = async () => {
        await Comment.insertMany(timeSeriesData)
    }

    seedDB().then(() => {
        mongoose.connection.close()
        console.log("seed success")
    })
}

seedData()
