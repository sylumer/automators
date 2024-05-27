---
status: complete
creator_company: John Gruber
notetype: technology
---
# Overview
Markdown is a lightweight markup language with plain text formatting syntax designed to be easily converted to [[HTML]] and other formats. It allows users to write using an easy-to-read and easy-to-write plain text format, then convert it to these other formats.

Markdown is widely used in web development, software documentation, online discussion forums, and in other fields where a simple way to convert plain text into formatted text is needed.

Some common features of Markdown include headers, lists, emphasis (such as bold or italic text), links, images, and code blocks. It is a versatile language that allows users to quickly and efficiently create formatted content without needing to know complex [[HTML]] or other markup languages.

Overall, Markdown provides a simple and efficient way to format text, making it a valuable tool for anyone looking to quickly create structured and formatted documents.

# Standard Markdown Syntax
Markdown syntax consists of simple characters and symbols that are used to format text and create structured content. Here are some common elements of standard Markdown syntax, along with examples of how they appear in Markdown "code" and the corresponding Markdown result:

## 1. Headers:
   - Markdown "code":
     ```
     # This is a level 1 header
     ## This is a level 2 header
     ```
   - Markdown result:
     # This is a level 1 header
     ## This is a level 2 header

## 2. Lists:
   - Markdown "code":
     ```
     - Item 1
     - Item 2
       - Subitem A
       - Subitem B
     ```
   - Markdown result:
     - Item 1
     - Item 2
       - Subitem A
       - Subitem B

## 3. Emphasis (Bold and Italic):
   - Markdown "code":
     ```
     *This text will be italic*
     **This text will be bold**
     ```
   - Markdown result:
     *This text will be italic*
     **This text will be bold**

## 4. Links:
   - Markdown "code":
     ```
     [Google](https://www.google.com)
     ```
   - Markdown result:
     [Google](https://www.google.com)

## 5. Images:
   - Markdown "code":
     ```
     ![Alt text](logo.jpg)
     ```
   - Markdown result:
     ![Alt text|200x200](logo.jpg)

## 6. Code Blocks:
   - Markdown "code":
     \`\`\`python
     print("Hello, World!")
     \`\`\`
   - Markdown result:
     ```python
     print("Hello, World!")
     ```

## 7. Blockquotes:
   - Markdown "code":
     ```
     > This is a blockquote
     ```
   - Markdown result:
     > This is a blockquote

These are just a few examples of  standard Markdown syntax elements that can be used to format text and create structured content.

# Tools and Editors
There are many tools and editors available to help users write and preview Markdown content. Most of these tools can provide real-time previews of how the Markdown will look when converted to [[HTML]] or other formats, making it easier for users to see the final result of their formatted content.

# Advanced Features
While Markdown is known for its simplicity, it also offers some advanced features for more complex formatting needs. These features include tables, footnotes, and syntax highlighting for code blocks. Understanding these advanced features can help users create more sophisticated documents using Markdown.

By mastering Markdown and its features, users can efficiently create well-formatted and visually appealing content without the need for complex markup languages.

# Creation of Markdown
Markdown was created in 2004 by John Gruber who wanted a simple way to format text for the web. Gruber designed Markdown to be easy to read and write, with a syntax that is intuitive and straightforward for users to learn and use.

Markdown's design philosophy focused on simplicity, readability, and practicality. It was intended to be a quick and efficient way for users to format text without getting bogged down in intricate markup syntax.

Over the years, Markdown has gained widespread popularity and adoption among writers, bloggers, developers, and other content creators. Its ease of use and versatility have made it a go-to tool for formatting text in a variety of contexts, from creating documentation to writing blog posts.

Overall, the creation of Markdown has had a significant impact on how people write and format content for the web, providing a user-friendly alternative to traditional markup languages.

# Different Flavours of Markdown
Since the creation of Markdown by John Gruber, several different flavours and variations of Markdown have been developed that build upon the original syntax with additional features and functionalities. These different flavours cater to specific needs and preferences of users, offering enhanced capabilities beyond the basic Markdown syntax. Unfortunately this has lead to some painful fragmentation of what is and what is not valid Markdown syntax.

## GitHub Flavoured Markdown
GitHub Flavoured Markdown, or GFM for short, is a variant of Markdown used on the popular code hosting platform, [[GitHub]]. GFM extends the original Markdown syntax to include features such as task lists, tables, and [[syntax highlighting]] for code blocks. These additional features make it easier for users to create and format content on [[GitHub]] repositories.

## CommonMark
CommonMark is another popular variant that aims to create a standardised and consistent version of Markdown that can be implemented across different platforms and tools. CommonMark clarifies ambiguous aspects of the original Markdown syntax and provides a strict specification for rendering Markdown content.

## Pandoc Markdown
Pandoc Markdown is used with the [[Pandoc]] document converter tool and includes features for creating complex documents, such as citations, footnotes, and tables. It is often used for academic writing and document conversion tasks.

## MultiMarkdown
MultiMarkdown is another variant that extends the original Markdown syntax with additional features such as metadata, footnotes, and tables. MultiMarkdown is designed to enhance the capabilities of Markdown for more advanced writing and document structuring needs.

# Alternative Markup Syntax to Markdown
There are alternative markup languages that offer different syntax and features for formatting text and creating structured content. These alternative markup languages provide users with a variety of options to choose from based on their specific requirements and preferences. Some of the notable alternatives to Markdown include:

1. **ReStructuredText (reST):** [[ReStructuredText]] is a lightweight markup language that is commonly used in the [[Python]] community and is supported by the [[Sphinx]] documentation tool. It offers a range of features for structuring text, such as tables, footnotes, and inline markup, making it suitable for technical documentation and other written content.

2. **Textile:** [[Textile]] is a markup language that allows users to write text with simple characters to indicate formatting elements. It supports features such as headings, lists, and links, making it a popular choice for creating blog posts and other types of online content.

3. **AsciiDoc:** [[AsciiDoc]] is a versatile markup language that offers features for creating technical documentation, books, slideshows, and more. It provides a robust set of formatting options, including tables, images, callouts, and more, making it a comprehensive choice for authors and content creators.

4. **LaTeX:** [[LaTeX]] is a typesetting system commonly used for creating documents in academia and scientific fields. It offers precise control over document layout, mathematical typesetting, and bibliography management, making it a powerful tool for creating complex and professional-looking documents.

5. **HTML:** While not a markup language specifically designed for plain text like Markdown, [[HTML]] is a widely used markup language for creating web pages. Users can write [[HTML]] code directly to format text, insert images, create links, and structure content on web pages.

# Useful Links
- [Daring Fireball Markdown Syntax Page](https://daringfireball.net/projects/markdown/syntax)
- [GitHub Guides - Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Markdown - MacSparky](https://www.macsparky.com/markdown/)
- [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [CommonMark Spec](https://spec.commonmark.org/)
- [MultiMarkdown Documentation](https://fletcher.github.io/MultiMarkdown-6/)
- [Pandoc - A Universal Document Converter](https://pandoc.org/)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
