<template>
    <div id='nav-top'>
        <div class="nav-top">
            <div class="nav-top__logo"><span class="nav-top__title">基于 WiFi 和 ZigBee 的温室监控系统</span></div>
            <el-menu :default-active="activeIndex"
                     class="nav-top__menu"
                     mode="horizontal"
                     @select="handleSelect">
                <el-menu-item index="1">数据报表</el-menu-item>
                <el-menu-item index="2">单日报表</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GhNavTop',

    data() {
        return {
            activeIndex: '1',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key === "2") {
                this.$parent.isDailySearch = true;
            }else {
                this.$parent.isDailySearch = false;
            }
        }
    }
}
</script>

<style>
#nav-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height: 3rem;
    background: rgb(0, 153, 204);
    overflow: hidden;
    z-index: 2;
    box-shadow: 0px 1px 1px 1px #ccc;
}

.nav-top__logo {
    float: left;
    height: 2rem;
    margin: 0.5rem 0 0.5rem 1rem;
}

.nav-top__title {
    white-space: nowrap;
    font-family: "Microsoft YaHei";
    font-size: 16px;
    line-height: 2rem;
    color: #f3f3f3;
}

.nav-top {
    margin: auto;
    height: 3rem;
    width: 80%;
}

.nav-top__menu {
    float: right;
    line-height: 3rem;
}

@media only screen and (max-width: 500px) { 
    .nav-top__title {
        font-size: 0.7rem;
    }
}
</style>