{
    properties: {
        link: 'https://github.com/kraaden/autocomplete',
        platform: 'GitHub',
        tags: [
            'autcomplete'
        ],
        tags: [],
        tests: [
            'https://kraaden.github.io/autocomplete/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.autocomplete({input: document.createElement(\'div\')}).destroy'
            ]
        ]
    }
}
