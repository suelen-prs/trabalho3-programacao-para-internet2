<template>
  <div class="container">
    <h2>Gráfico Relacionando Modelos por Propostas</h2>
    <GChart
       type="PieChart"
       :data="carrosPropostas"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
import axios from 'axios'

export default {
  components: {
    GChart
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      carrosPropostas: [['Carros', 'Nº Propostas']]
     }
  },
  mounted() {
      axios.get(this.$urlAPI + '/carros')
           .then(response => {
               const carros = response.data;
               carros.forEach(carro => {
                  if (carro.num_propostas > 0) {
                      this.carrosPropostas.push([carro.modelo, carro.num_propostas])                    
                  }
               });
           });
  }
};
</script>

<style scoped>
</style>