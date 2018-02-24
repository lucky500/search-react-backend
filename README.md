# Simple Node/Mongo API backend

## Description

_A simple node backend API using Node, Express, MongoDB, Mongoose, and Node Restful_

## Installation and Setup

To install on your own machine, follow the instructions below:

* Clone this repository.
* To Initialize this project run the following commands
* Run the following commands in the project root directory:
  ```
  npm install
  npm start
  ```
* Open ```localhost:3035/api/products``` in your web browser to view site

### Checking API Endpoints

You can check endpoints and use the API with Postman.
download Postman at https://www.getpostman.com/ to check the routes.

start with http://localhost:3000 and peg the routes to the end of the URL.

|  Request  | Endpoint Example | Data Returned |
| ------------- | ------------- | ------------- |
| GET  | /api/products  | List of all products |
| GET  | /api/products/[id] | Details about particular product |
| GET | /api/products?&title__regex=/VR/ | Returns a particular product |
| POST | /api/products | Create a new product ~ Make sure to enter Image and title since they are required |
| PUT | /api/products/[id] | Update a product |
| DELETE | /api/products/:id| Delete product with a particular ID



## Support and contact details

_Please contact [luciano101@msn.com](mailto:luciano101@msn.com) with questions, comments, or issues._


### License

Copyright (c) 2017 **Luciano Oliveira**

*This software is licensed under the MIT license.*