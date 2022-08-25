<template>
    <b-container>
        <ul class="list d-flex align-items-center flex-row">
            <li cols="12" md="6" class=" list-item" v-for="(item, index) in dataSet.characters" :key="index">
                <span class="card list-container d-flex align-items-center justify-content-end" :style="{background: `url('./${item.image}') 50% 0% no-repeat #ddd`}">
                    <p class="text-content">
                        {{ item.name }}
                    </p>
                </span>
            </li>
        </ul>
    </b-container>
</template>

<style lang="scss" scoped>
    .list{
        max-width: 300px;
        padding: 0;
        margin: 0;   
        flex-wrap: wrap;
    }
    .list-item{
        list-style: none;
        padding: 0;
        margin: 10px;
    }
    .list-container{
        height: 100px;
        width: 100px;
        background-size: 90%!important;
    }
    .text-content{
        padding: 0;
        margin-bottom: 0;
        font-size: 20px;
        color: white;
        font-family: 'Edo SZ';
        text-shadow: 5px 5px black;
        -webkit-text-stroke: 0.1px black;
    }
    
</style>

<script>

    export default{
        props: {
            dataSet: {
                type: String,
                default: ''
            }
        }
    }
</script>