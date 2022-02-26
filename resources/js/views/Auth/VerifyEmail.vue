
<template>
    <div>
        <h1>Verifying email</h1>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "VerifyEmail",
    methods: {
        ...mapActions({
            verifyEmail: 'auth/verifyEmail'
        })
    },
    created() {
        this.verifyEmail(this.$route.query);
        console.log(this.$route.query)

    },

    mounted () {

    }
}
</script>

<style scoped>
</style>
