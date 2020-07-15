<template>
  <div class="container">
    <h2>Gráfico Relacionando Modelo</h2>
    <GChart type="PieChart" :data="propostasModelos" />
  </div>
</template>

<script>
import axios from "axios";
import { GChart } from "vue-google-charts";

export default {
  components: {
    GChart
  },
  data() {
    return {
      propostasModelos: [["Modelo", "Nº Propostas"]]
    };
  },
  mounted() {
    axios.get(this.$urlAPI + "/propostas/modelos").then(response => {
      const propostas = response.data;
      propostas.forEach(proposta => {
        this.propostasModelos.push([proposta.modelo, proposta.num]);
      });
    });
  }
};
</script>

<style scoped>
</style>