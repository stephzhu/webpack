<template>

    <div>
        <h1>{{message}}</h1>
        <button>按钮</button>
        <Cpn></Cpn>
    </div>

</template>

<script>
    import Cpn from './Cpn.vue'
    export default {
        name: "App",
        data(){
            return{
                message:'你好啊'
            }
        },
        components:{
            Cpn
        }

    }


</script>

<style scoped>
    #app{
        color:green;
    }
</style>

