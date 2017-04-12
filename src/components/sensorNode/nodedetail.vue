<template>
    <div :id="node.name"
         class="nodeList-detail-item">
        <div class="node-info">
            <div class="node-info_img">
                <div class="node_img">感测器: {{ node.name }}</div>
            </div>
            <div class="node-info_data">
                <node-data v-for="(node, idx) in curNode"
                           :key="node.data"
                           :curnode="node"></node-data>
            </div>
        </div>
        <div :id="node.name"
             ref="renderChart"
             class="node-chart"></div>
    </div>
</template>

<script>
import NodeData from './nodedata'
import NodeChart from '../nodeChart/nodeChart.js'

export default {
    name: 'nodeDetail',

    mixins: [NodeChart],

    data() {
        return {
            nodedata: null,
            curNode: []
        }
    },

    components: {
        NodeData
    },

    mounted() {
        this.getData(this.node);
        setInterval(()=>{
            this.getData(this.node);
        }, 5000)
    }

}
</script>

<style>
.nodeList-detail-item {
    height: 500px;
    margin-bottom: 20px;
    background: #d4d4d4;
    position: relative;
    overflow: hidden;
}

.node-info {
    padding: 10px 830px 0px 380px;
    height: inherit;
    background-color: #fff;
    position: relative;
}


.node-info_img {
    position: absolute;
    left: 50px;
    width: 300px;
    height: 300px;
    /*background: #b9b9b9;*/
    top: 50%;
    margin-top: -150px;
    text-align: center;
}

.node-info_img p {
    font-family: "Microsoft YaHei";
    font-size: 1.2rem;
    margin-top: -2.5rem;
}

.node_img {
    width: 100%;
    height: 100%;
    background: url("/static/router_.png") center no-repeat;
    font-family: "Microsoft YaHei";
    font-size: 1.2rem;
    color: #4d4d4d;
}

.node-info_data {
    position: absolute;
    height: 300px;
    top: 50%;
    margin-top: -150px;
}

.node-chart {
    width: 750px;
    height: 420px;
    background: rgba(0, 0, 0, 0.05);
    background: url("/static/location.png") center no-repeat;
    position: absolute;
    right: 80px;
    top: 50%;
    margin-top: -210px;
}

@media only screen and (max-width: 500px) {

    .nodeList-detail-item {
        height: 600px;
    }

    .node-info {
        padding-left: 0;
        padding: 0;
    }

    .node-info_img {
        width: 80%;
        height: 200px;
        margin-top: 0px;
        margin-left: -40%;
        left: 50%;
        top: 30px;
    }

    .node-info_data {
        top: 200px;
        margin-top: 0;
        text-align: center;
        left: 50%;
        width: 90%;
        margin-left: -45%;
    }

    .node-chart {
        display: none;
    }
}
</style>