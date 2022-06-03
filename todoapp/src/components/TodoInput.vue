<template>
    <v-container fluid>
        <v-row class="mt-6" justify="center">
            <v-col cols="4">
                <v-text-field @change="todoTextChg" :value="todoText" outlined></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-btn @click="addTodo" block x-large color="primary">Add</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid';

export default {
    data() {
        return {
            todoText: ''
        }
    },
    methods: {
        ...mapActions(['actionsAddTodo']),
        todoTextChg(e) {
            this.todoText = e;
        },
        addTodo() {
            this.actionsAddTodo({
                id: v1(),
                title: this.todoText
            });
            this.todoText = '';
        }
    },
}
</script>

<style>

</style>