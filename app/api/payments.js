import Razorpay from "razorpay";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const razor = new Razorpay({
  key_id: process.env.RZP_KEY_ID || "",
  key_secret: process.env.RZP_KEY_SECRET || "",
});

export const paymentRouter = createTRPCRouter({
  createPayment: publicProcedure
    .input(
      z.object({
        amount: z.number().min(0),
        currency: z.optional(z.string()).default("INR"),
      })
    )
    .mutation(async ({ input }) => {
      let orderId = "";
      razor.orders.create(
        { amount: input.amount, currency: input.currency },
        function (err, order) {
          if (err) console.error(err);
          console.log(order);
          orderId = order.id;
        }
      );
    }),
});
