(() => {
    const actionBar = document.querySelector(".action-bar");
    const allActionButtons = actionBar.querySelectorAll("button");
    const fileInput = actionBar.querySelector(".upload-image");
    const actionLists = [
        "bold", "italic", "underline",

        "formatBlock", // --- for heading tags h1-h6
        "strikeThrough",

        "foreColor",

        "backColor",

        "insertUnorderedList",
        "insertOrderedList",
    ];

    addEvents();

    function addEvents() {
        allActionButtons.forEach(btn => {
            btn.addEventListener("click", onActionClick, false);
        });

        fileInput.addEventListener("change", onFileUpload, true);
    }

    function onActionClick(e) {
        const { target } = e;
        const selecetedText = window.getSelection();

        // target.classList.toggle("active");
        if (target.value === "image") {
            fileInput.click();
            return false;
        }
        // --- no selection on UI
        if (selecetedText.type === "None" || target.type === "file") {
            return false;
        }

        const { professor: { value }, berlin } = target.attributes;
        const hasAction = actionLists.find(act => act === value);

        if (hasAction) {
            
            if (berlin && berlin.value) {
                document.execCommand(value, false, berlin.value)
            } else {
                document.execCommand(value);
            }
        }
    }

    function onFileUpload() {
        if (fileInput.files.length) {
            const fileReader = new FileReader();

            fileReader.onload = () => {
                if (typeof fileReader.result === "string") {
                    document.execCommand("insertImage", false, fileReader.result);
                }
            }

            fileReader.readAsDataURL(fileInput.files[0]);
        }
    }

})();