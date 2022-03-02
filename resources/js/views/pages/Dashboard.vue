<template>
    <div>
        <nav>
            <ul class="navigation">
                <nav>
                    <ul class="navigation">
                        <router-link to="/profile"> <li><a href="">Profile</a></li></router-link>
                        <router-link to="/settings"> <li><a href="">Settings</a></li></router-link>
                        <router-link to="/chat"> <li><a href="">Chat</a></li></router-link>
                    </ul>
                    <div class="buttons">
                        <my-button @click="logout" v-if="loggedIn">Logout </my-button>
                    </div>
                </nav>
            </ul>
            <div class="buttons">
                <my-button @click="logout" v-if="loggedIn">Logout</my-button>
            </div>
        </nav>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Dashboard",
    data: () => ({}),
    created() {
        this.checkUserState();
    },
    computed: {
        ...mapGetters({
            loggedIn: 'auth/loggedIn',
            userDetails: "auth/userDetails",
        }),
    },
    methods: {
        ...mapActions({
            logout: 'auth/logout',
            checkUserState: 'auth/setLoggedInstate',
        }),

    },

}
</script>

<style lang="scss">
nav {
    margin: 30px;
    background-color: var(--color-grey-dark-1);
}

.navigation {
    list-style: none;
    float: left;

    li {
        display: inline-block;
        margin-left: 30px;

        &:first-child {
            margin: 0;
        }
    }
}

.buttons {
    float: right;
}


</style>
