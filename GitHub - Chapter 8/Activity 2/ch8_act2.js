db.createCollection('airports')
db.airports.add({ "iata_code": "ATL", "location": "Atlanta, Georgia","country": "United States", "passengers": 54388000})
db.airports.add({ "iata_code": "LAX", "location": "Los Angeles, California", "country": "United States", "passengers": 43049000})
db.airports.add({ "iata_code": "DBX", "location": "Garhoud, Dubai", "country": "Unided Arab Emiratess", "passengers": 41278000})
db.airports.add({ "iata_code": "PEK", "location": "Chaoyang-Shunyi, Beijing", "country": "China", "passengers": 49242000})
db.airports.add({ "iata_code": "HND", "location": "Ōta, Tokyo", "country": "Japan", "passengers": 41435000})
db.airports.find().sort('passengers DESC')
