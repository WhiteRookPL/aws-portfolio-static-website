# `aws-portfolio-static-website`

## Description

Simple implementation of *portfolio website* backed by *Gatsby.js* for [natywnachmura.pl](https://natywnachmura.pl/engineering-in-the-cloud) workshops.

## License

- [MIT](LICENSE.md)

## Building and Deployments

Installing dependencies (*one-time step*):

```bash
$ npm install
```

Testing your changes locally:

```bash
$ npm run develop
```

Preparing output files (will be available in `public` directory):

```bash
$ npm run build
```

Testing locally generated files from `public` directory:

```bash
$ npm run serve
```

## Customization

There are three main files that can be used for customization:

- `src/content/index.md` - where you can put content for your main page.
- `src/theme/metadata.js` - where you can put your page metadata (e.g. author name and surname or website title).
- `src/theme/main.js` - where you can adjust color theme.

## Author

- [Wojciech Gawroński](mailto:wgawronski@white-rook.pl)
