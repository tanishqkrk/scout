import { createHmac } from "crypto";

export async function POST(req) {
  const body = await req.json();
  console.log("Body: ");
  console.log(body);
  const hmac = createHmac("sha256", process.env.RZP_KEY_SECRET || "");
  hmac.update(body.razorpayPaymentId + "|" + body.razorpaySubscriptionId);
  let generatedSignature = hmac.digest("hex");
  let isSignatureValid = generatedSignature == body.razorpaySignature;
  console.log(generatedSignature);
  console.log(body.razorpaySignature);
  return Response.json({ isSignatureValid }, { status: 200 });
}
