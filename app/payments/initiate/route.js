import { Cashfree } from "cashfree-pg";
export async function POST(req) {
  if (
    process.env.APP_ID === undefined ||
    process.env.SECRET_KEY === undefined
  ) {
    return Response.json({ error: "ENV error xD " + process.env.NODE_ENV });
  }
  Cashfree.XClientId = process.env.APP_ID;
  Cashfree.XClientSecret = process.env.SECRET_KEY;
  Cashfree.XEnvironment =
    process.env.NODE_ENV === "development"
      ? Cashfree.Environment.SANDBOX
      : Cashfree.Environment.PRODUCTION;

  try {
    const body = await req.json();
    console.log("Body: ");
    console.log(body);

    const data = await Cashfree.PGCreateOrder("2023-08-01", {
      order_amount: body.amount,
      order_currency: body.currency,
      customer_details: {
        customer_id: body.id,
        customer_name: body.name,
        customer_phone: body.phone,
      },
    }).then((response) => {
      const a = response.data;
      console.log(a);
      return a;
    });
    console.log("PAYMENT_SESSION_ID TANISHQ", data.payment_session_id);
    if (data) {
      return Response.json(
        { payment_session_id: data.payment_session_id },
        { status: 200 },
      );
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 }); // Handle errors gracefully
  }
}
