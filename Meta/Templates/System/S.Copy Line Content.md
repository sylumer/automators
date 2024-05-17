<%*
let objEditor = app.workspace.activeLeaf.view.sourceMode.cmEditor;
let objLine = objEditor.getCursor().line;
let strLineContent = objEditor.getLine(objLine);
await navigator.clipboard.writeText(strLineContent);
%>