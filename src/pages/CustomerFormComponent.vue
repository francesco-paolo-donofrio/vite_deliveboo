<template>
    <div class="container mt-5">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="firstName" class="form-label">Nome*</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Inserisci il tuo nome"
            v-model="form.firstName"
            @input="validateField('firstName'), validateRequiredFields()"
            :class="{ 'is-invalid': errors.firstName }"
            required
          />
          <div class="invalid-feedback" v-if="errors.firstName">{{ errors.firstName }}</div>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Cognome*</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Inserisci il tuo cognome"
            v-model="form.lastName"
            @input="validateField('lastName'), validateRequiredFields()"
            :class="{ 'is-invalid': errors.lastName }"
            required
          />
          <div class="invalid-feedback" v-if="errors.lastName">{{ errors.lastName }}</div>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Telefono*</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            placeholder="Inserisci il tuo numero di telefono"
            v-model="form.phone"
            @input="validateField('phone'), validateRequiredFields()"
            :class="{ 'is-invalid': errors.phone }"
            required
          />
          <div class="invalid-feedback" v-if="errors.phone">{{ errors.phone }}</div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email*</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Inserisci la tua email"
            v-model="form.email"
            @input="validateField('email'), validateRequiredFields()"
            :class="{ 'is-invalid': errors.email }"
            required
          />
          <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Indirizzo*</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Inserisci l'indirizzo"
            v-model="form.address"
            @input="validateField('address'), validateRequiredFields()"
            :class="{ 'is-invalid': errors.address }"
            required
          />
          <div class="invalid-feedback" v-if="errors.address">{{ errors.address }}</div>
        </div>
        <button id="submit-btn" type="submit" class="btn btn-primary">Invia Ordine</button>
        <div class="pt-3">*Campi obbligatori</div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: ""
        },
        errors: {
          firstName: null,
          lastName: null,
          phone: null,
          email: null,
          address: null
        }
      };
    },
    methods: {
      validateField(field) {
        const patterns = {
          firstName: /^[a-zA-Z\s,.'-]+$/,
          lastName: /^[a-zA-Z\s,.'-]+$/,
          email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          phone: /^[0-9]{10}$/,
          address: /^[a-zA-Z0-9\s,.'-]+$/
        };
  
        if (!this.form[field]) {
          this.errors[field] = "Questo campo è obbligatorio.";
          return;
        }
  
        if (patterns[field] && !patterns[field].test(this.form[field])) {
          this.errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} non valido.`;
        } else {
          this.errors[field] = null;
        }
      },
      validateRequiredFields() {
        Object.keys(this.form).forEach(field => {
          if (!this.form[field]) {
            this.errors[field] = "Questo campo è obbligatorio.";
          }
        });
      },
      validateForm() {
        this.validateRequiredFields();
  
        if (Object.values(this.errors).every(error => !error)) {
          return true; // Form valido
        } else {
          return false; // Form non valido
        }
      },
      submitForm() {
        this.validateRequiredFields();
        
        if (this.validateForm()) {
          console.log("Form inviato:", this.form);
          // Se le validazioni vanno a buon fine, esegui la chiamata API per inviare i dati al server
          // axios.post(`${this.store.apiBaseUrl}/customer-form`, this.form)
          //   .then((res) => {
          //     console.log(res.data.status);
          //     // Pulisci il form dopo l'invio
          //     this.form = {
          //       firstName: "",
          //       lastName: "",
          //       phone: "",
          //       email: "",
          //       address: ""
          //     };
          //   })
          //   .catch(error => {
          //     console.error(error);
          //   });
        } else {
            this.errors[field] = "Questo campo è obbligatorio.";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  .is-invalid {
    border-color: #dc3545;
  }
  #submit-btn {
    background-color: #F28B0C;
    border-color: #F28B0C;
  }
  </style>
  