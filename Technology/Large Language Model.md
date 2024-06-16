---
status: "  complete"
creator: ""
notetype: technology
aliases:
  - LLM
---
# Overview
Large Language Models (LLM) are a type of [[artificial intelligence]] used in generative AI to understand and generate human-like text. These models are designed to predict the next word or series of words in a sentence, given an initial input.

LLM are trained on vast amounts of text data from books, websites, and other written material. The idea is to expose the model to as many words and sentences as possible so it can learn patterns in human language. By doing this, the model can generate coherent and contextually relevant text even though it has never seen the exact input before.

The "Large" comes from the volume of content provided, the "Language" comes from the content being text, and the "Model" is the result of processing the content.

To understand how they work, you can think of how you might complete a sentence based on what you've already heard. For example, if someone says "Once upon a," your brain might automatically think "time" should follow. In a similar manner, LLM use statistical probabilities to predict what comes next in a sentence. So probabilistically, the model might follow it with "... lived a princess called ...", or the next time "... in a galaxy far far away...".

# Training Process
Training an LLM involves feeding it massive amounts of text data and teaching it to recognise patterns within that data. This is done using a process called "unsupervised learning" meaning the model tries to make sense of the input without explicit instructions on what the output should be. 

## Tokenisation
The text data needs to be broken down into smaller parts, or tokens. A token could be as small as a single letter or as large as a whole word. The model learns to understand these tokens and how they combine to form meaningful text. If you start working with [[Generative Pre-Trained Transformer|GPT]] instances you will probably start to see references to tokens in the amount of input and generation a model is working with.

## Neural Networks
The core of an LLM is a type of [[neural network]] known as a *Transformer*. Transformers are particularly good at handling sequences of data, such as sentences and paragraphs. They can consider the context of each word based on its surrounding words, paying attention to long-range dependencies in the text.

# Applications
LLM have a wide variety of applications.

- **Content Creation:** They can write articles, stories, and even poetry.
- **Query Answering:** LLM can be used in chatbots to answer questions.
- **Translation & Transformation:** They can help in translating text from one language to another, or one format to another (e.g. CSV to Markdown table).
- **Summarisation & Curation:** Generating summaries for long articles or documents or selecting appropriate sets of information to fulfil a task (e.g. in education).

# Limitations and Challenges
While LLM can be powerful tools, they have limitations that users should be aware of.

- **Bias:** Since LLM learn from existing text, they can sometimes inherit biases present in the data.
- **Misinformation:** They may generate text that is plausible but factually incorrect. This is often referred to as being "an hallucination".
- **Resource Intensive:** Training these models require significant computational power and energy.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
