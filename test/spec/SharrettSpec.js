describe('Sharrett', function() {
    beforeEach(function () {
        var btTest = document.createElement('div');
        btTest.setAttribute('class', 'bt-test');

        // var btText = document.createTextNode('Test Button');
        // btTest.appendChild( btText );

        document.body.appendChild( btTest );

        Sharrett('.bt-test');
    });


    it('save element passed', function () {
        expect( Sharrett.getElement().length ).toBeTruthy();
    });
});
