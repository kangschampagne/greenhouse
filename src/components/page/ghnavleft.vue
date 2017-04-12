<template>
    <div id='nav-left'
         :class="{'is-active': isActive}">
        <div class="nav-main" @click.stop='handleClick'>
            <div class="el-icon-menu nav-main-icon"><i></i><i></i><i></i></div>
        </div>
        <div class="nav-content">
            <ul class="nodeList">
                <li class="nodeList-item" v-for='(node, idx) in nodeList'>
                    <a class="nodeList-item-link" :href="'#'+node.name">
                        <span class="nodeList-item-title" @click.stop='handleClick'>{{node.title}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GhNavLeft',

    props: {
        nodeList: {
            type: Array,
        }
    },

    data() {
        return {
            isActive: false
        }
    },

    methods: {
        handleClick () {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style>
#nav-left {
    position: fixed;
    left: 0;
    top: 3rem;
    bottom: 0;
    width: 2.5rem;
    height: 100%;
    background: rgb(41, 48, 56);
    text-align: center;
    overflow: hidden;
    z-index: 2;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
}

#nav-left.is-active {
    width: 10rem;
}

.nav-main {
    margin: auto;
    width: 100%;
    height: 50px;
    background: rgb(34, 40, 46);
    transition: background-color .3s;
    text-align: center;
    cursor: pointer;
}

.nav-main:hover {
    transition: background-color .3s;
    background: rgb(100, 105, 109);
}

.nav-main-icon {
    margin: 15px;
    color: #f3f3f3;
}

.nav-content {
    height: 100%;
    width: 100%;
}

.nodeList {
    margin: auto;
    width: 100%;
}

.nodeList-item {
    margin: 2px 0px;
    padding: 10px 0;
    box-shadow: 0px 2px 0px 0px #ccc;
    background: #dddddd;
    height: 30px;
    overflow: hidden;
    position: relative;
}

.nodeList-item:hover {
    background: #ababab;
    margin: 2px 2px 2px 0;
}

.nodeList-item-link {
    margin: auto;
    display: inline-block;
    background: url("/static/sensor.png") left no-repeat;
    height: 30px;
    width: 180px;
    vertical-align: middle;
    position: absolute;
    left: 10px;
}

.nodeList-item-title {
    font-family: "Microsoft YaHei";
    font-size: 1rem;
    color: #181818;
    vertical-align: middle;
    white-space: nowrap;
    margin-left: 5px;
    position: absolute;
    left: 40px;
}

.nodeList-item:hover .nodeList-item-title {
    color: #f7f7f7;
}


@media only screen and (max-width: 500px) {}
</style>