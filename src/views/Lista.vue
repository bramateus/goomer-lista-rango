<template> 
  <div id="app">
    <section class="container-fluid" style="padding: 25px 0; background-color: #eff4f9">
      <div class="col-12">
        <div class="row">
          <div class="col-lg-2 col-xs-12"></div>
          <div class="col-lg-8 col-xs-12" style="display: flex">
            <!-- <h1 style="font-size: 3.8rem; color: #2e2e2e">Lista</h1> -->
            <img :src="restauranteInfo.image" alt="" style="width: 150px; min-height: 150px; object-fit: cover;">
            <div style="padding: 0 0 0 15px;">
              <h2 class="title-name">{{this.restauranteInfo.name}}</h2>
              <h5 class="title-name-sub">{{this.restauranteInfo.address}}</h5>

              <!-- {{this.restauranteInfo.hours}} -->
              <div v-for="(dates, i) in restauranteInfo.hours" :key="i">
                <!-- {{dates}} -->
                <p style="display: block; line-height: 1.5">{{diaSemana[restauranteInfo.hours[i].days[0]]}} à {{diaSemana[restauranteInfo.hours[i].days.slice(-1)[0] ]}}: <strong>de {{restauranteInfo.hours[i].from}} até {{restauranteInfo.hours[i].to}}</strong>
                </p>
              <!-- <span style="display: block; line-height: 1.5">Sábado: </span> -->
              <!-- <span style="display: block; line-height: 1.5">Domingos e Feriados: </span> -->
              </div>
            </div>
            
          </div>
          
          <div class="col-lg-2 col-xs-12"></div>
        </div>
      </div>
    <br>
      <div class="container-fluid">
            <div class="row">
              <div class="col-lg-2 col-xs-0"></div>
                <div class="col-lg-8 col-xs-12">
                  <form>
                    <div class="input-group">
                      <input style="padding: 25px" type="text" class="form-control search-style-top" placeholder="Buscar no cardápio" v-model="filter">
                      <div class="input-group-btn">
                        <div style="padding: 13px" class="btn btn-default search-style"><b-icon icon="search"></b-icon></div>
                      </div>
                    </div>
                  </form>
                </div>
              <div class="col-lg-2 col-xs-0"></div>
            </div>
        </div>

    </section>

    <!-- {{filter}}  -->


    <!-- {{retornoFilter}} -->
    <!-- {{retorno}} -->

    <!-- TESTE SEARCH -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-xs-0"></div>
        <div class="col-lg-8" v-if="filter">
        
          <!-- <div v-for="(item, index) in retornoFilter" :key="index" style="padding: 15px 0"> -->
            <!-- <h2>{{item.group}}</h2> -->

            
              <!-- <h3 style="font-weight: bolder; position: relative">{{item.group}}
              </h3>  -->

        <div name="fade" v-if="retornoFilter[0]">
            <div  class="row" style="padding: 10px 0 10px 0" >
              <div  class="col-lg-6 col-xs-0" v-for="(value, index) in retornoFilter" :key="index">
                
                <a class="media media-wrap" style="margin: 10px auto" @click.prevent="show(value)">

                  <figure class="media-left">
                      <div v-if="value.image">
                        <img :src="value.image" style='width:150px; height: 150px;object-fit: cover;' alt="">
                      </div>
                      <div v-else>
                        <img :src="require('@/assets/logo.png')" style='width:150px; height: 150px;object-fit: cover;' alt="">
                      </div>
                  </figure>
                  <div class="media-content">
                      <h5><b>{{value.name}}</b></h5>
                      <p>Lorem Ipsum dolor sit amend</p>
                      <p class="price">{{value.price | numeroReal}}</p>
                    <br>
                  </div>
                </a>
              </div>
            </div>
            </div>
            <div name="fade" v-else>
              <div style="text-align: center; margin: auto; color: red; padding: 40px 0">
                <h2>Nada encontado em sua pesquisa :(</h2>
              </div>
            </div>
           
            
                <!-- <div v-for="(item, index) in [item]" :key="index">
                  <h3>{{item.name}} dfd</h3> 
                    <div> 
                      <h1>{{item.name}}</h1> 
                    </div>    
                </div> -->
                
          <!-- </div> -->
        </div>
      </div> 
    </div>
  
     <!-- {{retorno}} -->

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-xs-0"></div>
        <div class="col-lg-8" v-if="retorno">
          <br>

          <div v-for="(item, index) in retorno" :key="index">
            <!-- @click="isActive = !isActive" -->
            <!-- v-show="isActive" -->
            <div @click="toggle(index)" style="cursor:pointer">

              <h3 style="font-weight: bolder; position: relative">{{item[0].group}}
               <span v-if="mostrar[index]" style="position: absolute; right: 0; padd"> -</span>
               <span v-else style="position: absolute; right: 0; padd">+</span>
            
              </h3> 
              
            </div>
            <!-- v-show="isActive" -->
            <hr style="background-color: #000">
            <transition name="fade">
            <div v-show="mostrar[index]" class="row" style="padding: 10px 0 10px 0" >
              <div  class="col-lg-6 col-xs-0" v-for="(value, index) in item" :key="index">
                <a class="media media-wrap" style="margin: 10px auto" @click.prevent="show(value)">

                  <figure class="media-left">
                      <div v-if="value.image">
                        <img :src="value.image" style='width:150px; height: 150px;object-fit: cover;' alt="">
                      </div>
                      <div v-else>
                        <img :src="require('@/assets/logo.png')" style='width:150px; height: 150px;object-fit: cover;' alt="">
                      </div>
                  </figure>
                  <div class="media-content">
                      <h5><b>{{value.name}}</b></h5>
                      <p>Lorem Ipsum dolor sit amend</p>
                      <p class="price">{{value.price | numeroReal}}</p>
                    <br>
                  </div>
                </a>
              </div>
            </div>
            </transition>
            
          <br>
          </div>
          

          <!-- <ul v-for="(item, index) in retorno" :key="index"> -->
          
            
            <!-- <span style="font-weight: bolder">{{item[0].group}}</span><br /> -->
            <!-- <li v-for="(value, index) in item" :key="index">
              {{value.name}}
            </li> -->
          <!-- </ul> -->

          

          <!-- <p v-for="(i, id) in retorno" :key="id"></p> -->

          <!-- <button @click="restauranteGroupUnique()">BUTTOM</button>
          <button @click="restauranteFilter()">BUTTOM 2</button> -->

          
            <!-- {{restauranteMenu}} -->

          <!-- <div class="row" style="padding: 10px 0 10px 0">
              <div  class="col-lg-6 col-xs-0" v-for="(restaurante, index) in restauranteMenu" :key="index">
                <article class="media media-wrap" style="margin: 10px auto">
                  <figure class="media-left">
                      <div v-if="restaurante.image">
                        <img :src="restaurante.image" style='width:125px; height: 125px;object-fit: cover;' alt="">
                      </div>
                      <div v-else>
                        <img :src="require('@/assets/logo.png')" style='width:125px; height: 125px;object-fit: cover;' alt="">
                      </div>
                  </figure>
                  <div class="media-content">
                      <h5><b>{{restaurante.name}}</b></h5>
                      <p>Lorem Ipsum dolor sit amend</p>
                    <br>
                  </div>
                </article>
              </div>
            </div> -->
             
            


        </div>

        
        <div class="row" style="padding: 10% 0; margin: 0 auto" v-else>
          <div class="col-lg-12 col-xs-0">
            <div class="half-circle-spinner">
              <div class="circle circle-1"></div>
              <div class="circle circle-2"></div>
            </div>
          </div>
        </div>


        <div class="col-lg-2 col-xs-0"></div>
      </div>



    </div>








      <modal name="my-first-modal" draggable=".window-header" :height="560"  :width="500" :adaptive="true"  styles='overflow: inherit; padding: 1px 0'>
        <button @click="hide" class="modal_fechar">X </button>
         <div   v-if="modalSelect.image" style="margin: 15px">
           <img :src="modalSelect.image" alt="" style="border-radius: 5px; width: 100%; max-height: 300px;object-fit: cover; ">
         </div>
         <div v-else style="margin: 15px">
           <img :src="require('@/assets/logo.png')" alt="" style="border-radius: 5px; width: 100%; max-height: 300px;object-fit: cover;">
         </div>




         <div style="padding-top: 3%; margin: 15px;">
           <h3 style="color: #202124;">{{modalSelect.name}}</h3>
 
            <div style="height: 75px">
              <span style="float:left; font-family: 'Nunito', sans-serif">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</span> 
              <span v-if="modalSelect.price" style="color: #009ca3; font-size: 25px; float: right">
                <b>{{modalSelect.price | numeroReal}}</b>
              </span> 
            </div>

         </div>

        <hr>

        <div>
          <div style="float:left; padding: 0 10px; border: 1px solid #ccc; margin-left: 15px;">
            <button v-if="carrinhoModal > 1"  @click="carrinhoModal--" style="border: 0; background-color: #fff; color: rgb(0, 156, 163);">
              <span  style="font-size:28px;">-</span>
            </button>
            <button v-else disabled style="border: 0; background-color: #fff; color: rgb(0, 156, 163);">
              <span style="font-size:28px; color: gray">-</span>
            </button>
              
            <span style="color: rgb(0, 156, 163);font-size: 23px">{{this.carrinhoModal}}</span>
            
            <button @click="carrinhoModal++" style="border: 0; background-color: #fff; color: rgb(0, 156, 163);">
              <span style="font-size:32px">+</span>
            </button>
          </div>

          <div v-if="modalSelect.price" style="float:right; padding: 0 15px">
            <button class="button-price">Adicionar {{totalCarrinho  | numeroReal}} </button>
          </div>
          <div v-else style="float:right; padding: 0 15px">
            <button disabled style="height: 35px; background-color: gray; color: #fff; border: 0;border-radius: 2px; width: 200px;">Não informado</button>
          </div>
        </div>
      </modal>  


  </div>
</template>

<script>
// import DataTable from '@/components/DataTable.vue'
// import ListaBuscar from '@/components/ListaBuscar.vue'



export default {
  name: 'Lista',
    components: {
    // DataTable,
    // ListaBuscar
  },
  data() {
      return{
        // nome2: this.$store.state.usuario, 
        filter: "",
        isActive: true,
        restauranteId: "",
        restauranteInfo: [],
        restauranteMenu: [],
        restauranteGroup:[],
        price: 50,
        data: "",
        diaSemana: {
          1: 'Domingo',
          2: 'Segunda',
          3: 'Terça',
          4: 'Terça',
          5: 'Quinta',
          6: 'Sexta',
          7: 'Sábado',  
        },
        uniqueCategory: [],
        indice: 0,
        retorno: [],
        modalSelect: [],
        mostrar: [],
        carrinhoModal: 1,
        totalCarrinho: 0


        
        
      }
    },
    computed: {

      retornoFilter() {
        // console.log('FilteredRows');
        return this.restauranteMenu.filter(row => {
          const nome = row.name.toString().toLowerCase();
          const searchTerm = this.filter.toLowerCase();
          return (
            nome.includes(searchTerm)
          );
        });
      }
      
   
    },
    methods: {

      toggle(index) {

        for (var i = 0; i<=this.uniqueCategory.length; i++) {

          if (index == i){
            this.$set(this.mostrar, i, !this.mostrar[i]);
          }
        }

      },

      show(item) {
        this.carrinhoModal = 1;
        this.totalCarrinho = item.price;
        this.modalSelect = item;
          this.$modal.show('my-first-modal',item);
      
          
            

      },
      hide () {
          this.$modal.hide('my-first-modal');
        
      
          
      },

   

      dataHoje() {
        
        // const moment = require('moment');

        //   let dayWee = moment().format('E');
        //   let dayWeek = parseInt(dayWee) + 1;
        //   return console.log(dayWeek);
      },
      
      fetchMenu() {
       fetch('http://challange.goomer.com.br/restaurants/'+this.restauranteId+'/menu')
        .then(r => r.json())
        .then(r => {
          return this.restauranteMenu = r;  
        }).catch(err => {
            console.error('Erro no fetchMenu', err)
          }).finally(() =>
            {
              this.restauranteGroupUnique();
              this.mostrar[0] = true;
            }
          )
      },

      unique(value, index, self) { 
        return self.indexOf(value) === index;
      },

      isBigEnough(value) {
        return value.group === this.teste[this.indice];   
      },

      restauranteGroupUnique() {

        let a = this.restauranteMenu.map(function(item){
          return item.group;
        });

        var unique = a.filter(this.unique);


        

        
        this.uniqueCategory = unique;

        // console.log(this.uniqueCategory);
        // console.log(this.restauranteMenu);

        const retornoMap = this.uniqueCategory.map((nomeAtual) => {
            // console.log(nomeAtual);

            let b = this.restauranteMenu.filter(e => e.group === nomeAtual);

            // return nomeAtual.toUpperCase();
            return b;
        })
        
       
        this.retorno = retornoMap;
        this.retornoFilter = retornoMap;
   
    

      },

      // restauranteFilter() {
      //    let a = this.restauranteMenu.filter(this.t);
      //   //  console.log(a);
      // },

      fechar_modal() {

      }
     
    },
    created() {

      this.restauranteId = this.$route.params.restauranteId;
      this.restauranteInfo = this.$route.params.restauranteInfo;
      
     
       this.fetchMenu();

      


      if(!this.restauranteId) {
        this.$router.push({
          path: '/', 
        });
      }
      
      // console.log(this.$route);
      // console.log(this.restauranteId);
      // console.log(this.restauranteInfo);
      
      // console.log(this.fetchMenu());

     
      // for (var i = 0; i<=this.uniqueCategory.length; i++) {
   
      //     console.log('caiu aqui');
      //     if (i == 0) {
      //        this.$set(this.mostrar, i, false);
      //     }
      //     this.$set(this.mostrar, i, !this.mostrar[i]);
      
      // }
     
     

      // setTimeout(() => {
        
        
       
      // }, 2000);
      
      
    },
    watch: {

      carrinhoModal(e) {

        let resultado = (e * this.modalSelect.price);
        // console.log(resultado);
        this.totalCarrinho = resultado;
      }

    },
    filters: {
      numeroReal(valor) {
        if (valor) {
          return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        } else {
          return 'Não informado';
        }
        
        // return valor;
      }
    }
    
}


</script>

<style>

body, ul, li, h1 ,h2, p, span {
  padding: 0px;
  margin: 0px;
  font-family: 'Nunito', sans-serif;
  font-weight: 100;
} 

  .price {
    color: green;
    font-size: 18px;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 30px 30px 0;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  a:hover {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  .media-wrap:hover {
    border-color: #cecece;
    transition: 0.4s ease-out;
    box-shadow: 0 0 10px rgb(33 33 33 / 50%);
    /* border: 5px  */
  }

  ul.reset,
  ul.reset li,
  ul.reset ul li {
    margin:0;
    padding: 0;
    text-indent: 0;
    list-style-type: 0;
  }

  .title-name {
    font-size: 1.5rem;
  }

  .title-name-su3 {
    font-size: 1.4rem;
  }

  .modal_fechar {
    border-radius: 50%;
    border: 2px solid #000;
    width: 40px;
    height: 40px;
    position: absolute;
    right: -10px;
    top: -10px; 
    font-size: 1rem;
    box-shadow: 0px 3px 4px rgba(0,0,0,.1), 0px 4px 10px rgba(0,0,0,.2);
    cursor: pointer;
  }

  .half-circle-spinner, .half-circle-spinner * {
    box-sizing: border-box;
  }

  .half-circle-spinner {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: relative;
    margin: 12% auto;
  }

  .half-circle-spinner .circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(60px / 10) solid transparent;
  }

  .half-circle-spinner .circle.circle-1 {
    border-top-color: #009ca3;
    animation: half-circle-spinner-animation 1s infinite;
  }

  .half-circle-spinner .circle.circle-2 {
    border-bottom-color: #009ca3;
    animation: half-circle-spinner-animation 1s infinite alternate;
  }

  .button-price:hover {
    background-color: #fff; /* Green */
    color: rgb(0, 156, 163);
    border: solid 1px rgb(0, 156, 163);
    transition: 0.3s ease-in;
    

  }

  .button-price {
    height: 35px; 
    background-color: rgb(0, 156, 163); 
    color: #fff; 
    border: 0;
    border-radius: 2px; 
    width: 200px;
  }

  

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }

  .fade-leave-to {
    transition: opacity .5s;
  }

  .vm--overlay {
    height: 100% !important;
  }

  
</style>
