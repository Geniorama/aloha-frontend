export default function stripe(props) {
  const obj = { ...props };

  const form = document.createElement("form");

  form.method = "POST";
  form.action = "/api/checkout_sessions";

  Object.keys(obj).forEach((key) => {
    const input = document.createElement("input");
    input.setAttribute("name", key);
    input.setAttribute("value", obj[key]);
    input.setAttribute("type", "hidden");
    form.appendChild(input);
  });

  document.body.appendChild(form);

  return form.submit();
}
