<template src="./template.html"></template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true
        }
    },
    computed: {
        todo() {
            return this.$store.state.todos[this.index]
        },
        complete: {
            get() {
                return this.todo.complete
            },
            set(val) {
                this.$store.commit('UPDATE_TODOS', {
                    index: this.index,
                    data: {
                        content: this.todo.content,
                        complete: val
                    }
                })
            }
        }
    },
    methods: {
        removeHandler() {
            if(confirm(`是否要刪除 ${this.todo.content} ? `))
            this.$store.commit('REMOVE_TODOS', this.index)
        }
    }
}
</script> 