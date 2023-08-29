"use client";
import { useState } from "react";
import { handlerSubmit } from "./utils/handlerSubmit";

function HomePage() {
  const [file, setFile] = useState(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          handlerSubmit({ e, file });
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
    </div>
  );
}

export default HomePage;
