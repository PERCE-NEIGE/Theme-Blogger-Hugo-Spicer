# Hugo Spicer 

![home page spicer](/static/capture/home.png)
This is Hugo themes that I convert from blogger template called  [spicer][0] a blogger template and make by [way2themes][1]. I just convert the template into the Hugo template, move some unused code and add some function. This not complete themes but has necessary feature need to staring blog site.

[![Blogger Sample](https://dabuttonfactory.com/button.png?t=VIEW+BLOGGER&f=Roboto-Bold&ts=12&tc=fff&hp=20&vp=12&c=2&bgt=unicolored&bgc=f90)][3] [![Hugo Sample](https://dabuttonfactory.com/button.png?t=VIEW+HUGO&f=Roboto-Bold&ts=12&tc=fff&hp=20&vp=12&c=2&bgt=unicolored&bgc=0ff)][4]

> **warning**: this theme using Hugo extends version also work well on latest release

## Theme Features

- [x] Tags 
- [x] Paginate
- [x] Popular and Most Popular Post
- [x] Next and Preview Post 
- [x] Automatic Select First Image as Thumbnail
- [ ] SEO Tags
- [ ] Category
- [ ] Comment 
- [ ] Recomended Post

> This is work in progress themes mean can be some error just put an issue and I will fix it ASAP

## Move From Hugo Into Hugo

For you want to move from blogger into Hugo without messy can following my tutorial in
this blog post [how to move from blogger into Hugo complete series][2].

## Applying Blogger Permalink
Put all markdown file inside `blog` folder and add these into your `config.toml`

```toml
[permalinks] 
blog = "/:year/:month/:slug/"
```

[0]: https://gumroad.com/l/spicerpremium
[1]: https://www.way2themes.com/
[2]: https://kangmicin.com/
[3]: https://kangmicin.netlify.com/
[4]: https://hugosample.blogspot.com/