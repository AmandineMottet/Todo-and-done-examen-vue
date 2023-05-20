<template>
    <div>
        <header>
            <div class="navbar navbar-expand-lg navbar-light">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a id="ToDo" class="nav-link navbar-dark bg-dark active text-white rounded-3"
                               aria-current="page"
                               href="#">To Do - And done!</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Mes tâches</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Couple / Famille</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Travail</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true" href="#">Ajouter</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="buttonBlack">
                <button class="btn btn-dark btn-lg rounded-circle">A</button>
            </div>
        </header>
        <hr>
        <main class="main">
            <div class="containerMine">
                <div class="block">
                    <div class="firstBlock">
                        <div :style="taskColor('mine')" class="blockHeader mb-5 rounded">
                            <div class="blockHeaderLeft">
                                <h2>Mes tâches</h2>
                            </div>
                            <div class="blockHeaderRight">

                                <div class="dropdown">
                                    <button class="btn btn-secondary  buttonAdd btn btn-dark btn-sm" type="button"
                                            id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-gear"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li> Couleur</li>
                                        <li><input v-model="params.mine" type="color" id="color"></li>
                                    </ul>
                                </div>


                                <button class="buttonProfile btn btn-dark btn-sm rounded-circle">A</button>
                            </div>
                        </div>
                        <div class="blockInside">

                            <div v-for="mine in mines" class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">{{ mine.name }}</h5>
                                    <p class="card-text">{{ mine.collab }}</p>
                                    <p class="card-text">{{ mine.deadline }}</p>
                                    <p class="card-text">{{ mine.description }}</p>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-warning me-2 btn-sm" @click="update(mine.index)">
                                            <i class="fa-solid fa-pen fa-sm"></i>
                                        </button>
                                        <button class="btn btn-danger btn-sm" @click="deleteTask(mine.index)">
                                            <i class="fa-solid fa-trash fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="firstBlock">
                        <div :style="taskColor('family')" class="blockHeader mb-5 rounded">
                            <div class="blockHeaderLeft">
                                <h2>Couple / famille</h2>
                            </div>
                            <div class="blockHeaderRight">
                                <div class="dropdown">
                                    <button class="btn btn-secondary  buttonAdd btn btn-dark btn-sm" type="button"
                                            id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-gear"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li> Couleur</li>
                                        <li><input v-model="params.family" type="color" id="color"></li>
                                    </ul>
                                </div>
                                <button class="buttonProfile btn btn-dark btn-sm rounded-circle">A</button>
                            </div>

                        </div>
                        <div class="blockInside">

                            <div v-for="family in families" class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">{{ family.name }}</h5>
                                    <p class="card-text">{{ family.collab }}</p>
                                    <p class="card-text">{{ family.deadline }}</p>
                                    <p class="card-text">{{ family.description }}</p>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-warning me-2" @click="update(family.index)">
                                            <i class="fa-solid fa-pen"></i>
                                        </button>
                                        <button class="btn btn-danger" @click="deleteTask(family.index)">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="firstBlock">
                        <div :style="taskColor('work')" class="blockHeader mb-5 rounded">
                            <div class="blockHeaderLeft">
                                <h2>Travail</h2>
                            </div>
                            <div class="blockHeaderRight">
                                <div class="dropdown">
                                    <button class="btn btn-secondary  buttonAdd btn btn-dark btn-sm" type="button"
                                            id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-gear"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li> Couleur</li>
                                        <li><input v-model="params.work" type="color" id="color"></li>
                                    </ul>
                                </div>
                                <button class="buttonProfile btn btn-dark btn-sm rounded-circle">A</button>
                            </div>

                        </div>
                        <div class="blockInside">
                            <div v-for="work in works" class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">{{ work.name }}</h5>
                                    <p class="card-text">{{ work.collab }}</p>
                                    <p class="card-text">{{ work.deadline }}</p>
                                    <p class="card-text">{{ work.description }}</p>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-warning me-2" @click="update(work.index)">
                                            <i class="fa-solid fa-pen"></i>
                                        </button>
                                        <button class="btn btn-danger" @click="deleteTask(work.index)">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
        <footer>
            <!-- Button trigger modal -->
            <button type="button" class="modalBtn btn btn-primary btn-dark rounded-circle p-0" style="width: 60px; height:60px" data-bs-toggle="modal" data-bs-target="#myModal">
                <i class="fa-solid fa-plus fa-xl" style="color:white;"></i>
            </button>
            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModal" aria-hidden="true">
                <form class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Nouvelle tâche</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="card-body">
                                <div class="form-group">
                                    <label class="form-label" for="name">Nom</label>
                                    <input v-model="newTask.name" class="form-control" type="text" id="name">
                                </div>
                                <div class="form-group">
                                    <label for="groupe">Catégorie</label>
                                    <select v-model="newTask.groupe" class="form-control" id="groupe">
                                        <option value="" disabled>Choisissez un type</option>
                                        <option value="mine">Mes tâches</option>
                                        <option value="family">Famille / Couple</option>
                                        <option value="work">Travail</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="collab">Collaboration</label>
                                    <select v-model="newTask.collab" class="form-control" id="collab">
                                        <option value="" disabled>Choisissez un type</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="deadline">Deadline</label>
                                    <input v-model="newTask.deadline" class="form-control" type="date" id="deadline">
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="description">Description</label>
                                    <textarea v-model="newTask.description" class="form-control" id="description">Description</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            <button type="button" class="btn btn-primary" @click="create">Sauvegarder</button>
                        </div>
                    </div>
                </form>
            </div>
        </footer>


    </div>
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
            if (name==='mine'){
                return 'background-color :' + this.params.mine;
            }
            if (name==='family'){
                return 'background-color :' + this.params.family;
            }
            if (name==='work'){
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
