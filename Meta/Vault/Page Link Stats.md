This note lists each note in the vault, the count of notes that link to that note, and the count of links to that note, sorted by the link count.

```dataviewjs
const result = await dv.pages().map(p =>
{
	let totalInlinks = 0;
	const currentFile = p.file.path;

    for (const inlink of p.file.inlinks || []) 
    {
		const tFile = app.metadataCache.getFirstLinkpathDest(inlink.path, "");
		
		// Skip if target file is not found
		if (!tFile) continue;

		const fileCache = app.metadataCache.getFileCache(tFile);

		// Skip if fileCache or links are missing
		if (!fileCache || !fileCache.links) continue; 

		for (const link of fileCache.links)
		{
			const linkPath = app.metadataCache.getFirstLinkpathDest(link.link, p.file.folder)?.path;
	
			if (linkPath === currentFile) totalInlinks++;
        }
    }
    return [p.file.link, p.file?.inlinks?.length || 0, totalInlinks];
});

// Sort result.values by the third column (Link Count) in descending numeric order
result.values.sort((a, b) => b[2] - a[2]);

if (result.successful) dv.table(["Note", "Linked Notes", "Total Links"], result.values);
else dv.paragraph("~~~~\n" + result.error + "\n~~~~");
```
