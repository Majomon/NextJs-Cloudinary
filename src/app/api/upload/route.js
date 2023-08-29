import { NextResponse } from "next/server";
//Guardar archivos, leer, eliminar, etc
import { writeFile } from "fs/promises";
//Modulo que nos da toda la ruta de manera automatica
import path from "path";

export async function POST(request) {
  const data = await request.formData();
  const image = await data.get("img");
  if (!image) {
    return NextResponse.json("No se subio la iamgen", { status: 400 });
  }

  //Convertir la imagen a Bytes
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  //Ruta del archivo
  const filePatch = path.join(process.cwd(), "public", image.name);
  //Crear archivo
  await writeFile(filePatch, buffer);
  return NextResponse.json("Imagen subida");
}
