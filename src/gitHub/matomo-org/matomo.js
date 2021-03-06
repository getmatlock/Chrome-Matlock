{
    properties: {
        examples: [
            'https://theannex.com/'
        ],
        link: 'https://github.com/matomo-org/matomo',
        name: 'Matomo',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Matomo_(software)'
        }
    },
    tests: {
        references: [
            [
                'window.Matomo',
                'window.Matomo.addPlugin'
            ]
        ],
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Matomo'
            }
        ]
    }
}
