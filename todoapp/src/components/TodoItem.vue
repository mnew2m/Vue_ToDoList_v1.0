<template>
    <v-container fluid>
        <v-row class="mb-3" justify="center" align="center">
            <v-col cols="4">
                {{ todo.title }}
            </v-col>
            <v-col cols="1">
                <v-btn block color="primary">Edit</v-btn>
            </v-col>
            <v-col cols="1">
                <v-btn block color="error">Delete</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        todo: {}
    }
}
</script>

<style>

</style>