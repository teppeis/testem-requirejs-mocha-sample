define(['../lib/foo'], function(foo) {
    describe('foo', function() {
        it('is foo!', function() {
            expect(foo).to.be('foo!');
        });
    });
});
