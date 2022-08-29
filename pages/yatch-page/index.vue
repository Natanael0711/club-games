<template>
    <b-container>
        <!-- <b-row>
            <b-col>
                <button @click="checkRepeatedDices">Logar dados</button>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <YatchList :condition="4" :valueProp="dice1"/>
            </b-col>
        </b-row> -->
        <b-row>

            <b-col lg="4" v-for="(item, index) in [...Array(1).keys()]" :key="index">
                <DiceComponent 
                    class="dice"
                    :active="turnOnOff"
                    :diceFace="dice1"
                    :on-change="(face) => {diceArray[round][index] = face}"
                />
            </b-col>
            
            <!-- <b-col lg="4" class="center-container">
                <DiceComponent 
                    class="dice"
                    :active="turnOnOff"
                    :diceFace="dice1"
                    :on-change="(face) => {dice1 = face}"
                />

              
            </b-col>
            <b-col lg="4" class="center-container">
                <DiceComponent 
                    class="dice"
                    :active="turnOnOff"
                    :diceFace="dice1"
                    :on-change="(face) => {dice2 = face}"
                />

            </b-col>

            <b-col lg="4" class="center-container">
                <DiceComponent 
                    class="dice"
                    :active="turnOnOff"
                    :diceFace="dice1"
                    :on-change="(face) => {dice3 = face}"
                />

            </b-col>

            <b-col cols="6" lg="6" class="center-container">
                <DiceComponent 
                    class="dice"
                    :active="turnOnOff"
                    :diceFace="dice1"
                    :on-change="(face) => {dice4 = face}"
                />

            </b-col>

            <b-col cols="6" lg="6" class="center-container">
                <DiceComponent 
                    class="dice"
                    :active="turnOnOff"
                    :diceFace="dice1"
                    :on-change="(face) => {dice5 = face}"
                />

            </b-col> -->
        </b-row>
        <b-row>
            <b-col lg="12">
                <button class="btn btn-lg btn-danger"
                    @click="turnOnOff = !turnOnOff, timer(), showMatrix()"
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
        checkRepeatedDices(){
            const dices = document.querySelectorAll('.dice');
            dices.forEach((dice) =>{
                // console.log(dice.diceface);
            })
            // console.log(dices);
        },
        showMatrix(){
            console.log(this.diceArray)
        }
    }
}

</script>