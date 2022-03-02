<template>
    <div class="container">
        <div>
            <h1>Settings</h1>
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
        </div>

        <div class="settings-page">
            <form class="form">
                <div class="card-title">User Details</div>
                <my-input type="text" placeholder="new user name" v-model="user.name"/>
               <my-button @click.prevent="changeDetails" > Save </my-button>

            </form>
            <validation-errors v-if="validationErrors" :errors="validationErrors"></validation-errors>
            <div class="settings-page">
            <form class="form">
                <div class="card-title">Change Password</div>
                <my-input type="text" placeholder="old password" v-model="user.oldPassword"/>
                <my-input type="text" placeholder="new password" v-model="user.newPassword"/>
                <my-input type="text" placeholder="new password confirmation" v-model="user.newPassword_confirmation"/>
                <my-button @click.prevent="changePassword" > Change Password </my-button>
            </form>
            </div>
      </div>
<div>
       </div>
</div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "Settings",
    data: () => ({
        user: {
            name: '',
            oldPassword: "",
            newPassword: "",
            newPassword_confirmation: "",
        }
    }),
    created() {
        this.$store.dispatch('auth/currentUser')
        this.checkUserState();
    },
    computed: {
        ...mapGetters({
            loggedIn: 'auth/loggedIn',
            invalidCredentials: 'auth/invalidCredentials',
            validationErrors: 'auth/errors'
        }),
        currentUser: {
            get() {
                return this.$store.state.auth.userDetails
            },
        },
    },
    methods: {
        ...mapActions({
            logout: 'auth/logout',
            checkUserState: 'auth/setLoggedInstate',
        }),

        changePassword() {
            this.$store.dispatch('auth/changePassword', this.user)
        },
        changeDetails() {
            this.$store.dispatch('auth/updateDetails', this.user)
        }
    }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Vidaloka|Oswald:400,300);

.card-title {
    font-weight: 700;
    text-align: center;
    font-size: 25px;
    text-shadow: 0 5px 8px rgba(0,0,0,.65);
    transform: translateZ(0px);
    overflow: hidden;
    margin: 0;
    width: 100%;
}

nav {
    ul {

        background:var( --color-gray-dark-2);
        list-style:none;
        text-align: right;
        .name{
            text-align:left;
            color:#ffffff;
        }
    }
    li {
        display:inline-block;

    }
    a{
        color:#ffffff;
        display:inline-block;
        padding:15px 15px;
        text-decoration:none;
    }
    a:hover{
        background:var(--color-gray-dark-1);
    }
}



</style>
