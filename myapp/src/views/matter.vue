
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
                        </ion-item>
                           
                        <!--栈式结构展示数据-->
                        <ion-grid  style="--ion-grid-padding:0px;">
                            <ion-row align-self: flex-start>
                                <ion-col size="5" align-self-center class="arrow-left">
                                    <span style="font-weight: 200;color: black">C/L：</span>
                                    <span>{{item.a}}</span>
                                </ion-col>
                                  <ion-col size="5" align-self-center class="arrow-left">
                                    <span style="font-weight: 200;color: black">P/C：</span> 
                                    <span>{{item.b}}</span>
                                </ion-col>
                            </ion-row>
                            <ion-row align-self: flex-start>
                                <ion-col size="5" align-self-center class="arrow-left">
                                    <span style="font-weight: 200;color: black">QTY：</span>
                                    <span>{{item.c}}</span>
                                </ion-col>
                                  <ion-col size="5" align-self-center class="arrow-left">
                                    <span style="font-weight: 200;color: black">M/C：</span> 
                                    <span>{{item.d}}</span>
                                </ion-col>
                            </ion-row>
                            <ion-row align-self: flex-start>
                                <ion-col size="5" align-self-center class="arrow-left">
                                    <span style="font-weight: 200;color: black">B/S NO：</span>
                                    <span>{{item.e}}</span>
                                </ion-col>
                                 
                            </ion-row>
                        </ion-grid>
                    </ion-card>

                </li>
            </ion-list>
        </ion-contend>

        <ion-footer>
            <ion-button expand="full">
                验收扫码零件
            </ion-button>
        </ion-footer>
    </ion-app>
</template>

<script lang="ts">
    export default {
     
        
        name:'blueprint',
        data() {
            return{
            title: "物料",
            items: [
                {
                    title: 'NAS671-4 螺母',//C/l
                    a: '-',//C/l
                    b:'PCB',//P/C
                    c:'6',//QTY
                    d:'210000012659',//M/C
                    e:'0000176046'//B/S No
                },
            {
                    title: '572A4000-016-001 埋头垫圈',
                    a: 'R1-B',
                    b:'FMC',
                    c:'2',
                    d:'410000012732',
                    e:'0000176046'
                }, 
                 {
                    title: '0000176046',
                    a: 'C',
                    b:'JAC',
                    c:'1',
                    d:'310000006549',
                    e:'0000176046'
                },
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
