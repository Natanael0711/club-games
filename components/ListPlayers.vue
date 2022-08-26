<template>
    <b-container>
        <ul class="list d-flex justify-content-center flex-row">
            <li cols="12" md="6" class=" list-item" v-for="(item, index) in dataSet.characters" :key="index" @click="onChange(item)">
                <span class=" list-container d-flex align-items-end justify-content-center" :style="{background: `url('./${item.image}') 50% 0% no-repeat #ddd`}">
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
        border-radius: 13px;
        height: 100px;
        width: 100px;
        background-size: 90%!important;
        box-shadow: 0px 4px 8px rgba(31, 31, 31, 0.24);
    }
    .text-content{
        padding: 0;
        margin-bottom: 0;
        font-size: 20px;
        color: white;
        font-family: 'Edo SZ';
        text-shadow: 5px 5px black;
        -webkit-text-stroke: 0.2px black;
    }
    
</style>

<script>

    export default{
        props: {
            dataSet: {
                type: Object,
                default: {}
            },
            onChange: {
                type:  Function,
                default: () => {}
            }
        }
    }
</script>