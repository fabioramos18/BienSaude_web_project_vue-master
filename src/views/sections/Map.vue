<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.8086420745994!2d-9.204785084813386!3d38.791020960812844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd59cd9bb2f5%3A0x92bd39e0a41a2b81!2sR.%20Mal.%20Gomes%20da%20Costa%2C%20Fam%C3%B5es!5e0!3m2!1spt-PT!2spt!4v1613522255892!5m2!1spt-PT!2spt" 
      style="border:0; display: block;"
      tabindex="0"
      width="100%"
      
    />
  </base-section>
</template>

<script>
  export default {
    name: 'SectionMap',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
