---
status: complete
creator: Douglas Crockford
notetype: technology
---

# Overview
JSON is short for [[JavaScript]] Object Notation. It is a data-interchange format that is intended to be easy for humans to read and write as well as being straight forward for computers to process. It is commonly used for transmitting data between a server and a web application, as well as for configuration files and APIs.

# Structure of JSON
- JSON data is organised in key-value pairs
	- Keys are always strings enclosed in double quotes 
	- Keys are separated from values by a colon. 
- Values can be of a variety of simple types:
	- Strings
	- Numbers
	- Objects
	- Booleans
	- Arrays (of other types)
	- Null 
- Arrays in JSON are ordered, comma-separated lists enclosed in square brackets.
- Objects are unordered collections of key-value pairs enclosed in curly braces.
	- i.e. *never* rely on the order of key value pairs in an object.

**Example**  

```json
{
  "name": "John Doe",
  "age": 35,
  "isStudent": false,
  "address": {
    "street": "123 Main Street",
    "city": "Anytown",
    "postcode": "AB123CD"
  },
  "phoneNumbers": ["123-456-7890", "987-654-3210"],
  "isEmployed": true,
  "children": null
}
```

# Application Configuration
JSON has commonly been used in the configuration of applications due to its simplicity and readability. Configuration settings such as server URLs, database credentials, and application settings can be easily stored in a JSON file and read by the application at runtime.

# Use in Data Transfer in Web APIs
JSON is also widely used for transferring data in web APIs. When a client makes a request to a server for data, the server can respond with JSON-formatted data that the client can easily parse and use. This makes communication between different software systems more efficient and standardised.

By understanding the structure of JSON and its use in configuration files and web APIs, developers can leverage this powerful data-interchange format to improve the functionality and efficiency of their applications.

# History of JSON
JSON was craeted by Douglas Crockford a lightweight alternative to [[XML]] for data interchange. Crockford aimed to create a simpler, more readable format that could easily be used with [[JavaScript]] applications. Crockford defined the syntax and rules for JSON in [RFC 4627](https://datatracker.ietf.org/doc/html/rfc4627), published in 2006.

Since its introduction, JSON has gained widespread popularity and has become the de facto standard for data interchange on the web. It is supported by most programming languages (often via additional libraries if not natively) making it a versatile and widely used format for transmitting and storing data.

Over the years, JSON has evolved to include additional features and improvements: 
- JSON Schema was introduced to provide a way to define the structure of JSON data and validate it against a schema.
- JSON-LD (JSON for Linked Data) extends JSON to include support for linked data concepts, making it easier to represent complex relationships between data.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
 

