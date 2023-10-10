function register(event) {
  event.preventDefault();
  fetch("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: "hello@gmail.com",
    },
  });
}
