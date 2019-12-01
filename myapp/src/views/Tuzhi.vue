
<template>
    <ion-app>
        <ion-header translucent style="margin-top:10px">
            <ion-toobar>
                    <ion-buttons>
                            <b>
                                <ion-button float slot="start" style="color:black;text-align:right;" >
                                    <ion-icon name="arrow-back"></ion-icon>
                                </ion-button> 
                                </b>
                                <b><ion-title class="title_msg" style="text-align:center;font-size:35px;">{{title}}</ion-title></b>
                                 </ion-buttons>
                            
        </ion-toobar>
     </ion-header>

        <ion-contend  align-sefl fullscreen >
            <ion-list>
                <li v-for="item in items" :key="item.version">
                    
                    <ion-card>
                        <!-- 卡片标题 -->
                          <ion-item  slot="start">
                            <p style="font-size: 16px">{{item.title}}</p>
                            <ion-button style="color:blue;text-align:right">
                                    <ion-icon name="attach"></ion-icon>
                                
                            </ion-button>
                        </ion-item>
                           
                        <!--栈式结构展示数据-->
                        <ion-grid  style="--ion-grid-padding:0px;">
                            <ion-row align-self: flex-start>
                                <ion-col size="5" align-self-center class="arrow-left">
                                    <span style="font-weight: 200;color: black">版本：</span>
                                    <span>{{item.version}}</span>
                                </ion-col>

                                  <ion-col size="5" align-self-center class="arrow-left">
                                    <span style="font-weight: 200;color: black">适用更改：</span> 
                                    <span>{{item.adaptChange}}</span>
                                </ion-col>
                             
                            </ion-row>
                        </ion-grid>
                    </ion-card>

                </li>
            </ion-list>
        </ion-contend>

    </ion-app>
</template>

<script lang="ts">
    export default {
        methods:{
             test(){
            window.console.log(1)
        }
        },
        name:'blueprint',
        data() {
            return{
            title: "图纸",
            items: [
                {
                    title: '571A0000-400-001 安装图',
                    version: 'E',
                    adaptChange: 'E1,E2'
                },
                {
                    title: '571A0000-400-001 安装图',
                    version: 'F',
                    adaptChange: 'F1,001CF'
                },
                {
                    title: '571A0000-400-001 安装图',
                    version: 'G',
                    adaptChange: 'G1,G3'
                }
            ]
        }
    },
    components:{

    }
    }
</script>
<style>
    ion-col.arrow-left{
       
        margin-left:20px; 
        --ion-grid-column-padding:0px;
        text-align:left;
        color:black ;
    }
    ion-col.arrow-right{
        
        --ion-grid-column-padding:0px;
        text-align:left;
        color:black ;
    }
</style>
