const app = new Vue(
    {
        el: '#app',
        data: {
            userInput: '',
            tasks: [
                {
                    label: 'Water the plants',
                    done: true,
                },
                {
                    label: 'Feed the cat',
                    done: false,
                },
                {
                    label: 'Watching stars',
                    done: false,
                },
            ],

            li_task_class: 'list-group-item rounded-pill mb-1 border-0 shadow-sm d-flex justify-content-between align-items-center',

            x_btn_class: 'fa-regular fa-circle-xmark ms-auto text-danger fs-5',
        },
        methods: {
            addTask() {
                if (this.userInput.replace(/\s+/g, '') !== '') {
                    const newTask = {
                        label: this.userInput,
                        done: false,
                    };

                    this.tasks.push(newTask)

                    this.userInput = '';
                } else {
                    console.log('inserisci task!!!!');
                    this.fadeInOut(document.querySelector('.form-control'), 200);
                    this.userInput = '';
                }
            },

            removeTask(index) {
                console.log(`hai cliccato ${index}`);
                this.tasks.splice(index,1);
            },

            isTaskDone(index) {
                if (this.tasks[index].done === false) {
                    this.tasks[index].done = true;
                } else {
                    this.tasks[index].done = false
                }
            },

            fadeInOut(el, delay) {


                if(el === null || !el) {
                    return false;
                }
                
                el.style.transition = 'background-color ' + delay + 'ms ease-out';
                el.style.backgroundColor = 'lightcoral';

            
                setTimeout(() => {
                    el.style.transition = 'background-color ' + delay + 'ms ease-out';
                    el.style.backgroundColor = '';
                }, delay);
            },
        },
    }
)