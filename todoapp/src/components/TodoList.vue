<template>
    <v-container>
        <v-row v-for="todo in allTodos"
               :key="todo.id"
        >
            <TodoItem :todo='todo'/>
        </v-row>
    </v-container>
</template>

<script>
import TodoItem from '@/components/TodoItem';
import { mapGetters } from 'vuex';

export default {
    components: {
        TodoItem
    },
    computed: {
        ...mapGetters(['allTodos'])
    },
}
</script>

<style>

</style>