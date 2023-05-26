<template>
    <div class="container">
      <h2>Votre profil</h2>
      <div class="myDisplay">
        <div class="myTable">
          <table>
            <tr>
              <td><label for="name">Nom</label></td>
              <td><input type="text" value="Mottet"><br></td>
            </tr>
            <tr>
              <td><label for="firstname">Prénom</label></td>
              <td><input type="text" value="Amandine"><br></td>
            </tr>
            <tr>
              <td><label for="birthday">Date anniversaire<i
                  title="Nous préviendrons tes collaborateurs le jour de ton anniversaire !"
                  class="myHover fa-solid fa-circle-info"></i></label></td>
              <td><input type="date" value="13/10/1997"><br></td>
            </tr>
            <tr>
              <td><label for="email">Email</label></td>
              <td><input type="email" value="mot.amandine@outlook.fr"><br></td>
            </tr>
            <tr>
              <td colspan="2"><input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter">
                <label for="subscribeNews">Je souhaite recevoir la newsletter</label></td>
            </tr>

          </table>
        </div>
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
          <iframe src="https://giphy.com/embed/RjDIwuXYPzrAEjb6HP" width="300px" height="300px"
                  style="position:absolute" frameBorder="0" class="giphy-embed"></iframe>
        </div>
        <p><a href="https://giphy.com/gifs/IntoAction-mental-health-resources-crisis-RjDIwuXYPzrAEjb6HP"></a></p>
      </div>
    </div>
</template>

<script>
export default {
  name: "Account"
}
</script>

<style scoped>

</style>