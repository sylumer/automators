---
status: complete
notetype: concept
creator: Toyota
---
# Overview
Kanban is a visual workflow management method used to optimise tasks and processes within a team or organisation. Originating from the Japanese word for "sign board" or "billboard," Kanban was initially developed by Toyota in the 1940s as a scheduling system for its manufacturing operations. Today, it has been broadly adopted in various industries, from software development to marketing, to streamline processes, improve efficiency, and enhance team collaboration.

# Key Principles
Kanban is based on a few core principles:

1. **Visualise Work** - By using a Kanban board, teams can see every task in their workflow. This visualisation helps in identifying bottlenecks, tracking progress, and ensuring tasks aren't overlooked.
2. **Limit Work in Progress (WIP)** - By setting limits on the number of tasks in progress at any stage of the workflow, Kanban helps teams focus on completing tasks rather than starting new ones. This reduces multitasking and improves efficiency.
3. **Focus on Flow** - Kanban aims to maintain a steady flow of tasks through the system. Any disruptions in flow can indicate issues that need addressing. The goal is continuous delivery without overloading the team.
4. **Continuous Improvement** - Teams regularly review their workflows and performance to identify areas for enhancement. This principle of continuous improvement ([[Kaizen]]) is vital to the success of Kanban.

# Components of a Kanban Board
A Kanban board is the primary tool in the Kanban method. It can be physical or digital, with tasks represented as cards and the workflow stages as columns. The typical structure includes:

1. **Columns** - Each column represents a stage in the workflow. Common stages might be "To Do," "In Progress," and "Done," but these can be customised based on the team's needs.
2. **Cards** - Each card symbolises a task or work item. Cards usually include essential information like task description, assignee, and due dates. 
3. **Swim Lanes** - These are horizontal rows used to separate different types of work or prioritise tasks.
   
<svg baseProfile="full" height="250" version="1.1" width="450"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs />
	<rect fill="#f0f0f0" height="250" stroke="black" width="150" x="0" y="0" />
	<text fill="black" font-family="Arial" font-weight="bold" font-size="20px" text-anchor="middle" x="75" y="30">To Do</text>
	<rect fill="#f0f0f0" height="250" stroke="black" width="150" x="150" y="0" />
	<text fill="black" font-family="Arial" font-weight="bold" font-size="20px" text-anchor="middle" x="225" y="30">In Progress</text>
	<rect fill="#f0f0f0" height="250" stroke="black" width="150" x="300 " y="0" />
	<text fill="black" font-family="Arial" font-weight="bold" font-size="20px" text-anchor="middle" x="375 " y="30">Done</text>
	
	<rect fill="#b3cde0" height="40" stroke="black" width="130" x="10" y="70" />
	<text fill="black" font-family="Arial" font-size="16px" dominant-baseline="middle" x="20" y="100">Task 2</text>
	<rect fill="#b3cde0" height="40" stroke="black" width="130" x="10" y="120" />
	<text fill="black" font-family="Arial" font-size="16px" dominant-baseline="middle" x="20" y="150">Task 5</text>
	
	<rect fill="#b3cde0" height="40" stroke="black" width="130" x="160" y="70" />
	<text fill="black" font-family="Arial" font-size="16px" dominant-baseline="middle" x="170" y="100">Task 6</text>
	
	
	<rect fill="#b3cde0" height="40" stroke="black" width="130" x="310" y="70" />
	<text fill="black" font-family="Arial" font-size="16px" dominant-baseline="middle" x="320" y="100">Task 1</text>
	<rect fill="#b3cde0" height="40" stroke="black" width="130" x="310" y="120" />
	<text fill="black" font-family="Arial" font-size="16px" dominant-baseline="middle" x="320" y="150">Task 3</text>
	<rect fill="#b3cde0" height="40" stroke="black" width="130" x="310" y="170" />
	<text fill="black" font-family="Arial" font-size="16px" dominant-baseline="middle" x="320" y="200">Task 4</text>
</svg>

The tasks ideally progress from left to right, but issues could see them moved back to the left.

# Workflow Management
Managing workflows with Kanban involves some key practices.

- **Visual Management**
	- Visual cues are crucial in the Kanban method. A well-maintained Kanban board can provide instant feedback on the state of projects, identify bottlenecks, and show workload distribution. Regular updates and real-time tracking are essential practices.
- **Work in Progress Limits**
	- WIP limits are predetermined caps on the number of tasks that can be in a particular state simultaneously. For example, if the limit for tasks "In Progress" is set to three, no new tasks can enter that stage until one of the current tasks is completed. This prevents overloading and keeps the team focused.
- **Flow Metrics**
	- To evaluate and improve flow, teams track various metrics such as:
		- *Cycle Time* - The total time taken from when a task begins to completion.
		- *Lead Time* - The total time taken from when a task is requested until it's completed.
		- *Throughput* - The number of tasks completed in a given time period.
- **Continuous Improvement**
	- Teams using Kanban are encouraged to hold regular meetings to review and improve their process. These might include:
		- *Daily Standups* - Short daily meetings to discuss progress, potential roadblocks, and plan the day's work.
		- *Kaizen Events* - Sessions focused on process improvement.
		- *Retrospectives* - Reviews held after a project or at regular intervals to discuss what went well and what could be improved.

# Benefits
Implementing Kanban (over nothing), typically offers several advantages:

- **Enhanced Efficiency** - Limiting WIP and focusing on completing tasks can significantly boost productivity.
- **Increased Transparency** - Visualising work makes it easier for everyone to see task status and workload.
- **Flexibility** - Kanban can be adapted to various workflows and does not require prescribed roles or ceremonies.
- **Improved Collaboration** - A shared Kanban board fosters better teamwork and communication.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
