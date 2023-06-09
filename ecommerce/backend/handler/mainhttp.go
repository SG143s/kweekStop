package handler

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"

	au "github.com/SG143s/kweekStop/ecommerce/auth"
	pg "github.com/SG143s/kweekStop/ecommerce/spages"
)

func Start() {
	r := gin.Default()
	store := cookie.NewStore([]byte("secret"))
	r.Use(sessions.Sessions("mysession", store))
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	r.Use(cors.New(config))

	r.GET("/", pg.PaHome)
	r.GET("/products", pg.PaProd)
	r.GET("/products/sort/expensive", pg.ExProd)
	r.GET("/products/sort/cheap", pg.ChProd)
	r.GET("/products/sort/popular", pg.PoProd)
	r.GET("/logout", au.LogOut)
	r.GET("/profile", pg.Profile)
	r.GET("/cart")

	r.POST("/login", au.LogIn)
	r.POST("/cart/add", pg.CartAdd)
	r.POST("/cart/inc", pg.ButtonCart1)
	r.POST("/cart/dec", pg.ButtonCart2)
	r.POST("/cart/del", pg.ButtonCart3)
	r.POST("/register", pg.RegUs)
	r.POST("/checkout", pg.Checkout)
	r.POST("/product/add", pg.AddProd)
	r.POST("/shop/add", pg.AddShop)

	r.Run(":8000")
}
