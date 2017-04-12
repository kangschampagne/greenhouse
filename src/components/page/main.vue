<template>
    <div>
        <gh-nav-top></gh-nav-top>
        <gh-nav-left :nodeList="nodeList"></gh-nav-left>
        <transition name="component-fade"
                    mode="out-in">
          <keep-alive>
            <component :is="currentPanel" :nodeList="nodeList"></component>
          </keep-alive>
        </transition>
    </div>
</template>

<script>
import GhNavTop from './ghnavtop'
import GhNavLeft from './ghnavleft'
import NodePreview from '../sensorNode/nodePreview'
import DailySearch from '../sensorNode/dailySearch'

import nodeList from '../nodeChart/nodeList.json'

export default {
    data() {
        return {
            nodeList: nodeList,
            isDailySearch: false
        }
    },
    computed: {
        currentPanel() {
            return this.isDailySearch ? 'daily-search' : 'node-preview'
        }
    },
    components: {
        GhNavTop, GhNavLeft, NodePreview, DailySearch
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
}

a {
    text-decoration: none;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter,
.component-fade-leave-active {
  opacity: 0;
}
</style>
