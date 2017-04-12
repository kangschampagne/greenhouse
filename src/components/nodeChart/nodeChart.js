import Vue from 'vue'

const visualMap = {
    top: 10,
    right: 10,
    pieces: [{
        gt: 0,
        lte: 20,
        color: '#057'
    }, {
        gt: 20,
        lte: 25,
        color: '#072'
    }, {
        gt: 25,
        lte: 30,
        color: '#084'
    }, {
        gt: 30,
        lte: 50,
        color: '#096'
    }, {
        gt: 50,
        lte: 100,
        color: '#ffde33'
    }, {
        gt: 100,
        lte: 200,
        color: '#ff9933'
    }, {
        gt: 200,
        lte: 300,
        color: '#cc0033'
    }, {
        gt: 300,
        lte: 400,
        color: '#660099'
    }, {
        gt: 400,
        lte: 500,
        color: '#7e0023'
    }, {
        gt: 500,
        lte: 600,
        color: '#7e2054'
    }, {
        gt: 600,
        lte: 8000,
        color: '#7e4532'
    }, {
        gt: 8000,
        lte: 10000,
        color: '#7e6752'
    }, {
        gt: 10000,
        color: '#4e7582'
    }],
    outOfRange: {
        color: '#999'
    }
};

export default {
    
    data() {
        return {
            renderFlag: false,
            renderEl: null
        }   
    },

    props: {
        node: Object
    },

    methods: {
        getData(data, dateVal){
            let { name, url, param } = data;
            if (dateVal) {
                param.start = dateVal.start;
                param.end = dateVal.end;
            }
            const reqUrl = "http://localhost:1100/api/farm/sensorData/" + url;
            this.$http.get(reqUrl, {
                params: param
            })
                .then((res) => {
                    this.nodedata = res.data;
                    this.renderChart(this.nodedata);
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        
        renderChart(data) {
            this.curNode = [];
            if (!this.$refs) return;
            if (this.renderFlag === false) {
                var chart = echarts.init(this.$refs.renderChart);
                this.renderEl = chart;
                this.renderFlag = true;
            }

            const sensor = data["sensor"];
            if (!sensor) return;

            let legends = [];
            let series = [];

            if (sensor['TEMP']) {
                let tempNode = {
                    name: "temp",
                    title: "环境温度",
                    data: sensor['TEMP'][0][0] + '℃',
                    date: sensor["TEMP"][0][1]
                };
                let tempSerie = {
                    name: '环境温度',
                    type: 'line',
                    data: sensor["TEMP"].map(function (item) {
                        return item[0];
                    }),
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 10
                        }, {
                            yAxis: 20
                        }, {
                            yAxis: 25
                        }, {
                            yAxis: 30
                        }, {
                            yAxis: 35
                        }]
                    }
                }
                this.curNode.push(tempNode);
                legends.push(tempNode.title);
                series.push(tempSerie)
            }

            if (sensor['HUMIT']) {
                let humitNode = {
                    name: "humit",
                    title: "环境湿度",
                    data: sensor['HUMIT'][0][0] + ' %',
                    date: sensor["HUMIT"][0][1]
                };
                let humitSerie = {
                    name: '环境湿度',
                    type: 'line',
                    data: sensor["HUMIT"].map(function (item) {
                        return item[0];
                    }),
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 10
                        }, {
                            yAxis: 30
                        }, {
                            yAxis: 50
                        }, {
                            yAxis: 70
                        }, {
                            yAxis: 90
                        }]
                    }
                }
                this.curNode.push(humitNode);
                legends.push(humitNode.title);
                series.push(humitSerie);
            }

            if (sensor["LUX"]) {
                let luxNode = {
                    name: "lux",
                    title: "光照强度",
                    data: sensor["LUX"][0][0] + " Lx",
                    date: sensor["LUX"][0][1]
                };
                let luxSerie = {
                    name: '光照强度',
                    type: 'line',
                    data: sensor["LUX"].map(function (item) {
                        return item[0];
                    }),
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 300
                        }, {
                            yAxis: 500
                        }, {
                            yAxis: 600
                        }, {
                            yAxis: 8000
                        }, {
                            yAxis: 10000
                        }]
                    }
                }
                this.curNode.push(luxNode);
                legends.push(luxNode.title);
                series.push(luxSerie);
            }

            if (sensor["GAS"]) {
                let gasNode = {
                    name: "gas",
                    title: "气体安全",
                    data: sensor["GAS"][0][0] > 100 ? 'Safe' : 'Danger',
                    date: sensor["GAS"] ? sensor["GAS"][0][1] : null
                };
                let gasSerie = {
                    name: '气体安全',
                    type: 'line',
                    data: sensor["GAS"].map(function (item) {
                        return item[0];
                    }),
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 50
                        }, {
                            yAxis: 100
                        }, {
                            yAxis: 150
                        }, {
                            yAxis: 200
                        }]
                    }
                }
                this.curNode.push(gasNode);
                legends.push(gasNode.title);
                series.push(gasSerie)
            }

            this.renderEl.setOption(
                {
                    title: {
                        // text: this.node.name + ' 感测器'
                    },
                    legend: {
                        data: legends
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        data: sensor["TEMP"].map(function (item) {
                            return item[1];
                        })
                    },
                    yAxis: {
                        splitLine: {
                            show: false
                        }
                    },
                    toolbox: {
                        right: '100px',
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    dataZoom: [{
                        type: 'slider',
                        show: true
                        // start: 0,
                        // end: 10,
                        // handleSize: 8
                    }, {
                        type: 'inside'
                    }],
                    visualMap: visualMap,
                    series: series
                }
            )
        }
    },

    mounted() {
        // this.getData(this.node)
    }
}