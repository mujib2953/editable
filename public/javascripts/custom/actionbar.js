(() => {
    const actionBar = document.querySelector(".action-bar");
    const allActionButtons = actionBar.querySelectorAll("button");

    addEvents();

    function addEvents() {
        allActionButtons.forEach(btn => {
            btn.addEventListener("click", onActionClick, true);
        });
    }

    function onActionClick(e) {
        const { target } = e;

        target.classList.toggle("active");

        // if (target.classList.contains("active")) {
        //     target.classList.remove("active");
        // } else {
        //     target.classList.add("active");
        // }
    }

})();