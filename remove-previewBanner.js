// Remove "This is preview" banner
window.addEventListener("load", () => {
  const previewBanner = document.getElementsByClassName("_95f5f1767857 _0838fb325c04")[0];
  if(previewBanner) {
    previewBanner.remove();
  }
});
