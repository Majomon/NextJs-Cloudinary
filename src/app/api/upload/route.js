import { NextResponse } from "next/server";
//Guardar archivos, leer, eliminar, etc
import { writeFile } from "fs/promises";
//Modulo que nos da toda la ruta de manera automatica
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { log } from "console";

cloudinary.config({
  cloud_name: "majomon",
  api_key: "814512663123947",
  api_secret: "Ll89iRjrUGw6serOb21Bj-FBgyE",
});

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

  //Ahora el archivo se lo paso a cloudinary
  const res = await cloudinary.uploader.upload(filePatch);
  console.log(res);
  return NextResponse.json({ message: "Imagen subida", url: res.secure_url });
}
