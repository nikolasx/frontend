<template>
    <div class="container-fluid">
        <div class="header">
            <div class="wrapper container">
                <img class="logo-icon" src="../public/imgs/logo.png">
            </div>
        </div>
        <div class="content">
            <div class="wrapper container">
                <img src="../public/imgs/login_01.png">
                <div class="login-form"></div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .header {
        margin: 0 -15px;
        padding: 20px 0;

        .wrapper {
            height: 50px;

            .logo-icon {
                height: 50px
            }
        }
    }

    .content {
        margin 0 -15px;
        background-color rgb(73, 151, 236)

        .wrapper {
            position relative;
            height: 570px;

            img {
                float: left
                margin-left -120px;
            }

            .login-form {
                position absolute
                width 352px
                height: 352px
                background-color #ffffff
                top: 50%
                margin-top -176px
                right: 68px
            }
        }
    }


</style>

<script>
    export default {
        data(){
            return {}
        }
    }
</script>