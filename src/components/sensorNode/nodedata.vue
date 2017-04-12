<template>
    <div class="sensor">
        <div :class="[ curnode.name + '_icon' ]"></div>
        <div class="sensor_list">
            <div class="sensor_title">{{ curnode.title }}</div>
            <div class="sensor_data">{{ curnode.data }}</div>
            <div class="sensor_time">{{ curnode.date }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NodeData',

    props: {
        curnode: {
            type: Object
        }
    }

}
</script>

<style>
.sensor {

}

.sensor_list {
    margin: 18px 0 18px 10px;
    display: inline-block;
    vertical-align: middle;
}

.sensor_title, .sensor_data, .sensor_time {
    font-family: "Microsoft YaHei";
}

.sensor_title, .sensor_data {
    font-size: 1.5rem;
    display: inline-block;
}

.sensor_time {
    color: #656565;
}

.temp_icon, .humit_icon, .lux_icon, .gas_icon {
    width: 60px;
    height: 60px;
    display: inline-block;
    /*background: antiquewhite;*/
    vertical-align: middle;
}

.temp_icon {
    background: url("/static/temp.png") center no-repeat;
}

.humit_icon {
    background: url("/static/humi.png") center no-repeat;
}

.lux_icon {
    background: url("/static/lux.png") center no-repeat;
}

.gas_icon {
    background: url("/static/gas.png") center no-repeat;
}


@media only screen and (max-width: 500px) {

    .sensor_list {
        display: block;
        margin: 10px auto;
        width: 100%;
    }

    .sensor_title, .sensor_data {
        font-size: 1rem;
        white-space: nowrap;
    }

    .sensor_time {
        font-size: 0.75rem;
        white-space: nowrap;
    }

    .temp_icon, .humit_icon, .lux_icon {
        display: block;
        margin: 10px auto;
    }


}

</style>
