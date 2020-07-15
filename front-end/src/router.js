import Vue from 'vue'
import VueRouter from 'vue-router'

import CadastroCarros from './components/CadastroCarros.vue'
import FormCarros from './components/FormCarros.vue'
import FormLogin from './components/FormLogin.vue'
import GraficoCarrosMarcas from './components/GraficoCarrosMarcas.vue'
import GraficoCarrosModelos from './components/GraficoCarrosModelos.vue'
import GraficoCadastros from './components/GraficoCadastros.vue'
import PropostaCarros from './components/PropostaCarros.vue'
import HomePage from "./components/HomePage.vue";
import EnviarProposta from "./components/EnviarProposta.vue";
import GraficoModelosPropostas from "./components/GraficoModelosPropostas.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/cadcarros', component: CadastroCarros },
        { path: '/formcarros', component: FormCarros },
        { path: '/grafcarrosmarcas', component: GraficoCarrosMarcas },
        { path: '/grafcarrosmodelos', component: GraficoCarrosModelos },
        { path: '/grafcadastros', component: GraficoCadastros },
        { path: '/login', component: FormLogin },
        { path: '/propostas', component: PropostaCarros },
        { path: '/proposta/:id', name: 'proposta', component: EnviarProposta },
        { path: '/grafmodelospropostas', component: GraficoModelosPropostas}


    ]
})