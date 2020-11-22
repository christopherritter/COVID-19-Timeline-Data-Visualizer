(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0599ace0"],{"049e":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"title"},[t._v(t._s(t.$t("subtitles.confirmAndDeath")))]),e("Chart",{attrs:{id:"confirmedAndDeathChart1",type:"area",dataHistory:t.ChartData,seriesData:t.confirmedAndDeathChart1}}),e("div",{staticClass:"title"},[t._v(t._s(t.$t("subtitles.newDeaths")))]),e("Chart",{attrs:{id:"deathChart2",type:"bar",stacked:!0,dataHistory:t.ChartData,seriesData:t.deathChart2,colors:["#c40000","#3d000d","#2c9100"]}}),t.showMore?e("div",[t.isUk?t._e():e("div",{staticClass:"title"},[t._v(t._s(t.$t("dataSwitch.cured")))]),t.isUk?t._e():e("Chart",{attrs:{id:"curedChart",type:"bar",dataHistory:t.ChartData,seriesData:t.curedChart5,colors:["#0e9100"]}}),e("div",{staticClass:"title"},[t._v(t._s(t.$t("dataSwitch.active")))]),e("Chart",{attrs:{id:"activeChart",type:"area",dataHistory:t.ChartData,seriesData:t.activeChart4,colors:["#ff8600","#00a004"]}}),e("div",{staticClass:"title"},[t._v(t._s(t.$t("subtitles.rates")))]),e("Chart",{attrs:{id:"rateChart3",type:"area",dataHistory:t.ChartData,seriesData:t.rateChart3,colors:["#ca0011","#0088ff"]}})],1):t._e(),t.isUk?t._e():e("div",{staticClass:"showMore",on:{click:function(a){t.showMore=!t.showMore}}},[t.showMore?e("LessIcon"):e("MoreIcon"),t._v(" "+t._s(t.showMore?t.$t("showLess"):t.$t("showAllCharts"))+" ")],1)],1)},r=[],s=(e("d81d"),e("5b7f")),n=e("3fcd"),o=e("3e07"),c={name:"ChartSection",props:["ChartData","isUk"],components:{Chart:s["a"],MoreIcon:n["a"],LessIcon:o["a"]},data:function(){return{showMore:!1}},computed:{confirmedAndDeathChart1:function(){return[{name:this.$t("totalConfirmed"),data:this.ChartData.map((function(t){var a;return null!==(a=t.confirmedBySpecimen)&&void 0!==a?a:t.confirmed}))},{name:this.$t("totalDeaths"),data:this.ChartData.map((function(t){return t.death}))}]},deathChart2:function(){var t=this,a=0,e=0;return[{name:this.$t("newCases"),data:this.ChartData.map((function(t){if(t.confirmedNew)return t.confirmedNew;var e=t.confirmed-a;return a=t.confirmed,e>0?e:0}))},{name:this.$t("newDeaths"),data:this.ChartData.map((function(a){if(t.isUk)return a.deathNewBySpecimen;var i=a.death-e;return e=a.death,i>0?i:0}))}]},rateChart3:function(){return[{name:this.$t("deathRate"),data:this.ChartData.map((function(t){var a=(t.death/t.confirmed*100).toPrecision(2);return a}))},{name:this.$t("cureRate"),data:this.ChartData.map((function(t){var a=(t.cured/t.confirmed*100).toPrecision(2);return a}))}]},activeChart4:function(){return[{name:this.$t("dataSwitch.active"),data:this.ChartData.map((function(t){var a=t.confirmed-t.cured-t.death;return a>0?a:0}))},{name:this.$t("dataSwitch.cured"),data:this.ChartData.map((function(t){var a=t.cured;return a}))}]},curedChart5:function(){var t=0;return[{name:this.$t("dataSwitch.cured"),data:this.ChartData.map((function(a){var e=a.cured-t;return t=a.cured,e>0?e:0}))}]}},watch:{showMore:function(){window.ga("send","event","chart","chart-expanded",this.showMore)}}},h=c,d=(e("63c9"),e("2877")),u=Object(d["a"])(h,i,r,!1,null,"2eade57c",null);a["default"]=u.exports},1783:function(t,a,e){},"5b7f":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{mBlock:!t.minimum}},[t.minimum?t._e():e("div",{staticClass:"btn-group-wrap"},[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"date range"}},[e("button",{staticClass:"btn btn-secondary",class:{active:-14===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-14,!0)}}},[t._v(" "+t._s(t.$t("chartTimes.twoWeek"))+" ")]),e("button",{staticClass:"btn btn-secondary",class:{active:-31===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-31,!1)}}},[t._v(" "+t._s(t.$t("chartTimes.oneMonth"))+" ")]),e("button",{staticClass:"btn btn-secondary",class:{active:-93===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-93,!1)}}},[t._v(" "+t._s(t.$t("chartTimes.threeMonth"))+" ")]),e("button",{staticClass:"btn btn-secondary",class:{active:0===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(0,!1)}}},[t._v(" "+t._s(t.$t("chartTimes.all"))+" ")])])]),e("VueApexCharts",{attrs:{width:"100%",height:t.minimum?"160px":void 0,type:t.type,options:t.options,series:t.series}})],1)},r=[],s=(e("d81d"),e("fb6a"),e("1321")),n=e.n(s),o={name:"Chart",components:{VueApexCharts:n.a},props:{seriesData:Array,dataHistory:Array,id:String,type:String,colors:Array,stacked:Boolean,minimum:Boolean},data:function(){return{showLabel:!1,range:0}},methods:{updateRange:function(t,a){this.range=t,this.showLabel=a,window.ga("send","event","chart","range-updated",t)}},computed:{stroke:function(){return"line"==this.type||"area"==this.type},series:function(){var t=this;return this.seriesData.map((function(a){return a.originalData=a.originalData?a.originalData:a.data,a.data=a.originalData.slice(t.range),a}))},options:function(){return{chart:{id:this.id,type:this.type?this.type:"line",stacked:this.stacked,zoom:{enabled:window.innerWidth>800&&!this.minimum},animations:{enabled:!1},toolbar:{show:!this.minimum}},colors:this.colors?this.colors:["#ff0000","#3d0707"],dataLabels:{enabled:this.showLabel,textAnchor:"middle",dropShadow:{enabled:!0},style:{fontSize:"12px"}},stroke:{show:this.stroke,width:!this.stroke||this.minimum?2:4},grid:{show:!this.minimum,row:{colors:this.minimum?[]:["#f3f3f3","transparent"],opacity:.5}},xaxis:{type:"datetime",categories:this.dataHistory.map((function(t){return t.date})).slice(this.range),labels:{show:!this.minimum,format:"MM/dd",rotate:-10},lines:{show:!this.minimum},axisBorder:{show:!this.minimum},axisTicks:{show:!this.minimum}},yaxis:{lines:{show:!this.minimum},labels:{show:!this.minimum}}}}}},c=o,h=e("2877"),d=Object(h["a"])(c,i,r,!1,null,"206a0891",null);a["a"]=d.exports},"63c9":function(t,a,e){"use strict";e("1783")}}]);
//# sourceMappingURL=chunk-0599ace0.9be5b7de.js.map