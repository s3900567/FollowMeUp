import Stripe from 'stripe';
import * as dotenv from 'dotenv';
import { success, error } from '../utils/Response';
dotenv.config();

const PaymentController = {
  getConfig: async (req, res) => {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    const paymentIntent = await Stripe(process.env.STRIPE_SECRET_KEY).paymentIntents.create({
      amount: 1000,
      currency: 'eur',
      metadata: { integration_check: 'accept_a_payment' },
    });
    const register = {
      publishableKey,
      clientSecret: paymentIntent.client_secret,
    };
    return success(res, register, 'Payment config generated successfully');
  },
};

export default PaymentController;
