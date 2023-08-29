export const handlerSubmit = async ({ e, file }) => {
  e.preventDefault();
  console.log(file);
  const formData = new FormData();
  formData.append("img", file);

  const res = await fetch("api/upload", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  console.log(data);
};
