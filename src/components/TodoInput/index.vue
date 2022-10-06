<template src="./template.html"></template>

<script>
    export default {
        data() {
            return{
                todo: ''
            }
        },
        methods: {
            submitHandler() {
                if(!this.todo) return
                // store.mutations[ADD_TODO]要commit修改 state.todos資料
                this.$store.commit('ADD_TODOS', { content: this.todo, complete: false })
                this.todo = ''
            }
        }
    }
</script> 
