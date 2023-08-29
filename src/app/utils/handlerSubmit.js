export const handlerSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch("api/upload", {
    method: "POST",
  });
  const data = await res.json();
  console.log(data);
};
