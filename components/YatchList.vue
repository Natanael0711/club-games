<template>
    <b-row>
        <b-col cols="12" lg="12">
            <button @click="checkValidation">Só teste</button>
            <div>
                <table>
                    <tr v-for="(row, indexRow) in matrix" :key="indexRow">
                        <td v-for="(col, indexCol) in row" :key="indexCol" >
                            {{col}}
                        </td>
                    </tr>
                </table>
            </div>
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

                    <tr v-for="(number, index) in numbersTable" :key="index" :v-model="checkValidation">
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
                easter: 'oi',
                matrix: 
                [
                    [1, 2, 3, 4, 5], 
                    [2, 1, 4, 5, 3], 
                    [3, 5, 2, 4, 1],
                ],
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
            checkValidation(params){
                
                let arr = [];
                let getValue = 0;
                
                [...Array(6).keys()].forEach((condition) =>{
                    let change = 0;
                    if(params == condition){

                        this.matrix.forEach((row) =>{
                            row.forEach((col) => {
                                if(col = condition){
                                    change = change + condition
                                }
                            })
                        })
                        // getValue = condition
                    }
                    arr.push(change);
                })
                
                let conditionArray = arr.filter((item) => item > 0)
                return this.total = conditionArray[0]
                // console.log(conditionArray);
            }

            // FullHouse Validation
            // checkFullHouse(){
            //     // this.matrix[2][1] = 9;
            //     const full = false;
            //     let arr = [];
            //     let getOcurrences3 = 0;

            //     // Possibilidades de numeros
            //     [...Array(6).keys()].forEach((index) => {
            //         // console.log('Numero requerido: ' + index);

            //         // Quantidade de ocorrencias de um numero
            //         let changeBy3 = 0;

            //         // row = tentativas por turno (3 row = 3 tentativas)
            //         this.matrix.forEach((row) => {
            //             // console.log('Dados contidos: ' + row);

            //             // col = dados de uma tentativa (5 dados)
            //             row.forEach((col) =>{
            //                 // console.log('Dado individual: ' + col);

            //                 if(col == index) {
            //                     changeBy3++;
                           
            //                 }
            //                 // console.log(col)
            //                 getOcurrences3 = changeBy3
            //             })
            //         })
            //         // console.log(index)
            //     })
                
            //     arr.push(getOcurrences3)

            //     const hasThree = arr.filter((item) => item == 3 )
                
            //     if(hasThree.length >= 2) {
            //         const hasTwo  = arr.filter((item) => item == 2)
            //     }

                

            //     console.log(hasThree)

            //     return full
            // }
        }
    }

</script>