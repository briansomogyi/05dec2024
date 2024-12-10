const growth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80,];

Vue.createApp({
    data() {
        return {
            brian: "Brian",
            plants: [
                { height: 1, id: 0, win: false, ableToWater: false, },
                { height: 1, id: 1, win: false, ableToWater: false, },
                { height: 1, id: 2, win: false, ableToWater: false, },
                { height: 1, id: 3, win: false, ableToWater: false, },
            ],
        };
    },
    methods: {
        water: function (plantId) {
            if (this.plants[plantId].win) {
                return;
            }
            this.plants[plantId].height = growth[growth.indexOf(this.plants[plantId].height) + 1];
            if (this.plants[plantId].height == growth[growth.length - 1]) {
                this.plants[plantId].win = true;
            }
        },
        choosePlantToWater: function () {
            for (const plant of this.plants) {
                plant.ableToWater = false;
            }
            this.plants[Math.floor(Math.random() * this.plants.length)].ableToWater = true;
        }
    },
    watch: {},
    computed: {},
    onBeforeMounted() {
        this.choosePlantToWater();
    }
}).mount("#app");