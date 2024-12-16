document.addEventListener("DOMContentLoaded", () => {
  const productOptions = document.querySelectorAll(".product-option");
  productOptions.forEach(option => {
    const radioInput = option.querySelector("input[type='radio']");
    radioInput.addEventListener("change", () => {
      productOptions.forEach(opt => {
        opt.style.borderColor = "#ddd";
        opt.style.backgroundColor = "#fff";

        const selectors = opt.querySelector(".selectors");
        if (selectors) {
          selectors.style.display = "none";
        }
      });

      option.style.borderColor = "#ff3366";
      option.style.backgroundColor = "#fff9fa";

      const selectors = option.querySelector(".selectors");
      if (selectors) {
        selectors.style.display = "flex";
      }
    });
  });
});
