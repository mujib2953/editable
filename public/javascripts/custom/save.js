(() =>{
    const saveBtn = document.querySelector(".contenteditable-save");
    const contentDiv = document.querySelector(".data-div");
    const errorBlock = document.querySelector(".error-block");
    
    // saveBtn.removeEventListener("click");
    addEvents();
    
    function addEvents() {
        saveBtn.addEventListener("click", onSaveClick, false);
    }

    function onSaveClick() {
        postData("/", contentDiv.innerHTML);
    }

    function postData(p_url, p_data) {
        
        fetch(p_url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: p_data })
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            showAlert("Your changes are saved successfully...");
        })
        .catch((e) => {
            console.error(e);
        });
    }

    function getData(p_url) {
        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;

            if (this.status === 200) {
                return JSON.parse(this.responseText);
            }
        };

        xhr.open("GET", p_url, true);
        xhr.send();
    }

    function showAlert(p_message, isSuccess = true) {

        const sDiv = document.createElement("div");
        sDiv.className = "alert " + ( (isSuccess) ? "alert-success" : "alert-danger" );
        sDiv.innerText = p_message;

        errorBlock.append(sDiv);
        setTimeout(() => {
            sDiv.remove();
        }, 2000);
    }

})();