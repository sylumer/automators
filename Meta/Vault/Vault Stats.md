---
status: "complete"
---

| Statistic                                     | Value                                                                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Notes Created                                 | `$= dv.pages().length`                                                                                                                                       |
| Complete Notes                                | `$= dv.pages().length - dv.pages().where(page => page.status == "incomplete").length`                                                                        |
| [[Incomplete Notes]]                          | `$= dv.pages().where(page => page.status == "incomplete").length`                                                                                            |
| [[Notes to Create\|Links to Notes to Create]] | `$=dv.span((await dv.query("TABLE FLATTEN file.outlinks as out WHERE !(out.file) AND !contains(meta(out).path, \"/\") GROUP BY out")).value.values.length);` |

---

**Deeper Stats**
 - [[Page Link Stats]] 
