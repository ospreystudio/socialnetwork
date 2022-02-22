<template>
<h1>UserProfile</h1>
    <div class="container">
        <div>
            <nav>
                <ul class="navigation">
                    <router-link to="/profile"> <li><a href="">Profile</a></li></router-link>
                    <router-link to="/settings"> <li><a href="">Setting</a></li></router-link>
                    <li> <a href="#"> My Book</a>     </li>
                </ul>
                <div class="buttons">
                    <my-button @click="logout" v-if="loggedIn">Logout </my-button>
                </div>
            </nav>
        </div>
        <div class="card">
            <div class="border"></div>
            <div class="avatar">
                <img src="https://i.ibb.co/bHXKq3B/photo-5.png" alt="" />
            </div>
            <hr />
            <div class="stats">
                <h2> Name: {{currentUser.name }}</h2>
                <hr />
                <h2>Email: {{ currentUser.email }}</h2>
                <hr />
                <h2> Joined: {{ currentUser.created_at}}</h2>
                <hr />



            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "UserProfile",

    data: () => ({}),
    created() {
        this.$store.dispatch('auth/currentUser')
        this.checkUserState();
    },
    computed: {
        ...mapGetters({
            loggedIn: 'auth/loggedIn',
            // isAdmin: 'auth/isAdmin'
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
    }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Vidaloka|Oswald:400,300);

.container {
    height: 100vh;
    width: 100%;
    overflow: auto;

}

.card {
    position: relative;
    height: 520px;
    width: 300px;
    background: #fff;
    margin: 100px auto 0;
    overflow: hidden;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
    hr {
        margin: 0 30px;
    }
}

.border {
    position: absolute;
    top: 13px;
    left: 13px;
    height: 490px;
    width: 270px;
    border: 3px double #aaa;
}

.avatar {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    border: 1px solid #aaa;
    overflow: hidden;
    margin: 50px auto 30px;
    img {
        width: 200px;
        margin-left: -10px;
    }
}
.stats {
    font-family: 'Oswald', sans-serif;
    padding: 0;
    height: 250px;
    width: 300px;
    div {
        padding: 10px 0 0 25px;
    }
    p {
        margin: 5px;
    }
    h2 {
        text-align: center;
        font-family: 'Vidaloka', cursive;
        font-size: 2.2em;
        margin: 5px 0 10px;
    }
}

</style>
