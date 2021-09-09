var tag = "CTF"
var items = Zotero.getActiveZoteroPane().getSelectedItems();
await Zotero.DB.executeTransaction(async function () {
    for (let item of items) {
        item.removeTag(tag, 0);//0 Automatic Tag
                            //1 Manual Tag
        await item.save({
            skipDateModifiedUpdate: true
        });
    }
});

// var tag = "Foo";
// var s = new Zotero.Search();
// s.libraryID = ZoteroPane.getSelectedLibraryID();
// s.addCondition('tag', 'is', tag);
// var ids = await s.search();
// if (!ids.length) {
//     return "No items found";
// }
// await Zotero.DB.executeTransaction(async function () {
//     for (let id of ids) {
//         let item = Zotero.Items.get(id);
//         item.removeTag(tag, 1);
//         await item.save({
//             skipDateModifiedUpdate: true
//         });
//     }
// });