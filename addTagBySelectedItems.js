var tag = "foo"
var items = Zotero.getActiveZoteroPane().getSelectedItems();
await Zotero.DB.executeTransaction(async function () {
    for (let item of items) {
        item.addTag(tag, 0);//0 Automatic Tag
                            //1 Manual Tag
        await item.save({
            skipDateModifiedUpdate: true
        });
    }
});
