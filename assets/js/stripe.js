const item = {
  price: "price_1KfshAFLbIQ2kUeFKxtgqtja",
  quantity: 1
};

const checkoutOptions = {
  lineItems: [item],
  mode: "payment",
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/cancel`
};


const redirectToCheckout = async () => {
  console.log("redirectToCheckout");

  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout(checkoutOptions);
  console.log("Stripe checkout error", error);
};