<template>
    <div id="Contract">

        <div id="myCanvas" class="hetong">
            <html>
                <head>
                    <title>合同</title>
                </head>
                <body v-if="item.state != 1" style ="font-family: SimSun;" v-for="(item,index) in entrust" :key="index">
            <div><strong>委托经营管理合同</strong></div>
            <div id="wt" style="text-align: right;">{{bianhao}}</div>
            <div style="width:100%; height:20px"> </div>
            <div class="jia" style="line-height: 20px;">
                <div class="jia1"><span>甲方：</span><span>{{user.name}}</span></div>
                <div class="jia1"><span>身份证号：</span><span>{{user.identnumber}}</span></div>
                <div class="jia1"><span>联系电话：</span><span>{{user.phonenumber}}</span></div>
            </div>
            <div style="width:100%; height:20px"> </div>
            <div class="yi" style="line-height: 20px;">
                <div class="jia1"><span>乙方：</span><span>苏州厚木资产管理有限公司</span></div>
                <div class="jia1"><span>营业执照号码：</span><span>91320000MAIM90CB41</span></div>
                <div class="jia1"><span>法定代表人：</span><span>程谦</span></div>
                <div class="jia1 zhu"><span>住所：</span><span class="suo">苏州市相城区元和街道华元路818号101室</span></div>
                <div class="jia1"><span>联系电话：</span><span>0512-66836665</span></div>
            </div>
            <div class="falv">
    <p>根据《中华人民共和国合同法》及有关法律、法规之规定，甲、乙双方在平等、自愿和协商—致的基础上，特就甲方委托乙方管理经营甲方自有物业之事宜订立本合同，以资共同信守。</p>
    <p>第一条 物业概况</p>
    <p> 1.1委托经营管理物业位于江苏省苏州市相城区“<span class="guan">方圆里</span>”项目<span class="guan">{{item.shopNo.substring(0,1)}}</span>馆地上<span class="guan">{{item.shopNo.substring(1,2)}}</span>层<span class="guan">{{item.shopNo.substring(2,5)}}</span>号单元（以下简称该物业）。</p>
    
    <p> 1.2甲方交付乙方的物业应符合政府部门规定的有关要求，并适合用于本合同所约定的经营用途。</p>
    <div style="width:100%; height:30px"> </div>
    <p> 第二条 委托内容</p>
    <p> 2.1甲方将本合同所述之物业委托乙方经营管理。委托经营管理期间，甲方授权乙方以自己的名义从事该物业经营管理所涉的一切活动，包括但不限于以乙方名义将该物业出租予第三方、代甲方向税务局申请开具发票、代为缴纳相应税费，且乙方有权将甲方委托的全部或部分事项转委托予第三方。</p>
    
    <p> 2.2乙方可根据市场需求，自行确定和调整该物业的经营布局、装修、改造、布置等正常营业所需之全部事宜，无须另行征得甲方同意，发生的费用由乙方承担。</p>
    
    <p> 2.3乙方可独立全权独立处理一切与该物业经营管理有关的一切内外事务。</p>

    <div style="width:100%; height:20px"> </div>
    
    <p> 第三条 委托经营管理期限</p>
    <p> 3.1该物业委托管理期限约20年，即自2016年1月1日起计算。</p>
    
    <p> 3.2委托管理期满，如无书面提出解除合同，甲方应继续委托乙方经营管理。</p>

    
    <p> 第四条 双方收益约定</p>
    <p> 4.1乙方收取该项目所属区域的实际总租金的10%作为管理费，乙方在扣除该项管理费后，应甲方申请，将按甲方在该项目所占物业份额比例（物业份额比例=该物业建筑面积÷该项目统一经营区域建筑面积×位置系数），分配甲方应得的税前收益；其中，自2017年1月1日起，若乙方连续2年税前年收益低于市场平均价值，视为乙方管理不利，甲方有权要求解除合同。</p>
    
    <div class="aligns"><small>{{page[0]}}/{{page[4]}}</small></div>

    <div style="width:100%; height:10px; "></div>

    <p> 4.2甲方授权乙方代办税务发票（租金税费由甲方承担并由乙方代扣代缴，乙方可在支付甲方应得收益时直接扣除对应租金税费）。</p>
    
    <p> 4.3甲方如需变更账户需提前书面通知乙方，否则引起乙方无法支付收益或支付错误的后果由甲方承担。</p>
    
    <p> 4.4 根据国家法律、法规规定甲方收取的收入及其他需要缴纳相关税费的均由甲方自行承担。</p>
    <p> 4.5 支付方式：由甲方注册成为“扑满APP”的会员，根据系统提示的流程成为商铺权益人之后，在系统中申请租金提现，乙方客服人员将于7日内处理甲方申请事项。</p>

    
    <div style="width:100%; height:20px"> </div>
    
    <p> 第五条 双方权利与义务</p>
    <p> 5.1甲方的权利与义务</p>
    
    <p> 5.1.1甲方保证其为该物业的合法权属人。</p>
    
    <p> 5.1.2甲方委托乙方经营管理该物业的行为是不可变更和撤销的，甲方明示放弃将该物业自行出借和自用的权利。</p>
    
    <p> 5.1.3委托经营管理期间，在买受人继续履行本协议甲方权利义务和不影响乙方正常经营管理活动的前提下，甲方有权将该物业另行转让，但必须提前三个月书面通知乙方，乙方及实际承租人在同等条件下享有优先受让的权利。该物业在办理产权变更登记手续时，甲方应及时与乙方办理委托经营管理合同的变更手续，将相关权利义务关系转移至受让方名下，否则，由此引起的一切不利后果及损失均由甲方承担。</p>
    
    <p> 5.1.4甲方应按乙方的需要（若有）尽力配合乙方办理因经营所需的一切手续和文件，为乙方提供一切正常管理或经营活动所必须的条件。</p>
    
    <p> 5.1.5委托经营管理期间，甲方必须尊重乙方对该物业的自主使用权，不得向乙方主张该物业的占有权、使用权和收益权（本合同已约定的收益除外），不得干涉乙方经营该物业及整个项目的权利。</p>
    
    <p> 5.1.6甲方有权按本合同约定要求乙方按时支付甲方应得收益的权利。</p>
    
    <p> 5.2乙方的权利和义务</p>
    
    <p> 5.2.1乙方有权按约取得本合同约定的管理费。</p>
    
    <p> 5.2.2乙方日常管理和经营必须接受工商、公安、消防、环保、卫生、税务等部门的管理与监督，不得从事非法活动。</p>
    
    <p> 5.2.3乙方有权自主经营管理该物业，有权因经营需要对物业和整个项目进行重新布局和装修，有权代表甲方将该物业以自己的名义或租赁管理或合作经营等多种渠道（包括但不限于自用、转租等）经营管理该物业及整个项目市场，甲方对此表示认可，前述事务操作时无需再另征得甲方同意。</p>
    
    <p> 5.2.4委托经营管理期间，甲方应付的物业管理、水、电（含公摊部分）及通讯等费用均由乙方或实际占用人承担。</p>
    
    <p> 5.2.5乙方应按照法律规定交纳在经营管理过程中的相关税费。</p>

    <div class="aligns"><small>{{page[1]}}/{{page[4]}}</small></div>
    <div style="width:100%; height:30px"> </div>
    
    <p> 第六条 物业的交付和返还</p>
    <p> 6.1、甲方应于收到出卖人发出的交房通知书之日起的5个工作日内接收该房产并同时将该房产交付给乙方。</p>
    
    <p> 6.2、乙方应在委托经营管理期届满前十日内以书面形式通知甲方办理物业移交手续。该物业返还甲方时，双方应指定人员共同参与交还该物业的验收工作，如甲方未按期指定人员参与验收或其指定人员未按期参与验收，则视为验收通过。该物业移交时，双方按该物业交付现状移交，并填写《物业移交清单》。委托经营管理期间，该物业及其设施、设备的正常使用及自然损耗乙方无须承担责任；乙方及实际经营者应于委托经营管理期届满前将该物业内的物品清空，否则租赁期届满后，该物业内留有的物件均视为赠与甲方，甲方有权对其处置。验收过程中发现问题的，甲方应当场提出，如当场难以检测判断的，应于发现该问题之日起十日内向书面乙方提出。甲方未及时提出异议的，视为双方验收通过。</p>
    
    <div style="width:100%; height:30px"> </div>

    <p> 第七条 违约责任</p>
    <p> 7.1甲方违约责任</p>
    
    <p> 7.1.1甲方延迟交付该房产超过10个工作日或干扰、阻挠乙方正常管理经营的，应支付违约金一万元，如违约金不足以弥补损失的，应进行全额赔偿。</p>
    
    <p> 7.1.2甲方擅自提前终止或解除本合同，提前收回该物业、危及乙方统一经营管理的，应支付违约金五万元，如违约金不足以弥补损失的，应进行全额赔偿。</p>
    
    <p> 7.1.3甲方不配合或无故拒绝协助乙方经营管理所需申办的登记审批手续，以致延误乙方正常开业的，应按延误的天数，支付乙方每日人民币伍仟元的违约金，违约金不足弥补乙方损失的，甲方还应进行全额赔偿，同时乙方承租期限相应顺延。</p>
    
    <p> 7.2乙方违约责任</p>
    
    <p> 7.2.1乙方未能按约向甲方支付甲方应得收益的，则每逾期一日，乙方应按欠付款项金额的万分之三向甲方支付违约金。</p>
    
    <p> 7.2.2乙方擅自提前终止或解除本合同，支付甲方违约金五万元。</p>
    <div style="width:100%; height:30px"> </div>
    
    <p> 第八条 免责条款</p>
    <p> 8.1不可抗力是指不能预见、无法避免、并不能克服的自然事件及政治事件。不可抗力及其他意外事故造成甲方或乙方损失的，经有关机关确认，双方互相免除责任，在不可抗力事件发生后，不能继续履行合同的一方应立即将不可抗力的情况通知对方，并在30日内提出不能履行合同的理由的有效证明文件（因政府部门导致出证推迟不在此限）。此项证明文件应由发送灾害地区的公证机构出具。按照灾害对履行合同的影响程度，由双方协商决定是否变更或解除合同。委托经营管理期间，该物业如因不可抗力导致或下列情形特殊原因的，本合同提前终止，双方互不承担责任：</p>
    
    <p> 8.1.1该物业占用范围内的土地使用权依法提前收回；</p>
    
    <div class="aligns"><small>{{page[2]}}/{{page[4]}}</small></div>

    <p> 8.1.2该物业因社会公共利益被依法征用的；</p>
    
    <p> 8.1.3该物业因城市建设需要被依法列入拆迁许可范围内；</p>
    
    <p> 8.1.4该物业毁损、灭失或者被鉴定为危险房屋的。</p>
    <div style="width:100%; height:30px"> </div>

    <p> 第九条 维修责任</p>
    <p> 9.1因不可抗力致使房产、设施损坏或不可正常使用，或不可归责于乙方原因而致使房产损坏或不可正常使用的，其修缮、更换的责任由甲方负责使其恢复正常使用的功能。</p>
    
    <p> 9.2乙方开业后，由于租赁场地非因乙方原因需要维修的，由甲方负责无偿维修；若造成乙方损失的，甲方应予赔偿。如因乙方原因造成甲方租赁场地结构损坏的，乙方必须负责维修并赔偿。需要动用维修基金予以维修的，甲方授权乙方办理动用维修基金的手续，若有需要甲方配合之处，甲方应予以配合。</p>
    
    <p> 9.3如因不可抗力或甲方原因，导致该物业任何部分被损坏之后10日内甲方不进行重建复原工程，乙方可先进行必须的重建复原工程，代垫相关费，甲方应及时补偿乙方由此引起的所有费用及开支，或由乙方在应付甲方款项中予以扣除。</p>
    
    <p> 9.4对于乙方装修、添加的物品的被损坏，维修义务由乙方自行承担。</p>

    <div style="width:100%; height:20px"> </div>
    
    
    <p> 第十条 其他约定</p>
    <p> 10.1为保证项目整体经营的稳定性和连续性，本合同期内，该物业须由乙方进行统一规划和经营管理，甲方不得以任何形式独立经营或干扰统一经营，未经双方协商一致任何一方都不得擅自变更或解除本合同。</p>
    
    <p> 10.2在委托经营管理期间，甲乙双方应针对各自所属财产的办理相关保险。</p>
    
    <p> 10.3在委托经营管理期间，甲乙双方应各自承担各自应付的税费，因国家税费政策变化导致甲方持有房产税费增加的，由甲方自行承担，与乙方无关。</p>
    
    <p> 10.4执行本合同事项需通知对方的，可以书面形式、系统公告进行，通知应以中文书写，可以通过传真、电报、函件、公告或面交方式送达本合同落款所列明的双方地址。如上述地址因变更而无法送达的后果责任由变更方当事人自负。</p>
    <div style="width:100%; height:30px"> </div>
    <p> 第十一条 争议解决</p>
    <p> 11.1合同发生争议，由双方协商解决；协商不成时，任何一方均可向该物业所在地有管辖权的人民法院提起诉讼。</p>
    
    <p> 11.2不可抗力为当事人无法预见、无法避免、无法控制、无法克服的意外事件（如战争、车祸等）或自然灾害（如地震、火灾、水灾等）。</p>

    <div style="width:100%; height:50px"> </div>

    <div class="aligns"><small>{{page[3]}}/{{page[4]}}</small></div>
    
    <p> 第十二条 附则</p>
    <p> 12.1本合同未尽事宜，经双方协商一致，可订立补充条款，该补充条款作为对本合同的修正；</p>
    
    <p> 12.2甲、乙双方在签署本合同时，对各自权利、义务及特别约定责任条款内容已充分阅读和理解，并自愿按合同规定严格执行，不得反悔；</p>
    
    <p> 12.3本合同经双方当事人签字或盖章后生效；</p>
    
    <p> 12.4本合同壹式贰份，双方各执壹份，具有同等法律效力。</p>
    
            
            <div class="imgs">
                <span>甲方签名：</span>
                <div class="signature">
                    
                </div>
                <section id="kongge"></section>
                <div class="zhang1">乙方盖章：</div>
                <div class="zhang">
                    <img src="../../assets/img/zhang.jpg" alt="乙方盖章">
                </div>
            </div>

            <div class="date" style="width:100%; clear: both; text-align:right; padding-right:100px; box-sizing: border-box; margin-top: 30px;">{{date}}</div>
            
            </div>
            <footer>
                <div id="ge"></div>
                <div class="aligns"><small>{{page[4]}}/{{page[4]}}</small></div>
            </footer>
            <div style="width:100%; height:50px"> </div>
        </body>
    </html>
        </div>
        <div class="qianming">
            <div @click="signSubmit" class="btn">提交</div>
            
            <button @click="Thesignature" type="button" class="btn">签名</button>
		</div>

        <van-popup v-model="show" position="right">
            <div id="mycanvass">
                <div class="js-signature" data-width="370" data-height="600"></div>
                <!-- <div class="canvas_title">请横至正楷签名</div> -->
                <div class="Thesignatures">
                    <button class="mycanvas_button btn" @click="clearCanvas"><span>取<br>消</span></button>
                    <button class="mycanvas_g btn" @click="saveSignature"><span>确<br>认</span></button>
                </div>
            </div>
        </van-popup>

    </div>
</template>

<script>
import {qianming} from "../../assets/js/jq-signature.js"
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            proname:'',shopsid:[],img:'',imgData:'',
            date:'',bianhao:'',page:[1,2,3,4,5],
            show:false,img:''
        }
    },
    components: {
        
    },
    beforeCreate(){
        this.$store.dispatch('user')
    },
    computed: {
        user(){
            return this.$store.state.user
        },
        entrust(){
            return this.$store.state.entrust
        },
    },
    created(){
        // document.title = ''
        this.$nextTick(()=>{
            for( let val of this.entrust){
                val.state != 1 ? this.shopsid.push(val.shopId) : ''
            }
        })
    },
    methods: {
        Thesignature() {
            this.clearCanvas()
            setTimeout(()=>{
                $('.js-signature').jqSignature()
                $('.js-signature').on('jq.signature.changed', function() {
                    $('#saveBtn').attr('disabled', false)
                })
            },100)
        },
        clearCanvas(){
            this.show = !this.show
            $('.js-signature').jqSignature('clearCanvas')
            $('#saveBtn').attr('disabled', true);
        },
        saveSignature(){
            this.show = !this.show
            $('.signature').empty();
            var dataUrl = $('.js-signature').jqSignature('getDataURL')
            var img = $('<img style="width:50vw;heigth:30vw"/>').attr('src', dataUrl)
            $('.signature').append(img)
            this.img = dataUrl
        },
        signSubmit(){
            this.img != '' ? this.signSubmits() : ''
        },
        signSubmits(){
            // 时间
            var date = new Date()
            var year = date.getFullYear()
            var month  = (date.getMonth() + 1)
            var day = date.getDate()
            var hour = date.getHours()
            var minute = date.getMinutes()
            var seconds = date.getSeconds()

            // 时间
            var time = year + '-' + this.jialing(month) + '-' + this.jialing(day) + ' ' + this.jialing(hour) + ':' + this.jialing(minute) + ':' + this.jialing(seconds)
            // 合同编号
            var bianhao = 'WT' + year + this.jialing(month) + this.jialing(day) + this.jialing(hour) + this.jialing(minute) + this.jialing(seconds)
            // console.log('时间--'+time + '---合同编号--'+bianhao)
            this.bianhao = bianhao
            this.date = year+'年'+this.jialing(month)+'月'+this.jialing(day)+'日'
            // 商铺id
            var shopsid = this.shopsid.join(',')
            // 图片
            var pngstr = this.img.substring(22,)
            // console.log(pngstr)
            // pngstr = new Blob([written], { type: "img/png"})
            // 文本

            var $Blob= this.getBlobBydataURI(this.img,'image/jpeg');
            setTimeout(()=>{
                var content1 = $('#myCanvas').html()
                var imgData = this.imgData
                var content = content1.replace(/><\/div> <section/g,'/></div> <section style="width:100px; height: 200px; float:left"').replace(/alt="乙方盖章"><\/div><\/div>/g,'alt="乙方盖章"/></div></div>')
                    .replace(/class="signature"><img style="width:50vw;heigth:30vw"/g,'class="signature"><img style="width:150px;heigth:150px; transform: rotate(-90deg);"')
                    .replace(/class="signature">/g,'class="signature" style="float:left">')
                    .replace(/>甲方签名：/g,' style="float:left">甲方签名：')
                    .replace(/class="zhang">/g,'class="zhang" style="float:left">')
                    .replace(/><strong/g,' style="width:100%; text-align: center;"><strong')
                    .replace(/><small/g,' style="width:100%; text-align: center; font-size:20px"><small')
                    .replace(/id="ge"/g,'style="width:100%; height: 500px;" id="ge"')
                    .replace(/class="zhang1"/g,'style="float:left;" class="zhang1"')                        
                    // console.log(content)
                content = new Blob([content], { type: "text/html" })
                // 创建 formData 对象
                var formData = new FormData()
                formData.append('access_type', 'WXH5')
                formData.append('wxh', this.$store.state.puman_wxh)
                formData.append('openId', this.$store.state.puman_openId)
                formData.append('unionId', this.$store.state.puman_unionId)
                formData.append('operaTime', time)
                formData.append('written', $Blob ,"file_"+Date.parse(new Date())+".jpeg")
                formData.append('pngstr', pngstr)
                formData.append("content", content, "text.html")
                formData.append('entrustNo', bianhao)
                formData.append('shopIds', shopsid)
                this.$store.dispatch('sign', formData)
            },500)
        },
        jialing(num){
            if (num < 10) {
                return String(String(0) + String(num))
            }else{
                return num
            }
        },
        getBlobBydataURI(dataURI,type) {
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for(var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], {type:type });
        }
    },
}
</script>

<style lang="less" scoped>
#Contract{
    width: 100%; height: 100vh;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular; font-weight:Regular; }


/*合同*/
.hetong{
    width: 100%; margin-top: 5vw; font-size: 4vw; margin-bottom: 20vw; padding: 3vw;
}
strong{
    text-align: center; font-size: 5vw;
    margin-left: 30%;
}
.jia{
    width: 100%; height: 20vw; font-size: 4vw;
    /*border:1px solid red;*/
     margin-top: 3vw;
}
.yi{
    width: 100%; height: 40vw; font-size: 4vw;
    border-bottom:1vw solid gainsboro;
    margin-top: 3vw;
}
.jia1{
    width: 90%; height: 5vw; margin-top: 1vw;
    /*border:1px solid red; */
    margin-left: 3vw;
}
.jia1>span:nth-child(1){
    display: block; width: 40%;
    float: left;
}
.jia1>span:nth-child(2){
    float: left;
}
.zhu{
    height: 11vw;
}
.suo{
    width: 60%;
}
.guan{
    color: blue; font-weight: 600;
}
.falv{
    width: 100%;
    margin: 3vw auto; font-size: 3.5vw;
}
a:focus{
    outline: none;
}


.qianming {
    width: 100%; height: 20vw;
    position: fixed; bottom: 0vw;
    display: flex;
    justify-content: space-around;
    background-color: white;
}

.btn {
    display: inline-block; outline:none!important;
    margin-top: 4.5vw;
    width: 40vw;
    height: 11vw;
    font-size: 4.3vw;
}



.imgs{
    width: 100%; height: 100vw; margin-top: 2vw; position: relative;
}
.zhang1{
    position: absolute; top: 60vw;
}
.signature{
    transform: rotate(-90deg); margin-left: 24vw; margin-top: -16vw;
    width: 47vw; height: 80vw;
}
.zhang{
    width: 40%; height: 40vw; margin: -8vw auto;
}
.zhang img{
    width: 90%; height: 90%; margin: 5%;
}

.aligns{ text-align: center; }

#mycanvass{
    width: 100vw; height: 100vh; position: relative; overflow: hidden;
    .js-signature{
        width: 100vw; height: 100vh; text-align: center;
    }
    .Thesignatures{ 
        width: 100%; height: 1.2rem; position: absolute; bottom: 0; left: 0; box-shadow:0px 3px 10px 0px rgba(178,19,16,0.16); background-color: white;
        .mycanvas_button{ width: 0.8rem; height: 40vw; margin: 0; transform: rotate(90deg); -webkit-transform:rotate(90deg); position: absolute; left: 1.5rem; top: -0.9rem; }
        .mycanvas_g{ width: 0.8rem; height: 40vw; margin: 0; transform: rotate(90deg); -webkit-transform:rotate(90deg); position: absolute; right: 1.5rem; top: -0.9rem }
        
    }
}



.qianming {
    width: 100%; height: 1.2rem; box-shadow:0px 3px 20px 0px rgba(178,19,16,0.16);
    position: fixed; bottom: 0vw;
    display: flex;
    justify-content: space-around;
    background-color: white;
}

.btn {
    display: inline-block; outline:none!important; 
    margin-top: 0.2rem;  border:1px solid rgba(231,71,68,1); box-shadow:0px 3px 20px 0px rgba(178,19,16,0.16); border-radius: 0.48rem;
    width: 40%; color: #E74744; font-family:PingFang-SC-Bold; font-weight:bold; background-color: white;
    height: 0.8rem; text-align: center; line-height: 0.8rem;
    font-size: 4.3vw;
}
.di{
    position: fixed; bottom: 0; width: 100%; height: 20vw; background-color: white;
}

</style>