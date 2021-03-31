<template>

    <div>
        <h1>{{message}}</h1>
        <button>按钮</button>
    </div>

</template>

<script>
    export default {
        name: "App",
        data(){
            return{
                message:'我是子组件'
            }
        }

    }
</script>

<style scoped>
    #app{
        color:green;
    }
</style>