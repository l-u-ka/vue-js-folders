const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue.js',
            courseGoalB: 'Master the course',
            /*courseGoalB: '<h2>Master the course</h2>' */
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5 ) return this.courseGoalA;
            else return this.courseGoalB;
        }
    }
})

app.mount('#user-goal');