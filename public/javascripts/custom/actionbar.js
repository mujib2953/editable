(() => {
    const actionBar = document.querySelector(".action-bar");
    const allActionButtons = actionBar.querySelectorAll("button");
    const actionLists = [
        "bold", "italic", "underline",

        "formatBlock", // --- for heading tags h1-h6
    ];

    addEvents();

    function addEvents() {
        allActionButtons.forEach(btn => {
            btn.addEventListener("click", onActionClick, true);
        });
    }

    function onActionClick(e) {
        const { target } = e;
        const selecetedText = window.getSelection();

        target.classList.toggle("active");

        if (selecetedText.type === "None") {
            return false;
        }

        const { professor: { value }, berlin } = target.attributes;
        const hasAction = actionLists.find(act => act === value);

        if (hasAction) {
            
            if (berlin.value) {
                document.execCommand(value, false, berlin.value)
            } else {
                document.execCommand(value);
            }
        }
    }

})();