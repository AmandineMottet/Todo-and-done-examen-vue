<template>
  <main class="main">
    <div class="containerMine">
      <div class="block">
        <div class="firstBlock">
          <div :style="taskColor('mine')" class="blockHeader mb-5 rounded">
            <div class="blockHeaderLeft">
              <h2>Couple / famille</h2>
            </div>
            <div class="blockHeaderRight">
              <div class="dropdown">
                <button class="btn btn-secondary  buttonAdd btn btn-dark btn-sm" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-gear"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li> Couleur</li>
                  <li><input v-model="params.family" type="color" id="color"></li>
                </ul>
              </div>

            </div>

          </div>
          <div class="blockInside">

            <div v-for="family in families" class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">{{ family.name }}</h5>
                <p class="card-text">{{ family.deadline }}</p>
                <p class="card-text">{{ family.description }}</p>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-warning me-2 btn-sm" @click="update(family.index)" data-bs-toggle="modal"
                          data-bs-target="#modalUpdate">
                    <i class="fa-solid fa-pen fa-sm"></i>
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
    </div>
  </main>


  <footer>
    <!-- Button trigger modal -->
    <button type="button" class="pinkButton modalBtn btn btn-primary rounded-circle p-0"
            style="width: 60px; height:60px" data-bs-toggle="modal" data-bs-target="#myModal">
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


    <!-- Modal Update -->
    <div class="modal fade" id="modalUpdate" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
      <form class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalUpdate">Modifier la tâche</h5>
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

            <button type="button" class="btn btn-primary" @click="update">Modifier</button>
          </div>
        </div>
      </form>
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
        deadline: '',
        description: '',
      },
      tasks: [{
        name: 'a',
        groupe: 'mine',
        deadline: '2023-05-01',
        description: 'ds',
      }],
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
        deadline: this.newTask.deadline,
        description: this.newTask.description,
        index: this.index,
      });
      this.index++
      this.newTask = {
        name: '',
        groupe: '',
        deadline: '',
        description: '',
      };
    },
    deleteTask(index) {
      let i = this.tasks.findIndex(function (el) {
        return el.index === index;
      });
      this.tasks.splice(i, 1);
    },

    update(index) {
      let task = this.tasks.find(function (el) {
        return el.index === index;
      });

      this.newTask = {
        index: task.index,
        name: task.name,
        groupe: task.groupe,
        deadline: task.deadline,
        description: task.description,
      }
      this.isEdition = true;


    },

    store() {
      let i = this.tasks.findIndex((el) => {
        return el.index === this.newTask.index;
      });
      this.tasks[i] = this.newTask;
      this.newTask = {
        name: '',
        groupe: '',
        deadline: '',
        description: '',
      };
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