# Hugo Spicer 
This is hugo themes that i convert from blogger templatae calledd faa from [spicer][0] an blogger template and make by [way2themes][1]. I just convert template into the hugo template, move some unused code and add some function. This not complete themes but it wor well and has lots of feature.

## Theme Features

- [x] Tags 
- [x] Paginate
- [x] Popular and Most Popular Post
- [x] Next and Preview Post 
- [x] Automatic Select First Image as Thumbnail
- [ ] SEO Tags
- [ ] Category
- [ ] Comment Box
- [ ] Recomended Post

> This is work in progress themes mean can be some error just put an issue and i will fix it ASAP

## Move From Hugo Into Hugo

For you want moving from blogger into hugo without messy can following my tutorial in
this blog post [how to move from blogger into hugo complete series][2].

## Using Blogger Permalink
Put all markdown file inside `blog` folder and add these into your `config.toml`

```toml
[permalinks] 
blog = "/:year/:month/:slug/"
```

[0]: https://gumroad.com/l/spicerpremium
[1]: https://www.way2themes.com/
[2]: https://kangmicin.com/