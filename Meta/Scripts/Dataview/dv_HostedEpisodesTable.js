dv.execute(`

TABLE WITHOUT ID
	file.link as "Episode",
	published as "Published"
FROM "Episodes"
WHERE notetype = "episode"
AND contains(hosts, this.file.name)
SORT published DESC

`);
