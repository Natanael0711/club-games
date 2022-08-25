<template>
    <b-container>
        <b-row>
            <b-col cols="12" lg="4" class="center-block">
                <ListPlayers :dataSet="dataSet"/>
            </b-col>
            <b-col cols="12" lg="4" class="center-block">content</b-col>
             <b-col cols="12" lg="4" class="center-block">
                <ListPlayers :dataSet="dataSet"/>
                content
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return {
                dataSet: '',
            }
        },
        async fetch(){
            const { data } = await axios.get( 'content/BattleCharacters.json');
            this.dataSet = data;
        },
    }
</script>