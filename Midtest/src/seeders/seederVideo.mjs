// require the necessary libraries
import {faker} from '@faker-js/faker';
import mongoose from 'mongoose';
import Product from './video.js';

async function seedData() {
    // Connection URL
    const uri = "mongodb://127.0.0.1:27017/midTermGigih";
    const seed_count = 10;
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
        let dataProduct = [];
        for (let j = 0; j < 8; j++) {
            const product_name = faker.commerce.productName();
            const price_product = faker.commerce.price({ min: 10000, max: 200000 });
            const thumbnail_product = faker.image.url();
            const link_product = faker.image.url();

            dataProduct.push({
                product_name,
                price_product,
                thumbnail_product,
                link_product
            })
        }
        const video_id = faker.string.uuid();
        const thumbnail = faker.image.url();
        const shop_name = faker.company.name();
        const video_title = faker.commerce.productName();

        timeSeriesData.push({ 
            video_id,
            thumbnail,
            shop_name,
            video_title,
            product: dataProduct
        });
    }

    const seedDB = async () => {
        await Product.insertMany(timeSeriesData)
    }

    seedDB().then(() => {
        mongoose.connection.close()
        console.log("seed success")
    })
}

seedData()