<template>
    <div :v-model="value">
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value: null,
                condition: 4,
            }
        },
        methods: {
            checkValidation(){
                if(value === condition){
                    value += value
                }
            }
        }
    }

</script>