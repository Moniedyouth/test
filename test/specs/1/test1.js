describe('Tests', () => {

    it('Onus', async () => {
        const user = {
            names: 'Max',
            nameShow: function () {
                console.log('My name is:', user.names);
            }
        }
        const admin = {
            names: "Denis",
            names2: 'Leva',
            nameShows: function () {
                console.log('My name is:', admin.names);
            },
            nameShows2: function () {
                console.log('My name is:', admin.names2);
            }


        }
        class Person {
            name
            age = 34
            showName() {
                console.log(this.name);
            }

        }
        const vava = new Person();
        const vovo = new Person();
        vava.name = 'Person1'
        // console.log(vava.name, vovo.name); 
        vava.showName();
        // user.nameShow();
        // admin.nameShows()
        // admin.nameShows2();
    })
})