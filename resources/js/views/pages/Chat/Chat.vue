<template>
<div>Chat</div>
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

    <div class="chat">
        <div class="chat-title">
            <h1>Justin Moreyl</h1>

            <figure class="avatar">
                <img/></figure>
        </div>
        <div class="messages">
            <div class="messages-content"></div>
        </div>
        <div class="message-box">
                <message-container />
                <input-message />
            <button type="submit" class="message-submit">Send</button>
        </div>
    </div>
</template>

<script>

import MessageContainer from "./MessageContainer";
import InputMessage from "./InputMessage";
export default {
    name: "Chat",
    components: {
        MessageContainer,
        InputMessage
    }
}
</script>

<style lang="scss" >
@mixin center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@mixin ball {
    @include center;
    content: '';
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, .5);
    z-index: 2;
    margin-top: 4px;
    animation: ball .45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
}

.chat {
    @include center;
    width: 300px;
    height: 80vh;
    max-height: 500px;
    z-index: 2;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(0, 0, 0, .2);
    background: rgba(0, 0, 0, .5);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}


/*--------------------
Chat Title
--------------------*/
.chat-title {
    flex: 0 1 45px;
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    text-transform: uppercase;
    text-align: left;
    padding: 10px 10px 10px 50px;

    h1, h2 {
        font-weight: normal;
        font-size: 10px;
        margin: 0;
        padding: 0;
    }

    h2 {
        color: rgba(255, 255, 255, .5);
        font-size: 8px;
        letter-spacing: 1px;
    }

    .avatar {
        position: absolute;
        z-index: 1;
        top: 8px;
        left: 9px;
        border-radius: 30px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        margin: 0;
        padding: 0;
        border: 2px solid rgba(255, 255, 255, 0.24);

        img {
            width: 100%;
            height: auto;
        }
    }
}


/*--------------------
Messages
--------------------*/
.messages {
    flex: 1 1 auto;
    color: rgba(255, 255, 255, .5);
    overflow: hidden;
    position: relative;
    width: 100%;

    & .messages-content {
        position: absolute;
        top: 0;
        left: 0;
        height: 101%;
        width: 100%;
    }


    .message {
        clear: both;
        float: left;
        padding: 6px 10px 7px;
        border-radius: 10px 10px 10px 0;
        background: rgba(0, 0, 0, .3);
        margin: 8px 0;
        font-size: 11px;
        line-height: 1.4;
        margin-left: 35px;
        position: relative;
        text-shadow: 0 1px 1px rgba(0, 0, 0, .2);



        .avatar {
            position: absolute;
            z-index: 1;
            bottom: -15px;
            left: -35px;
            border-radius: 30px;
            width: 30px;
            height: 30px;
            overflow: hidden;
            margin: 0;
            padding: 0;
            border: 2px solid rgba(255, 255, 255, 0.24);

            img {
                width: 100%;
                height: auto;
            }
        }

        &.message-personal {
            float: right;
            color: #fff;
            text-align: right;
            background: var(--color-grey-light-1);
            border-radius: 10px 10px 0 10px;

            &::before {
                left: auto;
                right: 0;
                border-right: none;
                border-left: 5px solid transparent;
                background: var(--color-grey-dark-1);
                bottom: -4px;
            }
        }

        &:last-child {
            margin-bottom: 30px;
        }

        &.new {
            transform: scale(0);
            transform-origin: 0 0;
            animation: bounce 500ms linear both;
        }


    }
}


/*--------------------
Message Box
--------------------*/
.message-box {
    flex: 0 1 40px;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    padding: 10px;
    position: relative;

    & .message-input {
        background: none;
        border: none;
        outline: none!important;
        resize: none;
        color: rgba(255, 255, 255, .7);
        font-size: 11px;
        height: 17px;
        margin: 0;
        padding-right: 20px;
        width: 265px;
    }


    & .message-submit {
        position: absolute;
        z-index: 1;
        top: 9px;
        right: 10px;
        color: #fff;
        border: none;
        background: var(--color-grey-light-2);
        font-size: 10px;
        text-transform: uppercase;
        line-height: 1;
        padding: 6px 10px;
        border-radius: 10px;
        outline: none!important;
        transition: background .2s ease;
        cursor: pointer;

        &:hover {
            background: var(--color-dark-light-1);
        }
    }
}


</style >
