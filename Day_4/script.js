const DownloadFile = "Mr-Bot-main.zip";

const StartDownload = document.getElementById("StartDownload");
const ProgressBar = document.querySelector(".Progress-Bar");
StartDownload.addEventListener("click", () => {
    fetch(`/${DownloadFile}`).then((response) => {

        const stream = response.body;
        const reader = stream.getReader();
        const FileSize = Number(response.headers.get("content-length"));

        let TotalSizeDownload = 0;

        const readData = () => {
            return reader
                .read()
                .then((result) => {
                    if (result.value) {

                        TotalSizeDownload += result.value.length;

                        const percentage = Math.floor((TotalSizeDownload / FileSize) * 100);

                        ProgressBar.textContent = `${percentage}%`;
                        ProgressBar.style.width = `${percentage}%`;


                        console.log(
                            `Downloaded: ${TotalSizeDownload} / ${FileSize} (${percentage}%)`
                        );

                    }

                    if (!result.done) {
                        return readData();
                    }

                })
                .then(() => {
                    console.log("Download complete!");
                    ProgressBar.textContent = "Download Complete!";
                });
        };
        return readData();
    });
});
