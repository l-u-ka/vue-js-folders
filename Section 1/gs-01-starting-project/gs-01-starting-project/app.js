/*const button = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
    const inputValue = inputEl.value;
    const inputListEl = document.createElement('li');
    inputListEl.innerText = inputValue;
    listEl.appendChild(inputListEl);
    inputEl.value = '';
}

button.addEventListener('click', addGoal);
*/
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue = ''
        }
    }
}).mount('#app')