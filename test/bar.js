define(['../lib/bar'], function(bar) {
    describe('bar', function() {
        it('bar() returns bar!', function() {
            expect(bar.bar()).to.be('bar!');
        });
        it('baz() returns baz!', function() {
            expect(bar.baz()).to.be('baz!');
        });
    });
});
