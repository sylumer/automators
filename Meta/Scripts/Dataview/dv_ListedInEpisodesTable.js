dv.execute(`

TABLE WITHOUT ID
	file.link as "Episode",
	published as "Published"
FROM "Episodes"
WHERE notetype = "episode"
AND contains(file.outlinks, this.file.link)
SORT published DESC

`);