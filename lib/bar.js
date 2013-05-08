define(['./baz'], function(baz) {
    return {
        bar: function() {
            return 'bar!';
        },
        baz: function() {
            return baz;
        }
    };
});
