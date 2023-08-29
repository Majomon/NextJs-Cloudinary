import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  const image = !data.get("img");
  if (image) {
    return NextResponse.json("No se subio la iamgen", { status: 400 });
  }

  //Convertir la imagen a Bytes
  const bytes = image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return NextResponse.json("Imagen subida");
}
