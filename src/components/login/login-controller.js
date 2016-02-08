export default class LoginController {
    constructor($state, $previousState, SessionService) {
        this.loginError = false;
        this.$state = $state;
        this.$previousState = $previousState;
        this.previous = $previousState.get();
        this.SessionService = SessionService;
        this.credentials = {
            username: '',
            password: ''
        }
    }
    login() {
        this.SessionService.LOGIN(this.credentials).then(response => {
            this.SessionService.create(response.data);
            if (this.previous != null) {
                this.$previousState.go();
            } else {
                this.$state.go('home');
            }
        }, (error) => {
            this.loginError = false;
            if (error.status === 404) {
                this.loginError = 'Onjuiste gebruikersnaam en/of wachtwoord'
            }
            else if (error.status === 501) {
                this.loginError = 'Server fout! probeer het later nog eens'
            }
        })
    }
}
LoginController.$inject = ['$state', '$previousState', 'SessionService'];