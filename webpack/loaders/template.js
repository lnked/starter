module.exports = [
    {
        test: /\.html$/,
        use: ['html-loader']
    },
    {
        test: /\.|njk|nunjucks$/,
        use: ['nunjucks-loader']
    }
]

// {
//     // HTML LOADER
//     // Super important: We need to test for the html 
//     // as well as the nunjucks files
//     test: /\.html$|njk|nunjucks/,
//     use: [
//         'html-loader', {
//             loader: 'nunjucks-html-loader',
//             options : {
//                 // Other super important. This will be the base
//                 // directory in which webpack is going to find 
//                 // the layout and any other file index.njk is calling.
//                 searchPaths: [...returnEntries('./client/templates/**/')]
//                 // Use the one below if you want to use a single path.
//                 // searchPaths: ['./client/templates'],
//             }
//         }
//     ]
// }