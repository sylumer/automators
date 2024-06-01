---
status: complete
creator: ""
notetype: technology
aliases:
  - '["URL scheme"]'
---

# Overview
URL schemes are a fundamental part of the Internet that allow us to specify how a web resource should be accessed. A [[URL Schemes\|URL scheme]] is the protocol or set of rules that defines how a URL (Uniform Resource Locator) should be structured. This includes defining the type of protocol to be used, such as HTTP, HTTPS, FTP, or mailto, among others. 

URL schemes are essential for accessing various types of resources on the web, such as websites, files, emails, and more. They specify the rules for communication between a web client (such as a browser) and a web server, ensuring that data is transferred correctly and securely.

# Components of a [[URL Schemes\|URL scheme]]

- **Protocol:** This is the first part of a [[URL Schemes\|URL scheme]] and specifies the method used to access the resource.
- **Host:** This part of the URL identifies the server where the resource is located.
- **Port:** Optionally specified after the host, this identifies a specific endpoint on the server to connect to.
	- This will be invisibly defaulted by protocol unless specified. e.g. `http` will be port 80, `https` will be port 443, `ssh` will be port 22.
	- Ports are separate from the port by a colon (`:`)
- **Path:** This part of the URL specifies the location or path to the specific resource on the server.
	- This specified the folder and a file.
	- If no file is specified, then the server receiving the request will deliver a default resource based on how it is configured. For example a web server passed a folder path and no file will most likely default to `index.html` or `index.htm`, but configurations do vary.
- **Query:** This part, if present, contains parameters that are passed to the server.
	- This is partitioned from the path by a question mark (`?`), and is typically expressed with key value pair elements `key=value`, with multiple values concatenated by ampersands (`&`).
- **Fragment:** This part, if present, specifies a specific section within the resource once it has been retrieved.
	- Fragments are prefixed by an octothorpe (`#`) and the name that follows will refer to the section.

URL schemes are an essential aspect of browsing the internet, allowing us to access a wide range of resources with ease and efficiency.

# Notes
 - A URL is a type of [[URI]].


# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
