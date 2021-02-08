# Backend for serving CV on [cv.bunat.cz](https://cv.bunat.cz)
This is backend that is deployed on [Vercel](https://vercel.com) from where is serving PDF version of my personal resume. This repo contains two approaches:

1. Vercel's Serverless function (master branch)
2. Standalone Express on Vercel (see [Standalone Express branch]())

In the first approach `readFileSync` and `join` are used, in order to make true serverless function. On the other hand, second approach uses Stnadalone Express as suggested [Vercel Guides](https://vercel.com/guides/using-express-with-vercel).

## Link for resume PDF file
[cv.bunat.cz](https://cv.bunat.cz)

## Autor
Lukas Bunat