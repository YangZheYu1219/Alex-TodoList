<template src="./template.html"></template>

<script>
export default {
    data() {
        return {
            edit: null
        }
    },
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
        },
        editHandler() {
            this.edit = this.todo.content
        },
        submitHandler() {
            //如果edit被編輯成空字串，執行刪除func，取消則返回原值
            //如果沒加return 原本的值會被刪除
            if(!this.edit) return this.removeHandler()
            this.$store.commit('UPDATE_TODOS', {
                index: this.index,
                 data: {
                    content: this.edit,
                    complete: this.todo.complete
                }
            })
            //如果不把edit清掉 input就無法關閉
            this.edit = null
        },
        cancelHandler() {
            this.edit = null
        }
    }
}
</script> 