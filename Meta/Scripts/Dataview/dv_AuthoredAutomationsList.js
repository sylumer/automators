dv.execute(`

LIST
FROM "Automations"
WHERE notetype = "automation"
AND contains(author, this.file.name)
SORT name DESC

`);