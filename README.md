# Mardown Blog

## Description

The idea was to create a simple blog application with CRUD functionalities using Node, Express and MongoDB. For this example, I used MongoDB Atlas. The template engine is EJS. There's few other dependencies to handle Markdown (jsdom, marked) or create slug based on post title (slugify) for instance.

The blog features a main page that display all posts fetched from the database. Each post has it's own dedicated page, and can be edited, saved and delete.

## Stack

- [Node.js](https://nodejs.org/) - Node.js® is an open-source, cross-platform JavaScript runtime environment. Download Node.js®
- [Express](http://expressjs.com/) - A fast, unopinionated, minimalist web framework for Node.js that provides a robust set of features for web and mobile applications. Learn how to get started, use the API reference, and explore advanced topics with Express 4.18.1 and Express 5.0 beta.
- [MongoDB Atlas](https://www.mongodb.com/atlas) - A suite of cloud database and data services to help you build with data using the MongoDB document model. You can create, query, analyze, and manage data in any form, across any cloud, with a flexible and intuitive query API, security, and scalability.


## Project structure

```
$PROJECT_ROOT
│   # Environnements variables and database connexion
├── config
│   # MongoDB schema
├── models
│   # Routes file
├── routes
│   # Views folder
└── views
    │   # Articles folder that display the templates and partials
    └── articles
```