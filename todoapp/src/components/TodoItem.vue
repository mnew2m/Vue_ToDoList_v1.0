<template>
    <v-container fluid>
        <v-row class="mb-3" justify="center" align="center">
            <v-col cols="4">
                <h3 v-if="!editing">{{ todo.title }}</h3>
                <v-text-field
                    v-else
                    v-model="todoText"
                    label="Edit"
                    outlined
                    dense
                    hide-details
                ></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-btn @click="modTodo(todo)" block large color="primary">
                    {{ editing ? 'Save' : 'Edit' }}
                </v-btn>
            </v-col>
            <v-col cols="1">
                <v-btn @click="actionsDelTodo(todo.id)" block large color="error">Delete</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        todo: {}
    },
    data() {
        return {
            todoText: '',
            editing: null
        }
    },
    methods: {
        ...mapActions(['actionsDelTodo', 'actionsModTodo']),
        modTodo(todo) {
            this.editing = !this.editing;
            if(this.editing) this.actionsModTodo(todo);
            else todo.title = this.todoText;
        }
    },
}
</script>

<style>

</style>