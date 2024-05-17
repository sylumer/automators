dv.execute(`

LIST	published
FROM "Episodes"
WHERE notetype = "episode"
AND contains(guests, this.file.name)
SORT published DESC

`);