function applyDiscount() {
    const price = parseFloat(document.getElementById("price").value);
    const discount = parseFloat(document.getElementById("discount").value);
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    document.getElementById("discountedPrice").textContent = `Final Price: $${finalPrice.toFixed(2)}`;
  }