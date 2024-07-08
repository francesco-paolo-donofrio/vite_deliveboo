declare module 'braintree-web-drop-in' {
    interface Dropin {
      create(options: any, callback: (error: any, dropinInstance: any) => void): void;
      requestPaymentMethod(callback: (error: any, payload: any) => void): void;
    }
  
    const dropin: Dropin;
    export default dropin;
  }
  