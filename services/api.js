import axios from 'axios'

export default{
    async fetch(){
        const { data } = await axios.get( 'content/BattleCharacters.json');
        this.dataSet = data;
    },
}