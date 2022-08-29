<template>
    <b-row>
        <b-col cols="12" lg="12">
            <button @click="checkValidation(condition)">Só teste</button>
            <div>
                <table>
                    <tr>
                        <td>
                            Objetivos:
                        </td>
                        <td>
                            Pontos:
                        </td>
                    </tr>


                    <tr v-for="(number, index) in numbersTable" :key="index" :v-model="checkValidation(condition)">
                        <td >
                            Faces de {{number}}
                        </td>
                        <td v-if="total === number">
                            {{total}}
                        </td>
                        <td v-else>
                            0
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Livre de Regras
                        </td>
                        <td>
                            Num
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Full House
                        </td>
                        <td>
                            Num
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4 de uma face
                        </td>
                        <td>
                            Num
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Aposta menor
                        </td>
                        <td>
                            Num
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Aposta maior
                        </td>
                        <td>
                            Num
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Yatch
                        </td>
                        <td>
                            Num
                        </td>
                    </tr>
                </table>
            </div>
        </b-col>
    </b-row>
</template>

<style lang="scss" scoped>
    td{ 
        text-align: center;
        border: 1px solid black;
        background: white;
        padding: 10px 30px;
    }
</style>

<script>
    export default {
        data(){
            return {
                total: 0,
                value: 0,
                checkItems: [],
                numbersTable: [1, 2, 3, 4, 5, 6],
            }
        },
        props: {
            condition: {
                type: Number,
                default: 0,
            },
            valueProp: {
                type: Number,
                default: 0,
            },
        },
        methods: {
            checkValidation(l){
                this.value = this.valueProp
                this.checkItems = [...Array(l).keys()]
                this.numbersTable.forEach((number) => {
                    if(this.value % number === 0){
                    // for(let i = 0; i < this.checkItems.length; i++){
                    //     this.value = this.value + this.condition
                    // }
                    this.total = this.value
                    console.log(this.value)
                }
                })
                
            }
        }
    }

</script>