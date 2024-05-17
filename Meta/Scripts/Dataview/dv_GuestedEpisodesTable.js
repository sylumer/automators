dv.execute(`

TABLE WITHOUT ID
	file.link as "Episode",
	published as "Published"
FROM "Episodes"
WHERE notetype = "episode"
AND contains(guests, this.file.name)
SORT published DESC

`);
