<template>
    <v-container class="d-flex justify-center align-center" style="height: 90vh;">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-text-field class="mx-auto" label="Search" hide-details="auto" outlined dense flat solo solo-inverted
                    rounded color="primary" variant="solo-inverted" prepend-inner-icon="mdi-magnify"
                    style="max-width: 400px; width: 100%;">
                </v-text-field>
                <v-row justify="center" class="mt-5">
                    <v-col cols="2">
                        <v-btn color="success" rounded="xl" size="large">
                            Search
                        </v-btn>
                    </v-col>
                    <v-col cols="3">
                        <v-btn color="primary" rounded="xl" size="large">
                            Feeling Lucky
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
  