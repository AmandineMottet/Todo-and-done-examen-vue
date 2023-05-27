<template>
    

    <div>
        <main>
            <div class="container global">
                <div class="leftSide">
                    <img src="/public/Files/logo1-big.png" alt="logoTodo">
                    <h2>Avec Todo and Done, get shit done !</h2>
                </div>
                <div class="rightSide">
                    <div class="container container-fluid">
                        <form action="#">
                            <input v-model="newAccount.email" type="email" placeholder="Email" >
                            <input v-model="newAccount.password" type="password" placeholder="Mot de passe" >
                            <button class="btn btnBlue"><a href="/" class="linkSimple"> Se connecter </a> </button>
                            <!-- Button trigger modal -->
                            <button type="button" class="modalBtn btn btnPink" data-bs-toggle="modal" data-bs-target="#myModal">Créer un compte</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModal" aria-hidden="true">
                <form class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Création de compte</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="card-body">
                                <div class="form-group">
                                    <label class="form-label" for="name">Nom</label>
                                    <input class="form-control" type="text" id="name">
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="firstName">Prénom</label>
                                    <input class="form-control" type="text" id="firstName">
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="birthday">Date de naissance</label>
                                    <input class="form-control" type="date" id="birthday">
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="email">Email</label>
                                    <input v-model="newAccount.email"  class="form-control" type="email" id="email">
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="mdp">Mot de passe</label>
                                    <input v-model="newAccount.password" class="form-control" type="password" id="mdp">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Get organized !</button>
                        </div>
                    </div>
                </form>
            </div>



        </main>

    </div>


</template>

<script>

export default {
    data() {
        return {
            newAccount: {
                name: '',
                firstName: '',
                birthday: '',
                email: '',
                password: '',
            },
            accounts: [],
            index: 1,
        };
    },
    methods: {
        create() {
            this.newAccount.push({
                name: this.newAccount.name,
                firstName: this.newAccount.firstName,
                birthday: this.newAccount.birthday,
                email: this.newAccount.email,
                password: this.newAccount.password,
                index: this.index,
            });
            this.index++
            this.newAccount = {
                name: '',
                firstName: '',
                birthday: '',
                email: '',
                password: '',
            };
        },
    },
    computed: {
        account(){
            return this.newAccount;
        },
    },
}

</script>

