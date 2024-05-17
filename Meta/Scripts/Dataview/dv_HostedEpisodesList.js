dv.execute(`

LIST	published
FROM "Episodes"
WHERE notetype = "episode"
AND contains(hosts, this.file.name)
SORT published DESC

`);