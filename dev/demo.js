var logger = function( name, isCurrent ) {
    
    var results
        , msg
        ;
    
    if ( console && console.log ) {
        return console.log( '=> ' + name + ': ' + isCurrent );
    }
    
    // IE7 logging
    results = document.getElementById( 'breakpoints' );
    msg = '<p>' + name + ': ' + isCurrent + '</p>';
    
    results.innerHTML = results.innerHTML + msg;
}

var handler = function( isCurrent, vp ) {

    logger( vp.name, isCurrent );
};

var myVPOne = viewport([
    {
        name: 'small',
        width: [ 0, 480 ]
    },
    {
        name: 'medium',
        width: [ 481, 768 ]
    },
    {
        name: 'large',
        width: [ 769 ]
    }
]);

var myVPOneAll = myVPOne.subscribe( '*', function( vp ) {
    logger( vp.name, '*' );
});
var myVPOne1 = myVPOne.subscribe( 'small', function( isCurrent, vp ) {
    
    logger( vp.name, isCurrent );
    
    if ( isNaN( myVPOne1 ) ) return;
    
    myVPOne.unsubscribe( myVPOne1 );
});
var myVPOne2 = myVPOne.subscribe( 'medium', handler );
var myVPOne3 = myVPOne.subscribe( 'large', handler );

var myVPTwo = viewport([
    {
        name: 'small-one',
        width: [ 320 ]
    },
    {
        name: 'medium-one',
        width: [ 1250 ]
    },
    {
        name: 'height-one',
        width: [ 600 ],
        height: [ 600 ]
    }
]);
var myVPTwo1 = myVPTwo.subscribe( 'small-one', handler );
var myVPTwo2 = myVPTwo.subscribe( 'medium-one', handler );
var myVPTwo3 = myVPTwo.subscribe( 'height-one', handler );
