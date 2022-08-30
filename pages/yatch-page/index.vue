<template>
        <b-container>
        <b-row>
            <b-col>
                <button @click="checkRepeatedDices">Logar dados</button>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <YatchList :condition="4" :valueProp="dice1"/>
            </b-col>
        </b-row>
        <b-row>

            <b-col lg="4" v-for="(item, index) in [...Array(5).keys()]" :key="index">
                <!-- <DiceComponent 
                    :active="turnOnOff"
                    :diceFace="dice1"
                    :on-change="(face) => {checkRepeatedDices(face)}"
                />
                {{ diceArray }} -->
                <DiceComponent 
                    class="dice"
                    :active="turnOnOff"
                    :diceFace="dice1"
                    :on-change="(face) => {diceArray[round][index] = face}"
                />
                {{ diceArray }}
            </b-col>

        </b-row>
        <b-row>
            <b-col lg="12">
                <button class="btn btn-lg btn-danger"
                    @click="showMatrix('Lets dye')"
                >
                    Log
                </button>
                <!-- <button class="btn btn-lg btn-danger"
                    @click="showMatrix(diceArray[round][index])"
                >
                    Log
                </button> -->
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="12">
                <button class="btn btn-lg btn-danger"
                    @click="turnOnOff = !turnOnOff, timer()"
                >
                    Play dice!
                </button>
            </b-col>
        </b-row>
    </b-container>
</template>

<style lang="scss" scoped>
    .center-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>

<script>

    export default {
        data(){
            return {
                dice1: null,
                dice2: null,
                dice3: null,
                dice4: null,
                dice5: null,
                round: 0,
                diceArray: [],
                turnOnOff: false
            }
        },
        methods: {
            timer(){
                this.time = 0;
                setTimeout(() => {
                    this.time = 1
                }, 3600)
            },
            // checkRepeatedDices(diceFace){
            //     const dices = [];
            //     dices.push(diceFace)
                // dices.forEach((dice) =>{
                //     console.log(dice);
                // })
            // },
            checkRepeatedDices(){
                const dices = document.querySelectorAll('.dice');
                dices.forEach((dice) =>{
                    console.log(dice);
                })
            },
            showMatrix(hoi){
                console.log(hoi)
            }
        }
    }
</script>
