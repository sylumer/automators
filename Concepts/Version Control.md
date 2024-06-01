---
status: complete
notetype: concept
---
# Overview
Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. It allows multiple users to collaboratively work on a project and keep track of changes made to resources such as code, documentation, etc. Version control is essential in the software development process as it helps in maintaining the codebase, tracking changes, and collaborating with other team members effectively.

## Types of Version Control Systems
There are two main types of version control systems: Centralised Version Control Systems (CVCS) and Distributed Version Control Systems (DVCS).

### Centralised Version Control Systems (CVCS)
In CVCS, all team members have access to a centralised server where the repository is stored. Users can check out the files, make changes, and commit them back to the central server. Popular CVCS include Apache [[Subversion]] (SVN) and [[Concurrent Versions System]] (CVS).

### Distributed Version Control Systems (DVCS)
In DVCS, each team member has a full copy of the repository on their local machine, allowing them to work independently without needing constant access to a central server. Changes can be made, committed locally, and then pushed to a shared repository. [[Git]] and [[Mercurial]] are popular DVCS used in the industry.

## How Version Control Works
Version control systems track changes to files by creating snapshots of the files at different points in time. Each snapshot is stored in the repository along with metadata such as the user who made the change, the date and time the change was made, and a message describing the change.

### Basic Terminology
- **Repository:** The database where the version control system stores snapshots of files.
- **Commit:** A snapshot of the changes made to files.
- **Branch:** A parallel version of the code that can be worked on separately from the main codebase.
- **Merge:** Combining changes from one branch to another.

### Version Control Workflow
1. **Clone the repository:** Create a local copy of the repository on your machine.
2. **Make changes:** Modify files, add new files, or delete existing files.
3. **Stage changes:** Select which files you want to include in the next commit.
4. **Commit changes:** Record the snapshot of the changes with a meaningful message.
5. **Push changes:** Upload your commits to the shared repository.
6. **Pull changes:** Update your local repository with changes made by others.
7. **Resolve conflicts:** If there are conflicting changes, resolve them before merging.

## Benefits of Version Control
Version control provides several benefits for users.

- **Collaboration:** Multiple users can work on the same files simultaneously without interfering with each other's changes.
- **History:** Users can track changes made to files over time and revert to previous versions if needed.
- **Branching and Merging:** Users can work on separate elements, features, or fixes in isolation using branches, and merge their changes back to the main base version.
- **Backup:** Version control serves as a backup mechanism for the files, ensuring that changes are not lost.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
