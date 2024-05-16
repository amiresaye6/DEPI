const shorter = document.getElementById("shorter");
const input_url = document.getElementById("input_url");
const output_section = document.getElementById("output_card");

function geturl(s_url) {
    const baseUrl = "https://amiralsayed.tech/";
    const filler = Math.floor(Math.random() * 10000000000);
    return {
        oldUrl: s_url,
        new_url: baseUrl + filler,
    };
}

shorter.addEventListener("click", () => {
    let in_url = input_url.value;
    if (in_url == "") {
        console.log("error: enter a url please.");
        input_url.classList.add("wrong_style");
        input_url.setAttribute('placeholder', "please add a link");
    } else {
        console.log(in_url);
        input_url.classList.remove("wrong_style");
        input_url.setAttribute('placeholder', "Shorten a link here...");
        
        // fetching the new url
        let response = geturl(in_url);
        setTimeout(() => {
            
            output_section.innerHTML += `
                <div class="output">
                    <h1>${response.oldUrl}</h1>
                    <div class="contan_out">
                        <h1>${response.new_url}</h1>
                        <div class="copy_button" id="copy_b">Copy</div>
                    </div>
                </div>
            `;
        }, 1000);

        input_url.value = "";
    }
});

const copy_button = document.getElementById("copy_b")

copy_button.addEventListener("click", () => {
    console.log("copied")
})
