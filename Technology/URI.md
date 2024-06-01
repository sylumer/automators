---
status: "complete"
creator: ""
notetype: "technology"
---

# Overview
A URI (Uniform Resource Identifier) is a string of characters that identifies a specific resource. It can be further classified into two types: [[URL Schemes|URL]] (Uniform Resource Locator) and URN (Uniform Resource Name).

- **URI (Uniform Resource Identifier):** 
  - A URI is a generic term used to identify any resource on the internet. It provides a way to uniquely identify resources, such as web pages, files, or emails.
  
- **URL (Uniform Resource Locator):** 
  - A URL is a specific type of URI that also includes information on how to access the identified resource. It specifies the protocol to be used, the host where the resource is located, the path to the specific resource, and any additional parameters.
  - In simpler terms, a URL not only identifies the resource but also provides the means to access it. For example, `https://www.example.com/index.html` is a URL that specifies both the location of the resource (`www.example.com`) and the protocol to use (`https`) to access it.
  - - **Example:** `https://www.example.com/index.html`

- **URN (Uniform Resource Name):**
  - A URN is a specific type of URI that identifies a resource by name in a persistent and location-independent manner.
  - Unlike a URL, which provides information on how to access a resource, a URN simply names the resource without specifying its location or access method.
  - **Example:** `urn:isbn:0123456765`

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
