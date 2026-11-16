const cartCount = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-to-cart");

let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = count;

    const productCard = button.closest(".product-card");
    const productName = productCard?.dataset.name || "Product";

    button.textContent = "Added";
    button.disabled = true;
    button.style.opacity = "0.8";

    const originalText = button.textContent;

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.disabled = false;
      button.style.opacity = "1";
    }, 900);

    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      button.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.04)" },
          { transform: "scale(1)" }
        ],
        {
          duration: 250,
          easing: "ease-out"
        }
      );
    }

    console.log(`${productName} added to cart`);
  });
});

