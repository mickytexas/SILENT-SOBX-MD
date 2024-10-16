const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "5z0STCBD#ruuwJtNzG-hHJuINa5Sl22jNx0oJRzQ6xpx2OmTdBFQ",
MONGODB: process.env.MONGODB || "mongodb+srv://suhail:suhail@clustere.tuhzpez.mongodb.net/?retryWrites=true&w=majority",
};
