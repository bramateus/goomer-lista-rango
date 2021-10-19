<template>
    <div>
    <section class="container-fluid" style="padding: 25px 0; background-color: #eff4f9">
      <div class="col-12">
        <div class="row" style="text-align: center">
          <div class="col-lg-3 col-xs-0"></div>
          <div class="col-lg-6 col-xs-12">
            <h1 style="font-size: 1.8rem; color: #2e2e2e; font-family: 'Nunito', sans-serif; padding-bottom: 15px">Bem-vindo ao Lista Rango.</h1>


            <form>
              <div class="input-group">
                <input style="padding: 25px" type="text" class="form-control search-style-top" placeholder="Buscar estabelecimento" v-model="filter">
                <div class="input-group-btn">
                  <div style="padding: 13px" class="btn btn-default search-style"><b-icon icon="search"></b-icon></div>
                </div>
              </div>
            </form>
            

          </div>
          <div class="col-lg-3 col-xs-12"></div>
        </div>
      </div>
    </section>

       <!-- {{situacao}} -->

    <!-- {{restaurantes}} -->
<!-- {{getTime()}} -->


    <section class="container-fluid" style="background-color: #fff">
      <div class="container">
        <div class="row" style="padding: 30px 0 10px 0" v-if="filteredRows[0]">
          <div class="col-lg-4 col-xs-0 col-md-6" v-for="(restaurante, index) in filteredRows" :key="`employee-${index}`">

            <!-- {{restaurante}} -->
            <!-- {{getTime2}} -->
            <!-- possoIrAoRestaurante -->
            <article class="media media-wrap" @click="redirectLista(restaurante.id)">
              <figure class="media-left">
                  <img :src="restaurante.image" style='width:150px; height: 150px;object-fit: cover;' alt="">
              </figure>
                <!-- <div class="bolha">
                  <span>{{situacao}}</span>
                </div> -->
              <div class="media-content">
                <h5><b>{{restaurante.name}}</b></h5> 
                <p>{{restaurante.address}}</p>
                <br>
              </div>
            </article>
            <!-- {{possoIrAoRestaurante(restaurante)}} -->
          </div>
        </div>

        

        <div class="row" style="padding: 30px 0 10px 0; text-align: center" v-else>
          <div class="col-lg-12 col-xs-0">
            <div class="half-circle-spinner">
              <div class="circle circle-1"></div>
              <div class="circle circle-2"></div>
            </div>
          </div>
        </div>

      

            <!-- <tbody>
              <tr v-for="(row, index) in filteredRows" :key="`employee-${index}`">
                {{row}}
             
              </tr>
            </tbody> -->

        <!-- <button @click="filteredRows">button</button> -->
      </div>
      <!-- END COL 12 -->
    </section>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
figure, figcaption {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;

}
/* HTML5 display-role reset for older browsers */
/* article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
} */
body {
	line-height: 1;
}

  a, span, .bolha {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .media-wrap {
    border: 2px solid #f5f5f5;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.4s ease-in;
    margin: 7px 0;
  }

  article.media-wrap:hover {
    box-shadow: 0 0 10px rgb(33 33 33 / 50%);
  }

  article.media-wrap {
    transition: box-shadow .4s;
  }

  .media-content {
    padding: 12px 10px 0 10px;
  }

  .bolha {
    border: 1px solid #2b0d61;
    background-color: #2b0d61;
    border-radius: 50%;
    position: absolute;
    right: -1.8%;
    top: -26px;
    text-align: center;
    width: 50px;
    height: 50px;
    /* padding: 8px 5px; */
    /* line-height: 13px; */
  }

  .bolha span {
    color: #fff;
    font-size: 10px;
    /* line-height: 10px; */
    /* margin: 32px 0 */
    position: absolute;
    top: 37%;
    left: 20%;
    
  }

  .search-style {
    background-color:#fff;
    border: 1px solid #fff;
    border-left-color: transparent;
    border-radius: 0;
    width: 60px
  }

  .search-style-top {

    border-right-color: transparent;
    background-color:#fff;
    border: 1px solid #fff;
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

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }

 


</style>
<script>

export default {

    name: "Home", 
    components: {
      // Buscar
    },
    data() {
      return {
        filter: "",
        restaurantes: [],
        datas: [],
        dia: {2:'segunda-feira',3: 'terça-feira', 4:'quarta-feira', 5:'quinta-feira', 6:'sexta-feira', 7:'sabado', 1:'domingo'},
        situacao: false,
        dateTime: '',
        
        }
    },
    filters: { 
      // numeroFormatado: (t) => t.toLocaleString("pt-BR", { style: "decimal", currency: "BRL" }) 
    },
    computed: {

    

      filteredRows() {
          // console.log('FilteredRows');
          return this.restaurantes.filter(row => {
            const nome = row.name.toString().toLowerCase();
            const searchTerm = this.filter.toLowerCase();
            return (
              nome.includes(searchTerm)
            );
          });
        }
        

    },
    
    methods: {

      pegarDia(contexto) {

        const dia = {2:'segunda-feira', 3:'terça-feira',4:'quarta-feira',5:'quinta-feira',6:'sexta-feira',7:'sabado',1:'domingo'};
        return dia[contexto];
      },

      pegarDiaObjectDate(contexto) {

        const dia = {1:'segunda-feira', 2:'terça-feira',3:'quarta-feira',4:'quinta-feira',5:'sexta-feira',6:'sabado',7:'domingo'};
        return dia[contexto];
      },

      highlightMatches(text) {
        const matchExists = text.toLowerCase();
        if (!matchExists) return text;
        const re = new RegExp(this.filter, "ig");
        return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
      },


      possoIrAoRestaurante(restaurante){

        const now = new Date;  
        // console.log(now);
        const diaHoje = this.pegarDiaObjectDate(now.getDay());
        // console.log(diaHoje); //segunda-feira
        // console.log('dadasds');
        // return diaHoje;

        // return restaurante.hours;
        // console.log(restaurante);

        // Verifica se o restaurante contem as informações de Abertura na API.
        if (restaurante.hours) {
            Object.entries(restaurante.hours).forEach(([key,value]) => {
              key;
              const from = value.from;
              const to = value.to;
   
              
              // console.log(to);
              Object.entries(value.days).forEach(([key,v]) => {
                // console.log(key+" "+": "+this.pegarDia(v));
                // console.log(v.days);
                key;

                  // Só verifica o horário de funcionamento se o dia de abertura do restaurante bater com o dia de hoje.
                  if (this.pegarDia(v) == diaHoje) {
                    // Verifica se esta dentro do horário de abertura e fechamento.
                    if (this.dateTime >= from && this.dateTime <= to) {
                    // return this.situacao = true;
                    // console.log("GOKU");
                    // this.situacao[1] = true
                    // console.log(this.restaurantes[0]);
                    //  console.log(this.getTime())
                    //  console.log(this.getTime())
                    } 

                  }
              });
        });
        }    
         

      },

        // diaDaSemana(dia){ 




        // },

      redirectLista(id) {
        // this.$router.push('lista') 
        this.$router.push({
          // path: '/lista?id=1', 
          name: 'lista', 
          params: {
              restauranteId:   id, 
              restauranteInfo: this.restaurantes[id-1]
          }
        });
      },
      
    

      

        send() {
          if(this.nome != '' && this.email != '' && this.cpf !== '') {
            // if(this.cpf.length !== 14) {
            //   this.$swal("Ops!", "Campo CPF não verificado.","warning");
            // }
            // console.log(this.cpf.length);
            this.$store.commit("UPDATE_LISTA", {
            "nome"       : this.nome, 
            "email"      : this.email,
            "cpf"        : this.cpf,
            "created_at" : this.getTime()
            });

            this.nome = ""
            this.email = ""
            this.cpf = ""
            this.endereco = ""
            this.estado = ""
            this.cep = ""
            this.cidade = ""

            this.$swal("Sucesso!","Novo Registro Adicionado Na Lista.","success");
          
          } else {
            this.$swal("Ops!", "Verifique os campos obrigatórios.","warning");
          }

        },

        getTime() {
          
          
          
          
          // let a = moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); // true
          // return moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); // true
          // return this.today('2010-10-20').isBetween('2010-10-19', '2010-10-25');
          // return this.today();
          // const now = moment('13-10-2020').format('DD-MM-YYYY').isValid();
          // return now;
          // var today = new Date();
          // // var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
          // // var time = today.getHours() + ":" + today.getMinutes() + ":" + 
          // // today.getSeconds();
          // var time = today.getHours() + ":" + today.getMinutes();
          // // var dateTime = date+' '+time;
          // var dateTime = time;
          // return this.dateTime = dateTime;
        },


        // async function fetchMovies() {
        //   const response = await fetch('/movies');
        //   // waits until the request completes...
        //   console.log(response);
        // }


        
       
        dropdown() {
            // $("html,body").animate({ scrollTop: document.body.scrollHeight }, "2000");
        },
        formatData() {
            // var t = this.periodo.split("T"),
            //     a = t[0].substr(8) + "/" + t[0].substr(5, 2) + "/" + t[0].substr(0, 4);
            // this.dataAtual = a;
        },
    },
    watch: {
      


    },
    created() {
      // console.log('sd');

      // this.restaurantes = [
      // {
      //   "id": 1,
      //   "name": "Cupcake para todos",
      //   "address": "Rua dos Sonhos, 310",
      //   "hours": [
      //     {
      //       "from": "09:00",
      //       "to": "18:00",
      //       "days": [
      //         2,
      //         3,
      //         4,
      //         5,
      //         6
      //       ]
      //     },
      //     {
      //       "from": "11:00",
      //       "to": "20:00",
      //       "days": [
      //         7,
      //         1
      //       ]
      //     }
      //   ],
      //   "image": "https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
      // },
      // {
      //   "id": 2,
      //   "name": "Comida de república",
      //   "address": "Rua, 890",
      //   "hours": [
      //     {
      //       "from": "12:00",
      //       "to": "15:00",
      //       "days": [
      //         2,
      //         3,
      //         4,
      //         5,
      //         6
      //       ]
      //     },
      //     {
      //       "from": "19:00",
      //       "to": "23:00",
      //       "days": [
      //         2,
      //         3,
      //         4,
      //         5
      //       ]
      //     },
      //     {
      //       "from": "19:00",
      //       "to": "02:00",
      //       "days": [
      //         6,
      //         7,
      //         1
      //       ]
      //     }
      //   ],
      //   "image": "https://images.unsplash.com/photo-1520209268518-aec60b8bb5ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2b04f771779f9ce281cb3e6035f360e&auto=format&fit=crop&w=884&q=80"
      // },
     
      
      //   ];
     
      fetch("https://challange.goomer.com.br/restaurants")
        .then((t) => t.json())
        .then((t) => {
          
          this.restaurantes = t;
          // console.log(this.restaurantes);
          }).catch(err => {
            console.error('Request failed', err)
          })

    },

 
    //     fetch("https://challange.goomer.com.br/restaurants")
    //             .then((t) => t.json())
    //             .then((t) => {
    //               //  t.UF.forEach(element => {
    //               //     document.getElementById('select-estado').innerHTML  += '<option value='+element.sigla+'>'+element.sigla+' - '+element.nome+'</option>' 
    //               //  });
    //               console.log(t);
    //               this.restaurantes = [
    //                                 {
    //                                   "id": 1,
    //                                   "name": "Cupcake para todos",
    //                                   "address": "Rua dos Sonhos, 310",
    //                                   "hours": [
    //                                     {
    //                                       "from": "09:00",
    //                                       "to": "18:00",
    //                                       "days": [
    //                                         2,
    //                                         3,
    //                                         4,
    //                                         5,
    //                                         6
    //                                       ]
    //                                     },
    //                                     {
    //                                       "from": "11:00",
    //                                       "to": "20:00",
    //                                       "days": [
    //                                         7,
    //                                         1
    //                                       ]
    //                                     }
    //                                   ],
    //                                   "image": "https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
    //                                 },
    //                                 {
    //                                   "id": 2,
    //                                   "name": "Comida de república",
    //                                   "address": "Rua, 890",
    //                                   "hours": [
    //                                     {
    //                                       "from": "12:00",
    //                                       "to": "15:00",
    //                                       "days": [
    //                                         2,
    //                                         3,
    //                                         4,
    //                                         5,
    //                                         6
    //                                       ]
    //                                     },
    //                                     {
    //                                       "from": "19:00",
    //                                       "to": "23:00",
    //                                       "days": [
    //                                         2,
    //                                         3,
    //                                         4,
    //                                         5
    //                                       ]
    //                                     },
    //                                     {
    //                                       "from": "19:00",
    //                                       "to": "02:00",
    //                                       "days": [
    //                                         6,
    //                                         7,
    //                                         1
    //                                       ]
    //                                     }
    //                                   ],
    //                                   "image": "https://images.unsplash.com/photo-1520209268518-aec60b8bb5ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2b04f771779f9ce281cb3e6035f360e&auto=format&fit=crop&w=884&q=80"
    //                                 },
    //                                 {
    //                                   "id": 3,
    //                                   "name": "Comida de mãe",
    //                                   "image": "https://images.unsplash.com/photo-1527756898251-203e9ce0d9c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6571e314f2e91127c49108ecaabffdaf&auto=format&fit=crop&w=1054&q=80",
    //                                   "address": "Rua da minha casa, 417"
    //                                 }
    //                               ];
                
    //             });
    // },


}
</script>
