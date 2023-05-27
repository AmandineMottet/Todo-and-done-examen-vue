<template>
    <div>
        <header>
            <div class="navbar navbar-expand-lg navbar-light">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/"><img src="../public/Files/logo-1-Copie.png" alt=""></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active pinkButton" to="/mine">Mes tâches</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link active pinkButton" to="/family">Couple/famille</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active pinkButton" to="/work">Travail</router-link>
                        </li>


                    </ul>
                </div>
            </div>

            <div class="dropdown dropstart">
                <button class="pinkButton roundButton btn btn-outline-light rounded-circle p-3" type="button"
                        id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user" style="color: white;"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">


                    <li><i class="fa-solid fa-user" style="color: #DBB3B3;"></i>
                        <router-link to="/account" class="linkSimple">Votre compte</router-link>
                    </li>


                    <li><i class="fa-solid fa-arrow-right-from-bracket" style="color: #DBB3B3;"> </i> <a
                            href="connexion.html"
                            class="linkSimple"> Sedéconnecter </a></li>
                </ul>
            </div>


        </header>
        <hr>
        <router-view></router-view>
    </div>
    <footer class="footerMine">
        <div class="footerColor">
            <div class="socials">
                <a href=""><i class="fa-brands fa-facebook" style="color: #622d2d; "></i></a>
                <a href=""><i class="fa-brands fa-twitter" style="color: #622d2d;"></i></a>
                <a href=""><i class="fa-brands fa-instagram" style="color: #622d2d;"></i></a>
            </div>
            <p>© Mottet Amandine - Projet Front-end 2023 - IEPSA</p>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            newTask: {
                name: '',
                groupe: '',
                collab: '',
                deadline: '',
                description: '',
            },
            tasks: [],
            index: 1,
            params: [
                {
                    mine: 'red',
                    family: 'green',
                    work: 'pink',
                },
            ],
            updateTask: {
                name: '',
                groupe: '',
                collab: '',
                deadline: '',
                description: '',
            },
        };

    },
    methods: {
        create() {
            this.tasks.push({
                name: this.newTask.name,
                groupe: this.newTask.groupe,
                collab: this.newTask.collab,
                deadline: this.newTask.deadline,
                description: this.newTask.description,
                index: this.index,
            });
            this.index++
            this.newTask = {
                name: '',
                groupe: '',
                collab: '',
                deadline: '',
                description: '',
            };

            let myModalEl = document.getElementById('myModal');
            let myModal = new bootstrap.Modal(myModalEl, {});
            myModal.hide();
        },
        deleteTask(index) {
            let i = this.tasks.findIndex(function (el) {
                return el.index === index;
            });
            this.tasks.splice(i, 1);
        },

        update(index) {
            this.newTask = this.tasks.find(function (el) {
                return el.index === index;
            });
            this.isEdition = true;


        },
        taskColor(name) {
            if (name === 'mine') {
                return 'background-color :' + this.params.mine;
            }
            if (name === 'family') {
                return 'background-color :' + this.params.family;
            }
            if (name === 'work') {
                return 'background-color :' + this.params.work;
            }

        },

    },
    computed: {

        mines() {
            return this.tasks.filter(el => el.groupe === 'mine')
                .sort((a, b) => {
                    const dateA = new Date(a.deadline);
                    const dateB = new Date(b.deadline);
                    return dateA.getTime() - dateB.getTime();
                });
        },
        families() {
            return this.tasks.filter(el => el.groupe === 'family')
                .sort((a, b) => {
                    const dateA = new Date(a.deadline);
                    const dateB = new Date(b.deadline);
                    return dateA.getTime() - dateB.getTime();
                });
        },
        works() {
            return this.tasks.filter(el => el.groupe === 'work')
                .sort((a, b) => {
                    const dateA = new Date(a.deadline);
                    const dateB = new Date(b.deadline);
                    return dateA.getTime() - dateB.getTime();
                });
        },

    },
}


</script>
