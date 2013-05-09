define(['jquery'], function($) {
    describe('jQuery', function() {
        it('$.trim(" hoge ") returns "hoge".', function() {
            expect($.trim(' hoge ')).to.be('hoge');
        });
    });
});
