/**
 *  Add language indicator to code snippets
 */

$(function () {
    const prefix = "language-";
    const regex = new RegExp(`^${prefix}([a-z])+$`);
    console.log(`div[class^=${prefix}`);

    $(`div[class^=${prefix}`).each(function () {
        let classes = $(this).attr("class").split(" ");

        classes.forEach((_class) => {
            if (regex.test(_class)) {
                const id = prefix+parseInt(Math.random()*100);
                let lang = _class.substring(prefix.length);
                $(this).attr("lang", `${lang}`);
                // $(this).css({"height": "500px", "width": "100%"});
                // $(this).attr("id", id);

                // ace.edit(id, {
                //     theme: "ace/theme/dracula",
                //     mode: `ace/mode/${lang}`,
                //     autoScrollEditorIntoView: true,
                //     readOnly: true
                // });
            }
        });

    });
});
