const request = require("jest");
const app = require('./routes/User');
const mongoose = require('mongoose');

/*describe("Test the root path", () => {*/
    test.todo("It should response GET method"), () => {
        const response = request(app).post("http://localhost:3000/User/add").json({
            "Name": "Ahmad",
            "Email":"ahmad@gmail.com",
            "Age:": 12,
            "Contact": 3084500428
        })
        expect(response.statusCode).toBe(200);
    }
