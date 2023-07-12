// Get the target <div> element
const divElement = document.getElementById("your-div-id");
const select = (s) => document.querySelector(s);
function saveScreenshot(element) {
  html2canvas(element).then(function (canvas) {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "ID.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
select("#button").onclick = () => {
  saveScreenshot(select("#id-card"));
};

select("#imageUpload").addEventListener("change", function () {
  const file = select("#imageUpload").files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    select(
      ".profile-image"
    ).style.backgroundImage = `url('${e.target.result}')`;
  };

  reader.readAsDataURL(file);
});
select(".profile-image").onclick = () => select("#imageUpload").click();
