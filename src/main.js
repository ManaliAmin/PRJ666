import Vue from 'vue'
import App from './App.vue'

var mixin = {
  data: {
		users: [],
		newUser: {username: "", email: "", mobile: ""},
	},
  methods: {
    foo: function () {
      console.log('foo')
    },
    getAllUsers: function(){
			axios.get("http://localhost:8081/api.php?action=get")
			.then(function(response){
				if (response.data.error) {
					vm.errorMessage = response.data.message;
				}else{
					vm.users = response.data.users;
				}
			});
    },
    updateSigninCounter: function(username){
      axios.get("http://localhost:8081/api.php?action=updateSigninCounter&username="+ username)
			.then(function(response){
				if (response.data.error) {
					vm.errorMessage = response.data.message;
				}else{
					console.log("updated");
				}
			});
    }
  }
}

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

var vm = new Vue({
  el: '#app',
  mixins: [mixin],
  render: h => h(App)
})
global.vm = vm;