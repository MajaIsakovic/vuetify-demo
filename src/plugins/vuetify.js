import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'mdi',
    theme:{
        primary: "#FF80AB",
        success: "#00E676",
        info: "#FB8C00",
        error: "#F50057"
    }
});
