---
status: "complete"
creator: 
	- Clark Evans
	- Ingy döt Net
	- Oren Ben-Kiki
notetype: "technology"
---
# Overview
YAML, which stands for "YAML Ain't Markup Language", is a human-readable [[Data Serialisation|data serialisation]] language commonly used for configuration files and data exchange. It aims to be simple and easy to read by both humans and machines, making it a popular choice in various programming languages and applications.

YAML uses indentation and key-value pairs to structure data in a format that resembles natural language. It supports lists and nested data structures, making it flexible for representing complex data. 

One of the key benefits of YAML is its readability and flexibility, allowing users to easily modify and understand the data stored in YAML files. Its compatibility with a wide range of programming languages and tools makes it a versatile choice for configuration files in software development.

# Structure in YAML
YAML uses indentation to define the structure of data, with key-value pairs representing data elements. It also supports lists, dictionaries, and nested structures for representing complex data relationships. The use of dashes for lists and colons for key-value pairs helps maintain readability and clarity in YAML files.

## YAML Basis

- **Key-Value Pairs**: The syntax for key-value pairs uses a colon to separate the key and value, like `key: value`. Keys must be unique within a YAML file.
  
- **Lists**: Lists in YAML are denoted by dashes followed by a space `-`, with each list item on a new line. For example:
  ```
  fruits:
    - apple
    - banana
    - orange
  ```

- **Nested Data Structures**: YAML supports nested data structures, allowing complex data relationships to be represented easily. Nested structures use indentation to indicate hierarchy. For example:
  ```
  person:
    name: John Wick
    age: 50
    address:
      city: New York
      zip: 10001
  ```

- **Quotation Marks**: In YAML, quotation marks are used to specify strings that might be interpreted as other data types. They are not required for simple strings, but can be used for strings that contain special characters or spaces.

- **Support for Numbers and Boolean Values**: YAML supports numbers (integers and floats) without requiring quotation marks. Boolean values like `true` and `false` are also supported in YAML.

# Common Use Cases
YAML is commonly used for configuration files in software development, allowing developers to specify settings and parameters in a readable format. It is also used for data exchange between different systems, thanks to its human-readable and language-independent nature. Additionally, YAML is often used in automation tools and build pipelines for defining workflows and processes.

# Advanced Features
YAML supports various advanced features such as anchors and aliases for referencing the same data multiple times within a file. It also allows for custom data types and tags, providing flexibility in representing different types of data. YAML schemas can be used to define and enforce data structures, ensuring consistency and validity in YAML files.

# Notes
- YAML was created in 2001.

# Links
- [The Official YAML Web Site](https://yaml.org)
- [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/)
- [YAMLlint - The YAML Validator](http://www.yamllint.com/)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
