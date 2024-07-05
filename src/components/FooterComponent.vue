<template>
    <footer >
    <div class="footer-content">
      <div class="footer-section">
      </div>
      <div class="footer-section">
        <h5 class="text-uppercase">Contatti</h5>
        <small>Email: <a href="info@deliveboo.com">info@deliveboo.com</a></small><br>
        <small>Tel: +39 123456789</small>
      </div>
      <div class="footer-section">
        <h3 class="text-uppercase">Seguici anche su</h3>
        <div><i class="fa-brands fa-facebook"></i> | <i class="fa-brands fa-tiktok"></i> | <i class="fa-brands fa-instagram"></i></div>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: 'FooterComponent',
    }
</script>

<style lang="scss" scoped>
footer {
  background-color: $background-footer;
  color: white; 
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .footer-section {
    margin: 10px 0;
    
    h3 {
      margin-bottom: 10px;
      font-size: 1.2rem;
    }

   a {
     color: #fff;
     margin: 0 5px;
   }

   .fa-brands {
    cursor: pointer;
   }
  
  @media (min-width: 768px) {
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
      max-width: 1200px;
    }
}

}
}

</style>