let pageTitle = "هروژه"
const router = {
    404 : {
        template : "./404.html",
        title : `${pageTitle} | 404`
    },
    "/" : {
        template : "./index.html",
        title : `${pageTitle} |  صفحه اصلی `
    },
    "/courses" : {
        template : "./courses.html",
        title : `${pageTitle} |  دوره ها `
    },
     "/product" : {
        template : "./product.html",
        title : `${pageTitle} |  محصولات  `
    },
    "/cart" : {
       template : "./cart.html",
        title : `${pageTitle} |  سبد خرید  `
   },
   "/blog" : {
      template : "./blog.html",
        title : `${pageTitle} |   بلاگ`
  },
  "/article" : {
     template : "./article.html",
        title : `${pageTitle} |   جزئیات مقاله`
 },
}
export default router;