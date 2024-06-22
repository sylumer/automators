---
status: complete
creator: ""
notetype: technology
aliases:
  - GPT
---
# Overview
A Generative Pre-Trained Transformer (GPT), is a type of [[artificial intelligence]] model created to interpret and generate human-like text. it is a sophisticated computer program that can read, write, and even chat with people in a way that often feels natural and engaging.

GPT is built using a technology called "transformers". Transformers are designed to read and interpret long pieces of text by analysing the context of words around it. Pre-training means that before a GPT can be useful, it is first trained on a large amount of data. During this stage, the GPT "learns" the basics of language, such as grammar, facts about the world, and some level of reasoning.

After pre-training, a GPT can be fine-tuned for specific tasks - e.g. answering questions, writing content. Fine-tuning involves adjusting the model with additional focused training, based on smaller, task-specific datasets. 

# How a GPT Works
## Pre-training
During the pre-training phase, the GPT is fed enormous amounts of content from books, websites, and other sources. The model consumes these texts and tries to predict the next word in a sentence. For example, if it sees "The cat sat on the," it might guess "mat" as the next word. By doing this millions of times, GPT learns the patterns and structures of a particular human language.

## Fine-tuning
Once pre-trained, the model can be fine-tuned for specific applications. This involves training the model on smaller datasets that are related to a particular task like answering customer queries or drafting emails. Fine-tuning adjusts the model's parameters so that it becomes more effective at the specific task.

# Limitations
While the GPT is powerful, it is inherently imperfect and has some notable limitations.

## Context Sensitivity
A GPT can lose track of long-term context in a conversation, making it appear as though it's "forgetting" earlier parts of the dialogue. This needs to be taken into account when interacting with a GPT.

## Dependence on Training Data
The capabilities of any GPT are quality bound to the data it has been trained on. If the model encounters a situation that wasn't well-represented in the training data, it is likely to produce less accurate or useful responses.

## Ethics
There are ethical considerations when using a GPT, such as the potential for generating misleading or harmful content intentionally or unintentionally. The GPT is not in and of itself capable of ethical practice - guardrails and human checks are crucial to using this technology responsibly.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
