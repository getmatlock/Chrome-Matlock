{
    properties: {
        link: 'https://github.com/jekyll/jekyll',
        platform: 'GitHub',
        examples: [
            'https://jekyllrb.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Jekyll_(software)'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+name="generator"[^>]+content="Jekyll/i
                ],
                [
                    /<meta[^>]+name="Jekyll[^"]+"[^>]+content="generator"/i
                ]
            ]
        },
        strings: [
            page: [
                [
                    '<!-- Created with Jekyll Now'
                ],
                [
                    '<!-- Begin Jekyll SEO tag'
                ],
                [
                    '<!-- End Jekyll SEO tag'
                ]
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Jekyll ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Jekyll ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
