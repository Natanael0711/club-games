<template>
    <div>
        <b-container>
        <b-row>
            <b-col class="center-container text-show">
                <h1>Página de batalha</h1>
            </b-col>
        </b-row>


        <b-row >
            <b-col lg="4" class="center-container">
                <div class="d-flex" v-for="(item, index) in dataSet.characters" :key="index">
                    <figure v-if="item.name == $route.query.player1" style="height: 200px">
                        <img :src="item.image" alt="" style="height: 100%">
                    </figure>
                </div>
            </b-col>
            
            <b-col lg="4" class="center-container text-show">
                VS
            </b-col>

            <b-col lg="4" class="center-container">
                <div class="d-flex" v-for="(item, index) in dataSet.characters" :key="index">
                    <figure v-if="item.name == $route.query.player2" style="height: 200px">
                        <img :src="item.image" alt="" style="height: 100%">
                    </figure>
                </div>
            </b-col>
        </b-row>


        <b-row>

            <b-col lg="4" class="center-container">

                <DiceComponent 
                    :active="turnOnOff"
                    :diceFace="dice1"
                    :on-change="(face) => {dice1 = face}"
                />

            </b-col>


            <b-col lg="4" class="center-container text-show">
                <p>
                    {{dice1}} | {{dice2}}
                </p>

                <div v-if="time != 0" style="margin-bottom: -16%">
                    <div v-if="dice1 > dice2">
                        <h1>
                            Jogador 1 venceu!
                        </h1>
                    </div>
                    <div v-if="dice1 < dice2">
                        <h1>
                            Jogador 2 venceu!
                        </h1>
                    </div>
                    <div v-if="dice1 == dice2">
                        <h1>
                            Empate
                        </h1>
                    </div>
                </div>

                <button class="btn btn-lg btn-danger" 
                    @click="turnOnOff = !turnOnOff, timer()"
                    style="margin-top: 40%;"
                >
                    Play dice!
                </button>

            </b-col>


            <b-col lg="4" class="center-container">

                <DiceComponent 
                    :active="turnOnOff"
                    :diceFace="dice2"
                    :on-change="(face) => {dice2 = face}"
                />

            </b-col>

        </b-row>

        <!-- <b-row>
            <b-col >
                
            </b-col>
        </b-row> -->
    </b-container>
        <div style=" width: 99vw; position: absolute; overflow: hidden; top: 0%; z-index: -2;">
            <Fire style="width: 115vw; left: -5%;"/>
        </div>
    </div>
</template>
<!-- <script>

import Fire from '@/components/Fire.vue'

export default {
    components: {
        Fire
    }

}
</script> -->

<style lang="scss" scoped>
    .center-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .btn{
        margin-top: 20px
    }
    .text-show{
        font-size: 40px;
        color: #fff;
        font-family: 'Edo SZ';
        text-shadow: 5px 5px black;
        -webkit-text-stroke: 0.2px black;
    }
</style>

<script>

    import axios from 'axios'

    export default {
        data(){
            return {
                turnOnOff: false,
                dataSet: '',
                dice1: null,
                dice2: null,
                time: 0,
            }
        },
         async fetch(){
            const { data } = await axios.get( 'content/BattleCharacters.json');
            this.dataSet = data;
        },
        mounted() {
            console.log(this.$route.query.player1);
            console.log(this.$route.query.player2);
        },
        methods: {
            timer(){
                this.time = 0;
                setTimeout(() => {
                    this.time = 1
                }, 3600)
            }
        }
    }
</script>