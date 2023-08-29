"use client";
import Image from "next/image";
import { useState } from "react";

function HomePage() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false); // Inicialmente, no estamos cargando

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Comenzamos la carga
    console.log(file);
    const formData = new FormData();
    formData.append("img", file);

    const res = await fetch("api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);
    setLoading(false); // Finalizamos la carga
    setImageUrl(data.url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button type="submit">Enviar</button>
      </form>

      {loading && <p>Cargando...</p>}

      {/* Mostrar la imagen si imageUrl cambio de valor */}
      {imageUrl && (
        <Image width={600} height={600} src={imageUrl} alt="Subido" />
      )}
    </div>
  );
}

export default HomePage;
