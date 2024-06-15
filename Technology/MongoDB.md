---
status: "complete"
creator: 
  - "Dwight Merriman"
  - "Eliot Horowitz"
notetype: "technology"
---

# Overview
MongoDB is an [[open-source]] [[NoSQL]] [[database]] that stores data in a flexible, [[JSON]]-like format. Unlike traditional relational databases, MongoDB does not require a predefined schema, allowing for easy scalability and fast development. It is designed to handle large amounts of data and can be used in a variety of applications, from simple web apps to complex big data solutions.

# Data Model
- In MongoDB, data is stored in *collections*. These are analogous to tables in relational databases.
- Each collection contains a set of *documents*. Documents are similar to rows in a table but can have varying fields. 

This flexibility allows for easy updates and modifications without needing to change the entire schema, but can introduce complexity in terms of knowing what data to necessarily expect.

# Querying
- MongoDB uses a query language similar to [[JSON]] called [[BSON]] (Binary JSON) to retrieve data. 
- Queries can be filtered, sorted, and aggregated to retrieve specific data sets efficiently. 
- Indexes can also be created to improve query performance.

# Scalability
MongoDB is known for its horizontal scalability, meaning it can easily distribute data across multiple servers to handle large amounts of traffic. This makes it a popular choice for high-volume applications where the need to scale is likely.

# Use Cases
MongoDB is commonly used in applications that require fast and flexible data storage, such as e-commerce platforms, content management systems, and real-time analytics. Its ease of use and scalability make it a versatile choice for a wide range of industries.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
