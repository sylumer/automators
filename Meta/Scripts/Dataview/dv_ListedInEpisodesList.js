dv.execute(`

LIST	published
FROM "Episodes"
WHERE notetype = "episode"
AND contains(file.outlinks, this.file.link)
SORT published DESC

`);