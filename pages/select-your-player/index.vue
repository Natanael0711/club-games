<template>
    <b-container>
        <b-row>
            <b-col cols="12" lg="4" class="d-flex align-items-center flex-column">
                <ListPlayers :dataSet="dataSet" :on-change="(profile) => {player1 = profile}"/>
                <button :class="{'btn-success': player1Ready && player1 != 0, 'btn-danger': !player1Ready || player1 == 0}" class="custom-button" @click="player1Ready = !player1Ready">Pronto</button>
            </b-col>

            <b-col cols="12" lg="4" class="d-flex justify-content-center flex-column">
                <div cols="12" lg="12" class="card-container">
                    <figure>
                        <img :src="player1.image" alt="">
                    </figure>
                    <h1>
                        {{player1.name}}
                    </h1>
                </div>
                <div cols="12" lg="12" class="vs-fight">
                    <h1>
                        VS
                    </h1>
                </div>
                <div cols="12" lg="12" class="card-container">
                    <figure>
                        <img :src="player2.image" alt="">
                    </figure>
                    <h1>
                        {{player2.name}}
                    </h1>
                </div>
            </b-col>

             <b-col cols="12" lg="4" class="d-flex align-items-center flex-column">
                <ListPlayers :dataSet="dataSet" :on-change="(profile) => {player2 = profile}"/>
                <button 
                    :class="{
                        'custom-button': true, 
                        'btn-success': player2Ready && player2 != 0,
                        'btn-danger': !player2Ready || player2 == 0
                    }" 
                    @click="player2Ready = !player2Ready"
                >
                    Pronto
                </button>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-if="
                player2Ready && 
                player1Ready && 
                player2 != 0 && 
                player1 != 0" 
                cols="12" 
                lg="12" 
                class="d-flex align-items-center flex-column"
            >

                <button @click="() => getMyOptionsDice()" class="btn btn-lg btn-primary">Iniciar batalha</button>
                
            </b-col>

            <b-col v-else cols="12" lg="12" class="d-flex align-items-center flex-column">
                <h1 style="color: white; font-size: 15px">
                    Aguardando Jogadores...
                </h1>
            </b-col>
        </b-row>
    </b-container>
</template>

<style lang="scss" scoped>
    .card-container{
        display: flex;
        align-items: center;
        padding: 10px 20px;
        height: 200px;
        max-width: 500px;
        width: 100%;
        background-color: #ffffff;
        border-radius: 13px;
        font-family: 'Edo SZ';
            figure{
                height: 180px;
                img{
                    height: 100%;
                }
            }
        h1{
            padding-left: 20%;
            margin: 0;
        }
    }
    .vs-fight{
        text-align: center;
        h1{
            font-size: 100px;
            color: #ffffff;
            font-family: 'Edo SZ';
            text-shadow: 5px 5px black;
            -webkit-text-stroke: 0.2px black;
        }
    }

    .custom-button{
        border: 0;
        border-radius: 13px;
        max-width: 150px;
        width: 100%;
        padding: 5px 0;
        margin: 20px 0 0;
    }
</style>

<script>
    import axios from 'axios'

    export default{
        data(){
            return {
                dataSet: '',
                player1: '',
                player2: '',
                player1Ready: false,
                player2Ready: false,
                // dice1: null,
                // dice2: null,
            }
        },
        async fetch(){
            const { data } = await axios.get( 'content/BattleCharacters.json');
            this.dataSet = data;
        },
        methods: {
            justLog(text){
                console.log(text);
            },
        
            getMyOptionsDice() {
                this.$router.push({ path: '/battle-page', query: { 
                    player1: this.player1.name,
                    player2: this.player2.name
                } })
            }
        }
    }
</script>