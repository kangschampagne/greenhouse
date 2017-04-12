<template>
    <div id="node-preview">
        <div class="node-greenhouse">
        </div>
        <div class="node-item">
            <node-detail v-for="(node, idx) in nodeList"
                         :key="node.name"
                         :node="node"></node-detail>
        </div>
    </div>
</template>

<script>
import NodeDetail from './nodedetail';

export default {
    name: 'NodePreview',

    props: {
        nodeList: Array
    },

    data() {
        return {
        }
    },

    components: {
        NodeDetail
    }

}
</script>




<style>
#node-preview {
    overflow: hidden;
    padding-top: 3rem;
    padding-left: 2.5rem;
    background: #eaeaea;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
}

.node-greenhouse {
    margin: 10px;
    width: auto;
    height: 200px;
    background: #999999;
    background: url('/static/greenhouse.jpg');
    background-size: cover;
    background-position-y: 317px;
}

.node-item {
    margin: 10px;
    width: auto;
    height: auto;
}
</style>

