<template>
    <div class="dice">
        <h1>{{getMySpans(diceFace)}}</h1>
    </div>
</template>

<style lang="scss" scoped>
    .dice{
        height: 200px;
        width: 200px;
        background: white;
        display: flex;
        font-size: 40px;
        flex-wrap: wrap;
        border-radius: 15px;
        box-shadow: 5px 5px 3px rgb(182, 182, 182);
        h1{ 
            padding: 0 39px;
            margin: auto;
            line-height: 1.6;
        }
    }
</style>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: false,
            },
            onChange: {
                type: Function,
                default: () => {}
            },
        },
        watch: {
            active: function(value, oldvalue){
                if(value != oldvalue) this.randomDice()
            }
        },
        data(){
            return {
                diceFace: 0,
            }
        },
        methods: {
            getMySpans(l) {
                const arr = [...Array(l).keys()]
                let dots = "";
                arr.forEach(i => {
                    dots+= " ⚫ ";
                })

                return dots
            },
            randomDice(){
                let choice = 0;
                const interval = setInterval(() => {
                    this.diceFace = Math.floor( Math.random() * 6 + 1);

                    if(choice >= 50) {
                        clearInterval(interval)
                    }

                    choice++;
                    this.onChange(this.diceFace)
                }, 70)
            }
        }
    }
</script>