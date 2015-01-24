require.config({
    paths: {
        'text': 'libs/text'
        , 'react': 'libs/react'
        , 'JSXTransformer': 'libs/JSXTransformer.mod'
        , 'jsx': 'libs/jsx'
        , 'showdown': 'htp://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min'
        , 'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
	, 'director': 'libs/director.min'
    }
    , shim: {
        'JSXTransformer': {
            exports: 'JSXTransformer'
        }
        , 'jsx': [ 'text' ]
	, 'jqueryUI': ['jquery']
    }
    , jsx: {
        fileExtension: '.jsx'
    }
});

require(
[
    'jsx!runner'
    , 'UIMethods'
]
, function(
    BootStrap
    , UIMethods
) {
    // TODO: figure out how to get the code in bootstrap set up in here
    BootStrap.init();
    // this is for your semantic js stuff
    UIMethods.init();
});

