<template>
  <div>
    <button @click="initializeBraintree">Paga con Braintree</button>
    <div id="dropin-container"></div>
  </div>
</template>

<script>
import axios from 'axios';
import {store} from '../store';
import dropin from 'braintree-web-drop-in';

export default {
  methods: {
    async initializeBraintree() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/generate-client-token');
        console.log('Client token:', response);
        this.clientToken = response.data.clientToken;
        

        if (!this.clientToken) {
          console.error('Client token not received');
          return;
        }

        dropin.create({
          authorization: this.clientToken,
          container: '#dropin-container'
        }, (error, dropinInstance) => {
          if (error) {
            console.error('Drop-in UI creation error:', error);
          } else {
            // Drop-in UI is ready
            dropinInstance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
              if (requestPaymentMethodErr) {
                console.error('Request payment method error:', requestPaymentMethodErr);
              } else {
                // Send nonce to your server
                this.processPayment(payload.nonce);
              }
            });
          }
        });
      } catch (error) {
        console.error('Error fetching client token:', error);
      }
    },

    async processPayment(nonce) {
      try {
        const response = await axios.post('/api/process-payment', { nonce });
        console.log('Payment successful:', response.data);
        // Handle success (e.g., show confirmation to user)
      } catch (error) {
        console.error('Error processing payment:', error);
        // Handle error (e.g., show error message to user)
      }
    }
  }
}
</script>
