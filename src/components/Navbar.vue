<template>
    <nav>
        <v-toolbar app>
            <!-- burger -->
            <v-btn class="default v-btn--simple" icon @click="drawer = !draver">
                <v-icon>mdi-view-list</v-icon>
            </v-btn>

            <!-- toolbar content -->
            <v-toolbar-title class="text-uppercase grey--text">
                <span>Vuetify</span>
                <span class="font-weight-light"> Demo</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- sign out -->
            <v-btn flat x-small>
                <span>Sign out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>
        
        <!-- side bar -->
        <v-navigation-drawer v-model="drawer" app class="success">
            <v-list dense nav>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/80.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="orange--text">John Doe</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    router
                    :to="item.to"
                    item>
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
        
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data(){
            return {
                drawer: false,
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/home' },
                    { title: 'Photos', icon: 'mdi-image', to: '/photos'},
                    { title: 'About', icon: 'mdi-help-box', to: '/about' },
                ]
            }
        }
    }
</script>

<style>

</style>