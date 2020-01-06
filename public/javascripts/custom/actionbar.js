(() => {
    const actionBar = document.querySelector(".action-bar");
    const allActionButtons = actionBar.querySelectorAll("button");
    const actionLists = [
        "bold", "italic", "underline"
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

        if (selecetedText.type.toLowerCase() === "none") {
            return false;
        }

        const { professor: { value } } = target.attributes;
        const hasAction = actionLists.find(act => act === value.toLowerCase());

        if (hasAction) {
            document.execCommand(value.toLowerCase());
        }
    }

})();