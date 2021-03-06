describe('Sharete', function() {
    beforeEach(function() {
        var btTest = document.createElement('div');
        btTest.setAttribute('class', 'bt-test');

        document.body.appendChild(btTest);

        Sharete('.bt-test');
    });

    it('save element passed', function() {
        expect(Sharete.getElement().length).toBeTruthy();
    });

    it('verify if element passed is a string', function() {
        expect(Sharete(103)).toThrow();
    });

    describe('Config', function() {

        it('verify params if not is object', function() {

            Sharete.config('1234567890');

            expect(Sharete.facebookAppId).toBeTruthy();
        });
    });

});
