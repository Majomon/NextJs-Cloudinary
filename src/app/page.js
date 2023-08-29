"use client";
import { useState } from "react";

function HomePage() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div>
      <form
        onSubmit={async (e) => {
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
          setImageUrl(data.url);
        }}
      >
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button type="submit">Enviar</button>
      </form>

      {imageUrl && <img src={imageUrl} alt="Subido" />}
    </div>
  );
}

export default HomePage;
