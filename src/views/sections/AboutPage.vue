<template>
    <div 
      id="about-page"  
      class="py-10 my-10"
    >
      <v-container>
        
        <p>Com o objetivo de ajudar os utentes resolvemos criar o centrosdesaude.pt, uma plataforma online que reúne uma lista de centros de saúde do distrito de Lisboa.
O nosso motor de busca interativo permite-lhe ver quais os centros de saúde que tem disponível na região onde se encontra e ainda aceder aos seus contactos.
A gestão desta página está a cargo da Angry Ventures, no entanto não poderá ser responsabilizada pela informação divulgada.</p>
        <h2 
          class="mb-6 mt-12 text-center"
          >
            O que pode encontrar no Centros de Saúde.pt
        </h2>
        <p>
          Precisamente porque sabemos que nem sempre é fácil encontrar respostas para as suas questões sobre centros de saúde e cuidados de saúde em geral, quisemos juntar tudo nesta plataforma.
Aqui, pode não só encontrar um perfil para cada centro de saúde, com informações e contactos, como pode saber a opinião de outros utentes sobre o serviço e condições e ainda deixar o seu comentário sobre a sua experiência.
Para além disto, pode encontrar respostas a perguntas frequentes sobre cuidados de saúde, e manter-se informado com dicas e alertas através do nosso blog.
Para se manter informado sobre tudo o que a ver com cuidados de saúde, não precisa de sair da nossa plataforma:
        </p>

        <v-parallax  class="py16" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>

        <h2 
          class="mb-6 pt-16 text-center"
          >
            O que pode encontrar no Centros de Saúde.pt
        </h2>
        <p>
          Precisamente porque sabemos que nem sempre é fácil encontrar respostas para as suas questões sobre centros de saúde e cuidados de saúde em geral, quisemos juntar tudo nesta plataforma.
Aqui, pode não só encontrar um perfil para cada centro de saúde, com informações e contactos, como pode saber a opinião de outros utentes sobre o serviço e condições e ainda deixar o seu comentário sobre a sua experiência.
Para além disto, pode encontrar respostas a perguntas frequentes sobre cuidados de saúde, e manter-se informado com dicas e alertas através do nosso blog.
Para se manter informado sobre tudo o que a ver com cuidados de saúde, não precisa de sair da nossa plataforma:
        </p>


        <h2 
          class="text-center py-10 mt-10"
          >
            Galeria
        </h2>
        <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
      </v-container>
    </div>   
  
</template>



<script>
  export default {
    name: 'AbouPage',
    
    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>

<style>

h2{
  font-size: 35px;
  
}
</style>
