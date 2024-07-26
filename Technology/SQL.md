---
status: complete
creator: Donald D. Chamberlin and Raymond F. Boyce
notetype: technology
aliases:
  - Structured Query Language
---
# Overview
SQL (pronounced '*sequel*') stands for Structured Query Language, and is a computer language designed to manage and manipulate databases. It is what you use to add, retrieve, update, and delete data stored inside the database.

Databases are essential for many applications, from websites and mobile apps to enterprise systems and scientific research. They help store and manage large volumes of information efficiently. Understanding SQL is therefore an imperative when dealing with such systems.

# Basic SQL Operations

The `SELECT` statement is used to fetch data from a database. Imagine you want to see all the books in your library; you'd use a command like:

```sql
SELECT * FROM Books;
```

Here, `*` means "all columns" and `Books` is the table (or section of the filing cabinet) storing information about the books.

The `INSERT` statement is used to add new data. If you have a new book to add, you'd use a command like:

```sql
INSERT INTO Books (Title, Author, Year) VALUES ('SQL Cookbook', 'Anthony Molinaro', 2006);
```

This command tells the database to add a new entry with specified details.

The `UPDATE` statement lets you change existing data. If a book gets a new edition, you'd update its record using:

```sql
UPDATE Books SET Year = 2007 WHERE Title = 'SQL Cookbook' AND Author = 'Anthony Molinaro';
```

This command finds the book and updates its year to 2007.

The `DELETE` statement removes data from the database. If a book gets lost, you’d remove its record like this:

```sql
DELETE FROM Books WHERE Title = 'SQL Cookbook' AND Author = 'Anthoy Molinaro';
```

This command deletes the book entry from the `Books` table.


# Additional Concepts
## Joins
Sometimes, the information you need is spread across multiple tables. You can "join" these tables together. For example, if you have a `Members` table and a `Loans` table for a lending library database, you might join them to find out which members have borrowed books:

```sql
SELECT Members.Name, Books.Title
FROM Members
JOIN Loans ON Members.MemberID = Loans.MemberID
JOIN Books ON Loans.BookID = Books.BookID;
```

## Indexes
Indexes help speed up the search queries. Think of it like an index in a book; it helps you find pages faster.

## Transactions
Transactions establish the way in which the database is interacted with using SQL statements. These transactions aim to ensure that a series of operations either all succeed or all fail. This is crucial for maintaining data integrity in situations. for example financial exchanges.

# History
- SQL was originally created by IBM researchers Donald D. Chamberlin and Raymond F. Boyce in the early 1970s.
- It was developed as part of the System R project, which was designed to create a prototype of a relational database management system.
- The initial version of SQL was called "SEQUEL" (Structured English Query Language), but the name was later shortened to SQL due to trademark issues.
- SQL became the standard language for relational database management systems, and over the years, it was adopted and extended by various companies and organisations.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
