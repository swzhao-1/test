
<template>

    <ion-app >
        <ion-header >
                <ion-toolbar >
                    <ion-title color="primary" >商飞</ion-title>
                </ion-toolbar>
        </ion-header>

        <ion-content fullscreen>
            <ion-item>
                <ion-label position="floating">工号</ion-label>
                <ion-input   value="" placeholder="请输入工号" ref="i1"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label position="floating">密码</ion-label>
                <ion-input type="password" placeholder="请输入密码" value=""  ref="i2"></ion-input>
            </ion-item>


                <ion-list>
                    <ion-list-header>性别</ion-list-header>

                      <ion-item>
                          <ion-label >性别</ion-label>

                          <ion-select placeholder="选择">
                              <ion-select-option value="f">女</ion-select-option>
                              <ion-select-option value="m">男</ion-select-option>
                          </ion-select>
                      </ion-item>


                </ion-list>


            <ion-item>
                <ion-label position="floating">时间</ion-label>
                <ion-datetime   displayFormat="MMMM" value="2019-12-15T13:47:20.789" max="2030-12-31">

                </ion-datetime>
            </ion-item>


            <div class="ion-padding">
                <ion-item>
                    <ion-label>阅读并同意<a href="Home.vue">公司规定</a></ion-label>
                    <ion-checkbox   checked @click="chec"></ion-checkbox>
                </ion-item>
            </div>


            <div class="ion-padding">

                <ion-toobar>
                    <ion-button expand="block" type="submit" class="ion-no-margin" @click="login">登录</ion-button>
                </ion-toobar>






            </div>
        </ion-content>
    </ion-app>
</template>

<script lang="ts">
    export default {
        name: 'Login',
        data () {
            return {
                account:'',
                pwd:'',
                flag:true
            }
        },
        methods: {
            chec(){
                this.flag=!this.flag
            },
            login() {
                this.account=this.$refs.i1.value
                this.pwd=this.$refs.i2.value
                if(this.account==''){
                    return this.$ionic.alertController
                        .create({
                            header: '错误',
                            subHeader: '请输入工号',
                            message: '不输入工号无法登录',
                            buttons: ['好的，我这就去输入'],
                        })
                        .then(a => a.present())
                }
                if(this.pwd==''){
                    return this.$ionic.alertController
                        .create({
                            header: '错误',
                            subHeader: '请输入密码',
                            message: '不输入密码无法登录',
                            buttons: ['好的，我这就去输入'],
                        })
                        .then(a => a.present())
                }
                if(this.flag==false){
                    return this.$ionic.alertController
                        .create({
                            header: '错误',
                            subHeader: '请阅读并同意公司规定',
                            message: '不阅读或同意公司规定无法登录',
                            buttons: ['好的，我这就去阅读并同意'],
                        })
                        .then(a => a.present())
                }
                if(this.pwd=='123'&&this.account=='500729'){
                    window.console.log(2);
                    this.$router.push('/Tuzhi')
                }else {
                    return this.$ionic.alertController
                        .create({
                            header: '错误',
                            subHeader: '工号密码错误',
                            message: '不输入正确的工号密码无法登录',
                            buttons: ['好的，我这就去输入'],
                        })
                        .then(a => a.present())
                }
            }
        }
    }
</script>
<style>
    :root {
        font-stretch: expanded;
        /*--ion-safe-area-top: 20px;*/
        --ion-safe-area-bottom: 22px;
    }

</style>