<template>
  <div>
    <header>
      <div class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a id="ToDo" class="nav-link navbar-dark bg-dark active text-white rounded-3" aria-current="page"
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
            <div class="blockHeader mb-5 rounded">
              <div class="blockHeaderLeft">
                <h2>Mes tâches</h2>
              </div>
              <div class="blockHeaderRight">
                <button class="buttonAdd btn btn-dark btn-sm">...</button>
                <button class="buttonProfile btn btn-dark btn-sm rounded-circle">A</button>
              </div>
            </div>
            <div class="blockInside">
              <h3 class="blockTitle">Aujourd'hui</h3>
              <div v-for="mine in mines" class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{{ mine.name}}</h5>
                  <p class="card-text">{{ mine.collab}}</p>
                  <p class="card-text">{{ mine.deadline}}</p>
                  <p class="card-text">{{ mine.description}}</p>
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-warning me-2">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn btn-danger" @click="deleateTask(mine.name)">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
              <h3 class="blockTitle">Demain</h3>
              <div class="card"></div>
              <h3 class="blockTitle">A venir</h3>
              <div class="card"></div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="firstBlock">
            <div class="blockHeader mb-5 rounded">
              <div class="blockHeaderLeft">
                <h2>Couple / famille</h2>
              </div>
              <div class="blockHeaderRight">
                <button class="buttonAdd btn btn-dark btn-sm">...</button>
                <button class="buttonProfile btn btn-dark btn-sm rounded-circle">A</button>
              </div>

            </div>
            <div class="blockInside">
              <h3 class="blockTitle">Aujourd'hui</h3>
              <div v-for="family in families" class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{{ family.name}}</h5>
                  <p class="card-text">{{ family.collab}}</p>
                  <p class="card-text">{{ family.deadline}}</p>
                  <p class="card-text">{{ family.description}}</p>
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-warning me-2">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn btn-danger" @click="deleteTask(family.name)">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
              <h3 class="blockTitle">Demain</h3>
              <div class="card"></div>
              <h3 class="blockTitle">A venir</h3>
              <div class="card"></div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="firstBlock">
            <div class="blockHeader mb-5 rounded">
              <div class="blockHeaderLeft">
                <h2>Travail</h2>
              </div>
              <div class="blockHeaderRight">
                <button class="buttonAdd btn btn-dark btn-sm">...</button>
                <button class="buttonProfile btn btn-dark btn-sm rounded-circle">A</button>
              </div>

            </div>
            <div class="blockInside">
              <h3 class="blockTitle">Aujourd'hui</h3>
              <div v-for="work in works" class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{{ work.name}}</h5>
                  <p class="card-text">{{ work.collab}}</p>
                  <p class="card-text">{{ work.deadline}}</p>
                  <p class="card-text">{{ work.description}}</p>
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-warning me-2">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn btn-danger" @click="deleteTask(work.name)">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
              <h3 class="blockTitle">Demain</h3>
              <div class="card"></div>
              <h3 class="blockTitle">A venir</h3>
              <div class="card"></div>
            </div>
          </div>
        </div>

      </div>
    </main>
    <footer>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-lg btn-dark rounded-circle pb-3 pe-3" data-toggle="modal"
              data-target="#exampleModal">+
      </button>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <form class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nouvelle tâche</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
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
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
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
        groupe:'',
        collab: '',
        deadline: '',
        description: '',
      },
      tasks: [],
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

      });
      this.newTask = {
        name: '',
        groupe: '',
        collab: '',
        deadline: '',
        description: '',
      };
    },
    deleteTask(name) {
      let index = this.tasks.findIndex(function (el) {
        return el.name === name;
      });
      this.tasks.splice(index, 1);
    },
    update() {

    },
  },
  computed: {
    mines() {
      return this.tasks.filter(el => el.groupe === 'mine');
      /*
      Equivant à :
      return this.animals.filter(function(el){
          return el.type === 'bloup'
       */
    },
    families() {
      return this.tasks.filter(el => el.groupe=== 'family');
    },
    works() {
      return this.tasks.filter(el => el.groupe === 'work');
    },
  },
}


</script>
