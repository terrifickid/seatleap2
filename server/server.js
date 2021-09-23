//reqs
const crypt = require('./lib/encryption.js');
//DB
const { MongoClient } = require("mongodb");
const uri = 'mongodb+srv://admin:nTvYoboDuIHItxbw@cluster0.owryg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri);
//express
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;



async function run() {
  try {
    await client.connect();
    app.get('/encrypt', (req, res) => {
      var data = {"phone_number": "555-555-5555", "last_name": "Smith", "postal_code": "53005", "email_address": "bob.smith@test.com", "city": "Brookfield", "first_name": "Bob", "country": "US", "created_at": "2019", "address_line_2": "Suite 300", "region": "WI", "address_line_1": "300 N Executive Dr", "event_id": 3, "quantity": 4, "campaign_id": 2};
      const hash = crypt.encryptAndEncode(JSON.stringify(data));
      res.send(encodeURIComponent(JSON.stringify(hash)));
    })

    app.get('/verify/:code', (req, res) => {
      const text = crypt.decodeAndDecrypt(JSON.parse(req.params.code));
      var result = {
        user: JSON.parse(text),
        event: {
          "success": true,
          "event": {
            "id": 0,
            "name": "string",
            "local_date": "2021-09-23T20:06:10.834Z",
            "utc_date": "2021-09-23T20:06:10.834Z",
            "is_date_tbd": false,
            "is_time_tbd": false,
            "is_expired": false,
            "is_ga": false,
            "is_lmlp": false,
            "tbd": false,
            "olson_timezone": "string",
            "taxonomy": {
              "segment": "string",
              "genre": "string",
              "sub_genre": "string"
            },
            "auto_confirmable": true,
            "performers": [
              {
                "id": 0,
                "name": "string",
                "slug": "string",
                "is_home": true,
                "is_primary": true
              }
            ],
            "price": {
              "currency": "string",
              "min": 0,
              "max": 0
            },
            "updated_at": "2021-09-23T20:06:10.834Z",
            "venue": {
              "id": 0,
              "name": "string",
              "city_name": "string",
              "subdivision": "string",
              "country_iso_code": "string",
              "country_name": "string",
              "latitude": 0,
              "longitude": 0,
              "map_url": "string",
              "static_map": "string",
              "map": {
                "layout_id": 0,
                "source": "string"
              }
            },
            "image": "@/assets/default-stadium-image.jpg",
            "url": "string"
          }
        },
        tickets: {
  "success": true,
  "tickets": [
    {
      "id": 0,
      "event_id": 0,
      "notes": "string",
      "currency": "string",
      "price_per": 0,
      "quantities": [
        0
      ],
      "quantity": 0,
      "eticket": true,
      "is_ga": true,
      "stock_type": {
        "key": "string",
        "value": "string"
      },
      "delivery_method": "string",
      "reseller_license_id": "string",
      "all_in_price": {
        "price_per": 0,
        "quantity": 0,
        "total": 0
      },
      "seating": {
        "section": "string",
        "section_id": 0,
        "row": "string",
        "view": "string",
        "panoramic_view": "string",
        "zone": "string",
        "zone_id": 0
      }
    }
  ],
  "sections": [
    {
      "available_quantity": 0,
      "min_ticket_price": 0,
      "min_ticket_loyalty_price": 0,
      "name": "string",
      "id": 0,
      "panoramic_view": "string",
      "view": "string",
      "rows": [
        "string"
      ],
      "zone": "string",
      "zone_id": 0
    }
  ]
}

      }

      res.send(result);
    })

    app.listen(port, () => {
      console.log(`SeatLeap app listening at http://localhost:${port}`)
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
