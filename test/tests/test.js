describe( 'viewport setup', function() {

    it( 'should set up a viewport', function() {

        var vp = viewport([
            {
                name: 'first',
                width: [ 1 ]
            }
        ]);

        assert.equal( vp.is( 'first' ), true );
        assert.equal( vp.current(), vp.vps[ 'first' ] );
        assert.equal( vp.matches( 'first' ), true );
    });
});


describe('viewport tests', function() {

    // phantomjs defaults to width = 300, height = 400
    var width = window.innerWidth
        , height = window.innerHeight
        ;

    it( 'should return the correct viewport object based on width', function() {

        var vp = viewport([
            {
                name: 'first',
                width: [ 0, width - 1 ]
            },
            {
                name: 'second',
                width: [ width ]
            }
        ]);

        assert.equal( vp.current(), vp.vps[ 'second' ] );
        assert.equal( vp.matches( 'second' ), true );
        assert.equal( vp.is( 'second' ), true );
    });

    it( 'should return the correct viewport object based on height', function() {

        var vp = viewport([
            {
                name: 'first',
                height: [ 0, height - 1 ]
            },
            {
                name: 'second',
                height: [ height ]
            }
        ]);

        assert.equal( vp.current(), vp.vps[ 'second' ] );
        assert.equal( vp.matches( 'second' ), true );
        assert.equal( vp.is( 'second' ), true );
    });

    it( 'should return the correct viewport object based on width and height', function() {

        var vp = viewport([
            {
                name: 'first',
                height: [ 0, height - 1 ],
                width: [ 0, width - 1 ]
            },
            {
                name: 'second',
                height: [ height ],
                width: [ width ]
            }
        ]);

        assert.equal( vp.current(), vp.vps[ 'second' ] );
        assert.equal( vp.matches( 'second' ), true );
        assert.equal( vp.is( 'second' ), true );
    });

    it( 'should return the last matching viewport object when multiple match', function() {

      var vp = viewport([
        {
          name: 'first',
          height: [ height ],
          width: [ width ]
        },
        {
          name: 'second',
          height: [ height ],
          width: [ width ]
        },
        {
          name: 'third',
          height: [ height ],
          width: [ width ]
        }
      ]);

      assert.equal( vp.current(), vp.vps[ 'third' ] );
      assert.equal( vp.matches( 'third' ), true );
      assert.equal( vp.is( 'third' ), true );

    });
});
