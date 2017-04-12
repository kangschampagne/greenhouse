<template>
    <div class="node-search">
        <div class="node-wrap">
            <div class="node-search_form">
                <el-form label-width="200px">
                    <el-form-item label="已有感测节点：">
                        <el-select v-model="nodeVal"
                                   placeholder="请选择 感测器"
                                   @change="handleNodeChange">
                            <el-option v-for="(node, idx) in nodeList"
                                       :key="node.name"
                                       :label="node.title"
                                       :value="node.name"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="查询时间范围：">
                        <el-date-picker v-model="dateVal"
                                        type="daterange"
                                        placeholder="请选择 日期范围"
                                        @change="handleDateChage">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary"
                                   icon="search"
                                   @click.stop="handleSearch">点击查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <div class="node-date-range"><p>可选时间范围：</p><p>{{ selectedDate }}</p></div>
                    </el-form-item>
                </el-form>
            </div>
            <div class="node-search_chart"
                 ref="renderChart">
            </div>
        </div>
    </div>
</template>

<script>
import nodeList from '../nodeChart/nodeList.json'
import NodeChart from '../nodeChart/nodeChart.js'

export default {
    name: 'dailySearch',

    mixins: [NodeChart],

    data() {
        return {
            nodeVal: null,
            dateVal: null,
            dateStart: null,
            dateEnd: null,
            selectedDate: null,
            nodeList: nodeList,
            nodedata: null,
            curNode: []
        }
    },
    methods: {
        handleNodeChange() {
            this.nodeList.forEach((node) => {
                if (node.name === this.nodeVal) {
                    let dateDefaultRange = node.param.start + " - " + node.param.end;
                    this.selectedDate =  dateDefaultRange;
                }
            });
        },
        handleDateChage(date) {
            this.dateStart = date.split(" - ")[0];
            this.dateEnd = date.split(" - ")[1];
        },

        handleSearch() {
            this.nodeList.forEach((node) => {
                if (node.name === this.nodeVal) {
                    this.getData(node, { start: this.dateStart, end: this.dateEnd });
                }
            });
        }
    }
}    
</script>

<style>
.node-search {
    overflow: hidden;
    padding-top: 3rem;
    padding-left: 2.5rem;
    background: #ffffff;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    position: relative;
    height: 101vh;
}

.node-wrap {
    margin: 10px;
    padding: 50px 0px;
    background: #eaeaea;
}

.node-search_form {
    width: 40%;
    display: inline-block;
    vertical-align: middle;
}

.node-search_chart {
    display: inline-block;
    vertical-align: middle;
    width: 40%;
    min-width: 750px;
    height: 420px;
    background: rgba(0, 0, 0, 0.05);
    background: url(/static/location.png) center no-repeat;
    zoom: 1;
}
</style>
